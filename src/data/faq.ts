// Preguntas frecuentes. Esta lista alimenta dos cosas a la vez: la sección
// visible del sitio y el JSON-LD de tipo FAQPage. Los buscadores con IA
// (AI Overviews de Google, ChatGPT, Perplexity) citan respuestas cortas y
// autocontenidas, así que cada `answer` debe entenderse sin leer el resto de
// la página: repite el sujeto en vez de decir "nosotros" o "este servicio".
//
// TODO(GUBA): las respuestas de precio y plazo usan rangos genéricos. Cámbialas
// por tus cifras reales — una respuesta concreta se cita mucho más que una vaga.
export interface FaqItem {
  question: string;
  answer: string;
}

export const faq: FaqItem[] = [
  {
    question: '¿Qué es GUBA ESTUDIO LAB?',
    answer:
      'GUBA ESTUDIO LAB es un estudio de diseño y desarrollo web con base en Pucallpa, Ucayali, Perú. Se especializa en dos tipos de proyecto: sitios web estáticos, pensados para comunicar con claridad y cargar rápido, y plataformas web dinámicas, pensadas para operar, publicar y gestionar datos. También ofrece automatización de procesos como servicio independiente.',
  },
  {
    question: '¿Cuál es la diferencia entre una página web estática y una dinámica?',
    answer:
      'Una página web estática entrega contenido ya construido: es más rápida, más barata de mantener y más segura, y sirve para presentar un negocio, un portafolio o un catálogo que cambia poco. Una web dinámica genera contenido según quién la usa y qué datos hay detrás: permite cuentas de usuario, paneles de administración, formularios que guardan información y contenido editable sin tocar código. La regla práctica es que si solo necesitas mostrar información, estática basta; si necesitas gestionar información, necesitas dinámica.',
  },
  {
    question: '¿Cuánto cuesta hacer una página web con GUBA ESTUDIO LAB?',
    answer:
      'El precio depende del alcance: una web estática de pocas secciones cuesta bastante menos que una plataforma con usuarios y panel de administración. GUBA ESTUDIO LAB define primero el objetivo del proyecto y luego entrega un presupuesto cerrado antes de empezar, sin costos variables durante el desarrollo. Puedes pedir una cotización por WhatsApp al +51 945 092 299.',
  },
  {
    question: '¿Cuánto tarda en estar lista una página web?',
    answer:
      'Un sitio web estático suele estar publicado en cuestión de semanas, mientras que una plataforma dinámica con cuentas, paneles o integraciones toma más tiempo porque incluye pruebas de datos y permisos. GUBA ESTUDIO LAB trabaja con un primer lanzamiento realista y acotado, y desde ahí agrega secciones o funciones por etapas.',
  },
  {
    question: '¿GUBA ESTUDIO LAB atiende fuera de Pucallpa?',
    answer:
      'Sí. GUBA ESTUDIO LAB tiene base en Pucallpa, Ucayali, pero trabaja de forma remota con clientes de todo el Perú y del extranjero. La coordinación se hace por WhatsApp, correo y videollamada, y la entrega es siempre digital, así que la ubicación del cliente no cambia el alcance ni el proceso.',
  },
  {
    question: '¿Qué incluye el servicio de automatización?',
    answer:
      'La automatización consiste en conectar las herramientas que ya usa un negocio y eliminar tareas repetitivas: pasar datos de un formulario a una hoja de cálculo, enviar avisos automáticos, sincronizar sistemas que no se hablan entre sí. En GUBA ESTUDIO LAB es un proyecto independiente del desarrollo web, con su propio alcance y presupuesto, y puede contratarse sin tener un sitio hecho con el estudio.',
  },
  {
    question: '¿Ofrecen mantenimiento después de publicar el sitio?',
    answer:
      'Sí. GUBA ESTUDIO LAB ofrece soporte continuo después del lanzamiento: mantenimiento, nuevas secciones, mejoras de rendimiento y acompañamiento para medir resultados. La idea es que el sitio siga creciendo con el negocio en vez de quedarse congelado el día que se publica.',
  },
  {
    question: '¿Qué tecnologías usa GUBA ESTUDIO LAB?',
    answer:
      'GUBA ESTUDIO LAB trabaja con tecnologías de vanguardia: generadores de sitios de última generación que producen páginas ultraligeras y optimizadas para velocidad y posicionamiento en buscadores, y plataformas dinámicas con bases de datos, autenticación y paneles de administración. La elección de tecnología parte del objetivo del proyecto, no al revés: no se agrega complejidad que el negocio no necesite.',
  },
];
