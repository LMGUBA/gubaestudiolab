// Comportamientos de la página: aparición al hacer scroll, barra fija con
// progreso, foco de luz en las tarjetas y paralaje del hero. Todo es mejora
// progresiva: sin JS la página se ve completa y sin JS falla nada.

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

/** Aparición de bloques al entrar en pantalla. */
function initReveal() {
  const items = document.querySelectorAll<HTMLElement>('[data-reveal]');

  if (reduceMotion.matches || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-in'));
    return;
  }

  // Al terminar la entrada retiramos el atributo: si se quedara, su
  // `transition` (620 ms) seguiría mandando sobre los hovers de la tarjeta.
  const settle = (el: HTMLElement) => {
    const delay = Number.parseFloat(getComputedStyle(el).transitionDelay) * 1000 || 0;
    window.setTimeout(() => {
      el.removeAttribute('data-reveal');
      el.style.willChange = '';
    }, delay + 700);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        el.classList.add('is-in');
        observer.unobserve(el);
        settle(el);
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.15 },
  );

  items.forEach((el) => observer.observe(el));
}

/** Barra superior: aparece tras el hero, marca la sección activa y el avance. */
function initStickyNav() {
  const nav = document.querySelector<HTMLElement>('[data-sticky-nav]');
  const hero = document.getElementById('hero');
  if (!nav) return;

  const progress = nav.querySelector<HTMLElement>('[data-progress]');
  const toTop = document.querySelector<HTMLElement>('[data-back-to-top]');
  const links = Array.from(nav.querySelectorAll<HTMLAnchorElement>('[data-nav-link]'));
  const sections = links
    .map((link) => document.querySelector<HTMLElement>(link.getAttribute('href') ?? ''))
    .filter((section): section is HTMLElement => Boolean(section));

  let ticking = false;

  const update = () => {
    ticking = false;
    const y = window.scrollY;

    const threshold = hero ? hero.offsetHeight - 120 : 400;
    nav.classList.toggle('is-shown', y > threshold);

    // El botón de volver arriba aparece más tarde que la barra: solo cuando
    // regresar arriba con la rueda ya cuesta de verdad.
    toTop?.classList.toggle('is-shown', y > window.innerHeight * 1.5);

    if (progress) {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? Math.min(y / scrollable, 1) : 0;
      progress.style.setProperty('--progress', ratio.toFixed(4));
    }

    // Sección activa: la última cuyo borde superior ya pasó la barra.
    let activeIndex = -1;
    sections.forEach((section, i) => {
      if (section.getBoundingClientRect().top <= 140) activeIndex = i;
    });
    links.forEach((link, i) => link.classList.toggle('is-active', i === activeIndex));
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();
}

/** Foco de luz que sigue al cursor dentro de las tarjetas. */
function initSpotlight() {
  if (reduceMotion.matches || !window.matchMedia('(hover: hover)').matches) return;

  for (const card of document.querySelectorAll<HTMLElement>('[data-spot]')) {
    card.addEventListener(
      'pointermove',
      (event) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
        card.style.setProperty('--my', `${event.clientY - rect.top}px`);
      },
      { passive: true },
    );
  }
}

/** Paralaje de la decoración del hero según la posición del cursor. */
function initParallax() {
  const hero = document.getElementById('hero');
  if (!hero || reduceMotion.matches || !window.matchMedia('(hover: hover)').matches) return;

  const layers = hero.querySelectorAll<HTMLElement>('.hero-parallax');
  if (!layers.length) return;

  hero.addEventListener(
    'pointermove',
    (event) => {
      const rect = hero.getBoundingClientRect();
      const px = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const py = ((event.clientY - rect.top) / rect.height) * 2 - 1;
      layers.forEach((layer) => {
        layer.style.setProperty('--px', px.toFixed(3));
        layer.style.setProperty('--py', py.toFixed(3));
      });
    },
    { passive: true },
  );

  hero.addEventListener('pointerleave', () => {
    layers.forEach((layer) => {
      layer.style.setProperty('--px', '0');
      layer.style.setProperty('--py', '0');
    });
  });
}

/** Botón flotante de contacto que despliega WhatsApp, llamada y correo. */
function initContactDock() {
  const dock = document.querySelector<HTMLElement>('[data-contact-dock]');
  const toggle = dock?.querySelector<HTMLButtonElement>('[data-dock-toggle]');
  if (!dock || !toggle) return;

  const setOpen = (open: boolean) => {
    dock.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute(
      'aria-label',
      open ? 'Cerrar opciones de contacto' : 'Abrir opciones de contacto',
    );
  };

  setOpen(false);

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  // Al elegir un canal el menú ya cumplió su función.
  dock.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('click', (event) => {
    if (!dock.contains(event.target as Node)) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || toggle.getAttribute('aria-expanded') !== 'true') return;
    setOpen(false);
    toggle.focus();
  });
}

function init() {
  try {
    initReveal();
    initStickyNav();
    initSpotlight();
    initParallax();
    initContactDock();
  } catch (error) {
    // Nada de esto es esencial, pero el estado inicial del reveal esconde
    // contenido: si algo falla lo mostramos todo antes de rendirnos.
    document
      .querySelectorAll<HTMLElement>('[data-reveal]')
      .forEach((el) => el.classList.add('is-in'));
    console.error('[motion]', error);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init, { once: true });
} else {
  init();
}
