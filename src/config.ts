// Datos del estudio. Se usan en la UI y en los metadatos SEO (canonical,
// Open Graph, sitemap y datos estructurados JSON-LD).
export const site = {
  name: 'GUBA ESTUDIO LAB',
  // Como también nos buscan por el nombre corto, lo declaramos aparte para
  // pasarlo como alternateName en el JSON-LD.
  shortName: 'GUBA ESTUDIO',
  // Sin barra final: las URLs absolutas se arman concatenando rutas.
  url: 'https://www.gubaestudio.com',
  description:
    'Diseñamos y desarrollamos sitios web estáticos para comunicar con claridad, y plataformas dinámicas para operar, publicar y escalar.',
  // Verificación permanente de la propiedad URL-prefix en Google Search Console.
  googleSiteVerification: 'YnlLTPNSeMOpIOjiecCUut25mGbMK4ee-YbK0i4e2us',
  // WhatsApp: +51 945 092 299
  whatsapp: 'https://wa.me/51945092299',
  phone: 'tel:+51945092299',
  phoneLabel: '+51 945 092 299',
  phoneE164: '+51945092299',
  // Correo de contacto del estudio.
  email: 'mailto:luisguerebalvin@gmail.com',
  emailPlain: 'luisguerebalvin@gmail.com',
  address: {
    city: 'Pucallpa',
    region: 'Ucayali',
    country: 'PE',
    countryLabel: 'Perú',
  },
  // Perfiles públicos del estudio. Google los usa para confirmar que la marca
  // y el sitio son la misma entidad, así que conviene llenarlos en cuanto
  // existan (Instagram, Facebook, LinkedIn, ficha de Google Maps…).
  profiles: [] as string[],
};
