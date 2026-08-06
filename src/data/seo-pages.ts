export interface SeoPage {
  slug: string;
  title: string;
  description: string;
  label: string;
  heading: string;
  lead: string;
  serviceType: string;
  introHeading: string;
  intro: string[];
  idealForHeading: string;
  idealForIntro: string;
  idealFor: Array<{ title: string; text: string }>;
  includesHeading: string;
  includes: Array<{ title: string; text: string }>;
  decisionHeading: string;
  decision: string[];
  faqs: Array<{ question: string; answer: string }>;
  related: Array<{ label: string; href: string; text: string }>;
}

export const seoPages: SeoPage[] = [
  {
    slug: 'diseno-paginas-web-pucallpa',
    title: 'Diseño de páginas web en Pucallpa | GUBA Estudio',
    description:
      'Diseñamos páginas web en Pucallpa para negocios, profesionales y empresas de Ucayali. Sitios rápidos, claros y listos para convertir visitas en contactos.',
    label: 'SERVICIO LOCAL EN UCAYALI',
    heading: 'DISEÑO DE PÁGINAS WEB EN PUCALLPA',
    lead:
      'Creamos sitios que explican bien tu negocio, funcionan rápido en celular y facilitan que un cliente te escriba, llame o solicite una cotización.',
    serviceType: 'Diseño y desarrollo de páginas web en Pucallpa',
    introHeading: 'UNA PÁGINA WEB HECHA PARA CÓMO TE BUSCAN TUS CLIENTES',
    intro: [
      'Una persona que busca un servicio en Pucallpa suele comparar varias opciones desde el celular. En pocos segundos necesita entender qué haces, dónde atiendes, por qué confiar y cómo contactarte. La página debe responder esas preguntas sin obligarla a recorrer textos genéricos.',
      'GUBA ESTUDIO LAB trabaja desde Pucallpa y diseña el contenido, la interfaz y el desarrollo como una sola pieza. Definimos primero el objetivo comercial. Después elegimos si basta un sitio informativo o si el negocio necesita funciones como catálogos editables, reservas, usuarios o paneles.',
    ],
    idealForHeading: 'QUÉ TIPO DE NEGOCIO PUEDE APROVECHARLA',
    idealForIntro:
      'El alcance cambia según el servicio y la forma en que el cliente toma una decisión. Estos son casos frecuentes en Pucallpa y Ucayali.',
    idealFor: [
      {
        title: 'Servicios profesionales',
        text: 'Estudios, consultores, arquitectos, técnicos y especialistas que necesitan presentar experiencia, servicios y vías de contacto con claridad.',
      },
      {
        title: 'Comercio y gastronomía',
        text: 'Negocios que necesitan mostrar productos, carta, horarios, ubicación, medios de pago y atención directa por WhatsApp.',
      },
      {
        title: 'Empresas y proveedores',
        text: 'Organizaciones que participan en cotizaciones o licitaciones y requieren una presencia digital formal, verificable y fácil de compartir.',
      },
      {
        title: 'Proyectos turísticos',
        text: 'Alojamientos, operadores y experiencias que necesitan explicar su propuesta, resolver dudas y recibir consultas desde otras ciudades.',
      },
    ],
    includesHeading: 'QUÉ INCLUYE UN PROYECTO WEB',
    includes: [
      {
        title: 'Estrategia y contenido',
        text: 'Ordenamos la información según las preguntas reales del cliente y definimos una llamada a la acción principal.',
      },
      {
        title: 'Diseño adaptable',
        text: 'La interfaz se prepara para celular, tablet y computadora, con lectura clara y controles fáciles de usar.',
      },
      {
        title: 'Desarrollo y publicación',
        text: 'Construimos el sitio, conectamos el dominio, activamos HTTPS y dejamos los archivos listos para producción.',
      },
      {
        title: 'SEO técnico inicial',
        text: 'Configuramos títulos, descripciones, canonicales, sitemap, robots y datos estructurados para facilitar el rastreo.',
      },
      {
        title: 'Medición y contacto',
        text: 'Preparamos eventos o analítica según el alcance y hacemos visibles WhatsApp, teléfono, correo o formulario.',
      },
    ],
    decisionHeading: 'PÁGINA INFORMATIVA O PLATAFORMA DINÁMICA',
    decision: [
      'Si el objetivo es presentar servicios, proyectos, productos o información que cambia poco, una página estática suele ser la opción más rápida, segura y simple de mantener.',
      'Si necesitas que varias personas publiquen contenido, que clientes creen cuentas, que un formulario guarde datos o que exista un panel administrativo, conviene una plataforma dinámica. La elección se toma por necesidad operativa, no por tendencia tecnológica.',
    ],
    faqs: [
      {
        question: '¿Cuánto cuesta una página web en Pucallpa?',
        answer:
          'El precio depende del número de secciones, el contenido disponible y las funciones. Una página informativa cuesta menos que una plataforma con usuarios, pagos o panel administrativo. GUBA ESTUDIO LAB define el alcance y entrega un presupuesto cerrado antes de comenzar.',
      },
      {
        question: '¿Atienden reuniones presenciales en Pucallpa?',
        answer:
          'GUBA ESTUDIO LAB tiene base en Pucallpa. La coordinación puede realizarse por videollamada, WhatsApp o, cuando el proyecto lo requiere y se acuerda previamente, de forma presencial.',
      },
      {
        question: '¿La página aparecerá inmediatamente en Google?',
        answer:
          'La página se entrega preparada para ser rastreada e indexada, pero Google decide cuándo la incorpora y en qué posición la muestra. El proceso puede tomar desde días hasta varias semanas. El contenido útil, la autoridad del dominio, las menciones externas y el tiempo también influyen.',
      },
    ],
    related: [
      {
        label: 'Páginas web estáticas',
        href: '/paginas-web-estaticas',
        text: 'Para negocios que necesitan informar, generar confianza y recibir contactos.',
      },
      {
        label: 'Plataformas web dinámicas',
        href: '/plataformas-web-dinamicas',
        text: 'Para operaciones con usuarios, contenido editable, formularios y datos.',
      },
      {
        label: 'Automatización de procesos',
        href: '/automatizacion-de-procesos',
        text: 'Para conectar herramientas y reducir tareas manuales repetitivas.',
      },
    ],
  },
  {
    slug: 'paginas-web-estaticas',
    title: 'Páginas web estáticas para negocios | GUBA Estudio',
    description:
      'Diseño y desarrollo de páginas web estáticas rápidas, seguras y fáciles de mantener para empresas, profesionales, portafolios y catálogos informativos.',
    label: 'SITIOS RÁPIDOS Y FÁCILES DE MANTENER',
    heading: 'PÁGINAS WEB ESTÁTICAS PARA NEGOCIOS',
    lead:
      'Una web estática es la opción correcta cuando necesitas presentar tu negocio con claridad, cargar rápido y evitar una administración técnica innecesaria.',
    serviceType: 'Diseño y desarrollo de páginas web estáticas',
    introHeading: 'QUÉ ES UNA PÁGINA WEB ESTÁTICA',
    intro: [
      'Una página estática entrega al navegador archivos ya preparados. No consulta una base de datos para construir cada visita y no necesita un panel de administración si el contenido cambia poco. Esa arquitectura reduce puntos de falla, mejora la velocidad y simplifica el mantenimiento.',
      'Estática no significa básica ni inmóvil. El sitio puede tener diseño personalizado, animaciones, formularios, galerías, mapas, analítica y conexión con servicios externos. La diferencia está en cómo se publica y actualiza la información, no en la calidad visual.',
    ],
    idealForHeading: 'CUÁNDO CONVIENE ELEGIRLA',
    idealForIntro:
      'Funciona mejor cuando el objetivo principal es comunicar y el contenido no requiere cambios diarios desde un panel.',
    idealFor: [
      {
        title: 'Página corporativa',
        text: 'Presenta empresa, servicios, experiencia, equipo, proyectos y contacto en una estructura rápida y fácil de compartir.',
      },
      {
        title: 'Portafolio profesional',
        text: 'Organiza trabajos, casos o especialidades y dirige las visitas hacia una consulta o solicitud de propuesta.',
      },
      {
        title: 'Landing de campaña',
        text: 'Explica una oferta concreta y concentra la atención en una acción medible como reservar, registrarse o cotizar.',
      },
      {
        title: 'Catálogo informativo',
        text: 'Muestra categorías y productos cuando las compras se cierran por WhatsApp, llamada, correo o atención presencial.',
      },
    ],
    includesHeading: 'QUÉ PREPARAMOS ANTES DE PUBLICAR',
    includes: [
      {
        title: 'Arquitectura de información',
        text: 'Definimos páginas, secciones y recorridos de acuerdo con lo que la audiencia necesita decidir.',
      },
      {
        title: 'Diseño propio',
        text: 'Trabajamos jerarquía, tipografía, color y componentes para que la web represente al negocio.',
      },
      {
        title: 'Contenido indexable',
        text: 'El texto principal queda en HTML semántico para que pueda leerse con o sin JavaScript.',
      },
      {
        title: 'Rendimiento',
        text: 'Reducimos dependencias, optimizamos recursos y evitamos cargar funciones que la página no usa.',
      },
      {
        title: 'Publicación segura',
        text: 'Configuramos dominio, HTTPS, canonicales, sitemap y los archivos necesarios para los buscadores.',
      },
    ],
    decisionHeading: 'CUÁNDO UNA WEB ESTÁTICA DEJA DE SER SUFICIENTE',
    decision: [
      'Si el equipo necesita publicar noticias todos los días, administrar cientos de productos, recibir pagos, manejar cuentas de usuario o consultar información privada, conviene evaluar una solución dinámica.',
      'También se puede comenzar con una web estática y ampliar después. Diseñar bien la arquitectura inicial permite lanzar una primera versión útil sin pagar desde el inicio por funciones que todavía no se usan.',
    ],
    faqs: [
      {
        question: '¿Una página estática puede tener formulario de contacto?',
        answer:
          'Sí. El formulario puede conectarse a un servicio de correo, una función segura o una herramienta de automatización. La página sigue siendo estática porque no necesita generar su contenido desde una base de datos.',
      },
      {
        question: '¿Puedo actualizar el contenido después?',
        answer:
          'Sí. GUBA ESTUDIO LAB puede realizar actualizaciones puntuales o acordar un plan de soporte. Si el negocio necesita editar contenido con mucha frecuencia, se evalúa un gestor o una plataforma dinámica.',
      },
      {
        question: '¿Una web estática ayuda al posicionamiento SEO?',
        answer:
          'Su velocidad, estabilidad y HTML accesible crean una buena base técnica. El posicionamiento también depende de la utilidad del contenido, la competencia de cada búsqueda, la autoridad del dominio y las referencias externas.',
      },
    ],
    related: [
      {
        label: 'Diseño web en Pucallpa',
        href: '/diseno-paginas-web-pucallpa',
        text: 'Servicio local para empresas, profesionales y negocios de Ucayali.',
      },
      {
        label: 'Plataformas web dinámicas',
        href: '/plataformas-web-dinamicas',
        text: 'La alternativa cuando necesitas usuarios, paneles o gestión de datos.',
      },
      {
        label: 'Automatización de procesos',
        href: '/automatizacion-de-procesos',
        text: 'Conecta formularios, hojas de cálculo, avisos y otras herramientas.',
      },
    ],
  },
  {
    slug: 'plataformas-web-dinamicas',
    title: 'Plataformas web dinámicas en Perú | GUBA Estudio',
    description:
      'Desarrollamos plataformas web dinámicas con usuarios, paneles administrativos, formularios, contenido editable e integraciones para empresas en Perú.',
    label: 'SISTEMAS WEB PARA OPERAR Y PUBLICAR',
    heading: 'PLATAFORMAS WEB DINÁMICAS PARA EMPRESAS',
    lead:
      'Diseñamos herramientas web que permiten administrar contenido, recibir datos, organizar procesos y dar acceso seguro a clientes o equipos.',
    serviceType: 'Diseño y desarrollo de plataformas web dinámicas',
    introHeading: 'UNA WEB DINÁMICA TRABAJA CON DATOS Y PERMISOS',
    intro: [
      'Una plataforma dinámica genera contenido a partir de una base de datos y puede mostrar información diferente según la persona que ingresa. Esto permite crear cuentas, paneles administrativos, flujos de aprobación, catálogos editables y áreas privadas.',
      'El desarrollo comienza por el proceso que la empresa necesita resolver. Documentamos quién usa el sistema, qué información ingresa, qué acciones puede realizar y qué resultado espera. Esa definición evita construir pantallas que se ven completas pero no encajan con el trabajo real.',
    ],
    idealForHeading: 'FUNCIONES QUE JUSTIFICAN UNA PLATAFORMA',
    idealForIntro:
      'La complejidad tiene sentido cuando reduce trabajo, centraliza información o habilita un servicio que una página informativa no puede ofrecer.',
    idealFor: [
      {
        title: 'Usuarios y acceso privado',
        text: 'Registro, inicio de sesión, recuperación de cuenta y permisos distintos para clientes, operadores y administradores.',
      },
      {
        title: 'Panel administrativo',
        text: 'Gestión de contenido, estados, registros y configuraciones sin editar código ni depender de archivos dispersos.',
      },
      {
        title: 'Formularios con seguimiento',
        text: 'Solicitudes que se guardan, validan, asignan y consultan durante todo su recorrido.',
      },
      {
        title: 'Integraciones',
        text: 'Conexión con pagos, correo, almacenamiento, analítica o herramientas que la empresa ya utiliza.',
      },
    ],
    includesHeading: 'CÓMO REDUCIMOS EL RIESGO DEL PROYECTO',
    includes: [
      {
        title: 'Alcance verificable',
        text: 'Convertimos la idea en usuarios, tareas, reglas y criterios que pueden probarse antes de aceptar una entrega.',
      },
      {
        title: 'Primer lanzamiento acotado',
        text: 'Priorizamos el recorrido principal y dejamos funciones secundarias para etapas con datos reales de uso.',
      },
      {
        title: 'Diseño de estados',
        text: 'Preparamos cargas, errores, permisos, campos vacíos y confirmaciones, no solo la pantalla ideal.',
      },
      {
        title: 'Seguridad por función',
        text: 'Definimos quién puede leer o modificar cada tipo de información y validamos datos en el servidor.',
      },
      {
        title: 'Evolución planificada',
        text: 'Documentamos decisiones y organizamos el código para agregar módulos sin rehacer la base del sistema.',
      },
    ],
    decisionHeading: 'NO TODA EMPRESA NECESITA UNA PLATAFORMA',
    decision: [
      'Si solo necesitas presentar servicios, proyectos y vías de contacto, una página estática será más económica y fácil de mantener. Agregar usuarios o una base de datos sin una tarea concreta aumenta el costo y la superficie de soporte.',
      'La plataforma se recomienda cuando existe información que debe guardarse, personas con distintos permisos o un proceso que hoy depende de mensajes, archivos y tareas manuales. En esos casos, el desarrollo puede ahorrar tiempo y hacer visible el estado del trabajo.',
    ],
    faqs: [
      {
        question: '¿Qué diferencia hay entre una web dinámica y una página con animaciones?',
        answer:
          'Las animaciones son parte de la interfaz y pueden existir en cualquier sitio. Una web es dinámica cuando consulta, guarda o modifica datos y presenta contenido según usuarios, permisos o acciones.',
      },
      {
        question: '¿Se puede construir la plataforma por etapas?',
        answer:
          'Sí. GUBA ESTUDIO LAB define un primer lanzamiento con el recorrido indispensable y deja el resto en una hoja de ruta. Esta forma de trabajo permite probar el proceso con usuarios reales antes de ampliar funciones.',
      },
      {
        question: '¿Incluye soporte después de publicar?',
        answer:
          'El soporte se cotiza según la criticidad y la frecuencia de cambios. Puede incluir correcciones, monitoreo, copias, nuevas funciones y acompañamiento para revisar el uso del sistema.',
      },
    ],
    related: [
      {
        label: 'Páginas web estáticas',
        href: '/paginas-web-estaticas',
        text: 'Una opción más simple cuando el objetivo principal es presentar información.',
      },
      {
        label: 'Automatización de procesos',
        href: '/automatizacion-de-procesos',
        text: 'Una alternativa cuando basta con conectar herramientas existentes.',
      },
      {
        label: 'Diseño web en Pucallpa',
        href: '/diseno-paginas-web-pucallpa',
        text: 'Diseño y desarrollo web para negocios y empresas de Ucayali.',
      },
    ],
  },
  {
    slug: 'automatizacion-de-procesos',
    title: 'Automatización de procesos para negocios | GUBA Estudio',
    description:
      'Automatizamos tareas repetitivas y conectamos formularios, hojas de cálculo, correos y sistemas para reducir trabajo manual en empresas de Perú.',
    label: 'CONEXIÓN ENTRE TUS HERRAMIENTAS',
    heading: 'AUTOMATIZACIÓN DE PROCESOS PARA NEGOCIOS',
    lead:
      'Conectamos las herramientas que ya usas para mover información, enviar avisos y reducir tareas repetitivas sin construir un sistema completo cuando no hace falta.',
    serviceType: 'Automatización de procesos para negocios',
    introHeading: 'AUTOMATIZAR EMPIEZA POR UNA TAREA CONCRETA',
    intro: [
      'Una automatización ejecuta reglas previsibles entre herramientas. Por ejemplo, puede tomar los datos de un formulario, registrarlos en una hoja, crear una tarea y avisar al responsable. El equipo conserva sus aplicaciones habituales, pero evita copiar la misma información varias veces.',
      'Antes de conectar servicios revisamos el proceso actual, sus excepciones y el resultado esperado. No todo paso debe automatizarse: las decisiones que necesitan criterio humano se mantienen visibles y los pasos mecánicos se delegan al flujo.',
    ],
    idealForHeading: 'PROCESOS QUE SUELEN SER BUENOS CANDIDATOS',
    idealForIntro:
      'La mejor oportunidad suele ser una tarea frecuente, basada en reglas y fácil de comprobar.',
    idealFor: [
      {
        title: 'Registro de solicitudes',
        text: 'Captura datos de formularios y los organiza en la herramienta donde el equipo realiza el seguimiento.',
      },
      {
        title: 'Avisos y recordatorios',
        text: 'Envía correos o notificaciones cuando cambia un estado, se acerca una fecha o falta una respuesta.',
      },
      {
        title: 'Sincronización de datos',
        text: 'Mantiene información alineada entre hojas, bases, CRM u otras aplicaciones con una fuente definida.',
      },
      {
        title: 'Documentos repetitivos',
        text: 'Genera archivos o mensajes a partir de datos validados y deja registro de cada ejecución.',
      },
    ],
    includesHeading: 'QUÉ DEFINIMOS EN EL PROYECTO',
    includes: [
      {
        title: 'Punto de inicio',
        text: 'Identificamos el evento que activa el flujo, como un formulario, una fecha o un cambio de estado.',
      },
      {
        title: 'Reglas y excepciones',
        text: 'Documentamos condiciones, datos obligatorios y casos que necesitan revisión de una persona.',
      },
      {
        title: 'Acciones conectadas',
        text: 'Definimos qué información se crea, actualiza, envía o archiva en cada herramienta.',
      },
      {
        title: 'Registro de errores',
        text: 'Preparamos avisos y trazabilidad para saber cuándo un paso no pudo completarse.',
      },
      {
        title: 'Pruebas y entrega',
        text: 'Probamos ejemplos reales, documentamos el flujo y acordamos cómo se mantendrán las credenciales.',
      },
    ],
    decisionHeading: 'AUTOMATIZACIÓN O PLATAFORMA A MEDIDA',
    decision: [
      'La automatización conviene cuando las herramientas actuales funcionan por separado y el problema principal es mover datos o activar acciones entre ellas. Suele ser más rápida que reemplazar todo el proceso.',
      'Una plataforma a medida tiene más sentido cuando el equipo necesita una interfaz propia, permisos complejos, grandes volúmenes o reglas centrales que no caben en las aplicaciones existentes. Primero evaluamos la opción más simple que resuelva el problema.',
    ],
    faqs: [
      {
        question: '¿Necesito una página web para contratar automatización?',
        answer:
          'No. En GUBA ESTUDIO LAB la automatización es un servicio independiente y puede conectar herramientas internas aunque la página web haya sido desarrollada por otra persona o no exista.',
      },
      {
        question: '¿Qué herramientas se pueden conectar?',
        answer:
          'Depende de las integraciones o API disponibles. Son comunes los formularios, hojas de cálculo, correo, calendarios, almacenamiento, CRM y bases de datos. La viabilidad se revisa antes de cotizar.',
      },
      {
        question: '¿Qué pasa si una automatización falla?',
        answer:
          'El flujo debe registrar el error y avisar al responsable cuando un paso importante no termina. El nivel de monitoreo y reintento se define según el impacto que tenga la tarea en el negocio.',
      },
    ],
    related: [
      {
        label: 'Plataformas web dinámicas',
        href: '/plataformas-web-dinamicas',
        text: 'Para procesos que necesitan una interfaz propia, usuarios y permisos.',
      },
      {
        label: 'Páginas web estáticas',
        href: '/paginas-web-estaticas',
        text: 'Para presentar el negocio con una solución rápida y simple de mantener.',
      },
      {
        label: 'Diseño web en Pucallpa',
        href: '/diseno-paginas-web-pucallpa',
        text: 'Presencia digital para negocios, profesionales y empresas de Ucayali.',
      },
    ],
  },
];
