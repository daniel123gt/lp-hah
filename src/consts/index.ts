// Imports optimizados de imágenes
import medicalServiceImg from "../assets/images/services/medicalService.webp";
import cuidadoImg from "../assets/images/services/cuidado.webp";
import enfermeraImg from "../assets/images/services/enfermera.webp";
import procedimientosImg from "../assets/images/services/procedimientos.webp";
import laboratorioImg from "../assets/images/services/laboratorio.webp";
import radiografiaImg from "../assets/images/services/radiografia.webp";
import equiposImg from "../assets/images/services/equipom.jpg";
import oxigenoImg from "../assets/images/services/oxigeno.webp";
import vitaminasImg from "../assets/images/services/vitaminas.jpeg";

// Imports de galería
import galery1Img from "../assets/images/galery/galery1.webp";
import galery2Img from "../assets/images/galery/galery2.webp";
import galery3Img from "../assets/images/galery/galery3.webp";

export const NAV_LINKS = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Opciones de Cuidados",
    href: "/opciones-cuidado",
  },
  {
    label: "Procedimientos",
    href: "/procedimientos",
  },
  {
    label: "Servicios",
    href: null,
    children: [
      {
        label: "Médicos a Domicilio",
        href: "/medicos-a-domicilio",
      },
      {
        label: "Pruebas Covid 19",
        href: "/pruebas-covid-19",
      },
      {
        label: "Laboratorio a Domicilio",
        href: "/laboratorios",
      },
      {
        label: "Radiografías (RX) y Ecografías a Domicilio",
        href: "/radiografias-y-ecografias",
      },
    ],
  },
  {
    label: "Clínica en Casa",
    href: "/equipos-medicos",
  },
  {
    label: "Galería",
    href: "/galeria",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Empresas",
    href: "/empresas",
  },
  {
    label: "Nosotros",
    href: "/nosotros",
  },
];

export const SERVICES = [
  {
    img: {
      src: medicalServiceImg,
      alt: "Imagen del servicio de Medicos en casa",
    },
    title: "Médicos a Domicilio",
    description:
      "Servicio de médicos a domicilio, contamos con diferentes especialidades: GERIATRIA – CARDIOLOGIA – INTERNISTA – ONCOLOGIA – GASTROENTEROLOGIA – NEUMOLOGIA entre otras especialidades",
    href: "/medicos-a-domicilio",
  },
  {
    img: {
      src: cuidadoImg,
      alt: "Imagen del servicio de cuidados en casa",
    },
    title: "Servicios de Enfermería a Domicilio\n (Cuidados en Casa)",
    description:
      "Servicio de médicos a domicilio, contamos con diferentes especialidades: GERIATRIA – CARDIOLOGIA – INTERNISTA – ONCOLOGIA – GASTROENTEROLOGIA – NEUMOLOGIA entre otras especialidades",
    href: "/opciones-cuidado",
  },
  {
    img: {
      src: enfermeraImg,
      alt: "Imagen del servicio de enfermeras a domicilio",
    },
    title: "Enfermeras a domicilio\n Atención especializada",
    description:
      "Atención de enfermería diseñada para pacientes con diferentes patologías que requieren cuidados especializados:  monitoreo continuo, procedimientos de enfermería invasivos, cuidados paliativos, cuidados post operatorios entre otros.",
    href: "/opciones-cuidado",
  },
  {
    img: {
      src: procedimientosImg,
      alt: "Imagen del servicio de procedimientos de enfermeria a domicilio",
    },
    title: "Procedimientos\n Enfermeras licenciadas a domicilio",
    description:
      "Inyectables, tratamientos por vía endovenosa, toma de muestras para laboratorios, colocación de sondas, catéter, curas de escaras, hidratación, sueros endovenosos.",
    href: "/procedimientos",
  },
  {
    img: {
      src: laboratorioImg,
      alt: "Imagen del servicio de laboratorio a domicilio",
    },
    title: "Laboratorio a Domicilio",
    description:
      "Tenemos a su disposición más de 4 mil análisis de laboratorios que puede realizar desde casa con nuestro personal altamente entrenado y calificado.",
    href: "/laboratorios",
  },
  {
    img: {
      src: radiografiaImg,
      alt: "Imagen del servicio de radiografia y ecografia a domicilio",
    },
    title: "Radiografía y Ecografía",
    description:
      "Contamos con los mejores equipos y un sistema avanzado deDoppler. Las mejores imágenes con calidad uniforme para un mejor diagnóstico.",
    href: "/radiografias-y-ecografias",
  },
  {
    img: {
      src: equiposImg,
      alt: "Imagen del servicio de equipamiento medico en casa",
    },
    title: "Clínica en casa\n Equipos médicos",
    description:
      "Servicio de equipamiento en casa, camas clínicas, monitores, accesorios para pacientes encamados o postrados, materiales médicos entre otros.",
    href: "/equipos-medicos",
  },
  {
    img: {
      src: oxigenoImg,
      alt: "Imagen del servicio de oxigeno medicinal",
    },
    title: "Oxígeno Medicinal",
    description:
      "Servicio de  recarga de balones de oxígeno, instalación y suministro de accesorios,  las 24 horas del día con atención oportuna en el menor tiempo posible.",
    href: "/equipos-medicos",
  },
  {
    img: {
      src: vitaminasImg,
      alt: "Imagen del servicio de vitaminas",
    },
    title: "Cóctel vitamínicos\n Administración de vitaminas",
    description:
      "Por Vena, Vitamina C, Vitamina B12, Acido Folico, Glutathione, Sueros Vitaminados Diseñados Para Pacientes Que Desean Recibir Atencion En Casa.",
    href: "/procedimientos",
  },
];

export const GALERY_SECTION = [
  {
    imgSrc: galery1Img,
    imgAlt: "Imagen de enfermera saludando a paciente",
  },
  {
    imgSrc: galery2Img,
    imgAlt: "Imagen de enfermera con un paciente de terapia ocupacional",
  },
  {
    imgSrc: galery3Img,
    imgAlt: "Imagen de enfermera con una mestra de sangre",
  },
];

export const TESTIMONY = [
  {
    name: "Rosa Quintana",
    rol: "Hija del paciente",
    audio: "/audio/testimony3.mp3",
    avatar: "RS",
  },
  {
    name: "Olga María Ramos Salazar",
    rol: "Hija del paciente",
    audio: "/audio/testimony2.mp3",
    avatar: "OS",
  },
  {
    name: "Johnny Barrón",
    rol: "Hijo del paciente",
    audio: "/audio/testimony1.mp3",
    avatar: "JB",
  },
];

export const CARDS_BENEFICTS = [
  {
    title: "⏱️ CUIDADORES Y ENFERMERAS PART TIME",
    description:
      "Diseñado para pacientes que requieren atención durante 6 u 8 horas para cuidados integrales: alimentación, higiene y confort, medicamentos vía oral, entre otros cuidados de enfermería",
  },
  {
    title: "🕐 CUIDADORES/AS Y ENFERMERAS POR TURNOS 12 HORAS Y 24 HORAS",
    description:
      "Diseñado para pacientes que requieren atención completa durante el día, dos opciones: atención durante el día (12 horas) se entrega al paciente listo para dormir (24 horas), vigilancia y cuidado durante las 24 horas",
  },
  {
    title: "🔄 CUIDADORES Y ENFERMERAS TURNOS INTERDIARIOS",
    description:
      "Diseñado para pacientes que solo requieren atención y cuidado para su rutina de forma interdiaria dos o tres veces por semana en horarios completos o part time",
  },
  {
    title: "📅 CUIDADORES/AS Y ENFERMERAS EN FINES DE SEMANA",
    description:
      "Diseñado para personas/pacientes dependientes y necesidad de servicios los fines de semana.",
  },
  {
    title: "🌙 CUIDADORES/AS Y ENFERMERAS 365 DÍAS DEL AÑO 7 DÍAS A LA SEMANA",
    description:
      "Servicio continuo día y noche los 365 días del año. Profesionales titulados y experiencia constatada.",
  },
  {
    title: "🏠 CUIDADORES Y ENFERMERAS CAMA ADENTRO",
    description:
      "Diseñado para pacientes de atención permanente que requieren cumplir rutinas diurnas y por las noches asistencia básicas como acompañamiento al baño o cambio de pañal y de postura",
  },
];

export const ACCORDION_PROCEDURE = [
  {
    title: "Administración de tratamientos endovenosos",
    description:
      "Amplia experiencia en Canalización de vía endovenosa a pacientes Geriátricos y oncológicos. para cualquier tratamiento endovenoso se requiere orden Médica.",
    icon: "💉",
    category: "tratamiento"
  },
  {
    title: "Medición signos vitales",
    description:
      "Servicio disponible a cualquier hora, Medición de: Presión arterial, pulso o frecuencia cardiaca, Saturación de oxígeno, temperatura, frecuencia respiratoria y medición de glucemia o azúcar en sangre.",
    icon: "❤️",
    category: "monitoreo"
  },
  {
    title: "Colocación de sondas",
    description:
      "Realizamos cambios y colocación de sonda NSG y  foley a domicilio. En todos los casos se solicitará la orden médica y calibre o medida de la sonda.",
    icon: "🔌",
    category: "procedimiento"
  },
  {
    title: "Colocación de enema- evacuol",
    description:
      "Según sea el caso, colocamos enema evacuante, realizamos tacto rectal y extracción de fecalomas (masas de heces acumuladas en el conducto intestinal y rectal), a pacientes postrados y no postrados.",
    icon: "🚽",
    category: "procedimiento"
  },
  {
    title: "Canalización de vía subcutánea- catéter íntima",
    description:
      "Somos expertos en Administración de medicamentos subcutáneos y colocación de Catéter ÍNTIMA.",
    icon: "🩸",
    category: "tratamiento"
  },
  {
    title: "Retiro de puntos",
    description:
      "Procedimiento especial, realizado por profesionales calificados, bajo métodos de asepsia y antisepsia se retiran puntos y grapas quirúrgicas dentro de los días indicados para su retiro.",
    icon: "✂️",
    category: "postoperatorio"
  },
  {
    title: "Inyectables intramuscular/ intradérmica",
    description:
      "Aplicamos inyectables con técnicas y jeringas correctas que ayudan a la  disminución del dolor a la hora de la punción y en muchas ocasiones sin dolor.",
    icon: "💊",
    category: "tratamiento"
  },
  {
    title: "Higiene y confort",
    description:
      "De acuerdo al estado del paciente, previa valoración de enfermería se realiza baño/higiene completo del paciente, utilizando las  técnicas adecuadas para prevención de lesión y riesgo de caída, incluye cambio de cama.",
    icon: "🩺",
    category: "cuidado"
  },
  {
    title: "Curación avanzada",
    description:
      "Tenemos amplia experiencia en curaciones de heridas simples y complicadas (lesiones por presión, quemaduras, pie diabético, úlceras venosas o arteriales, heridas quirúrgicas, entre otras). ",
    icon: "🩹",
    category: "cuidado"
  },
  {
    title: "Cambio bolsa colostomía",
    description:
      "Existen diferentes tipos de bolsas, de ser necesario, le ayudamos a seleccionar la bolsa adecuada para su ostomía, realizamos el cambio guardando la integridad de su piel con nuestros productos especiales y brindamos información requerida.",
    icon: "🩺",
    category: "cuidado"
  },
  {
    title: "Transfusión sanguínea",
    description:
      "Hemoterapia que consiste en Transfusión de sangre, Transfusión de concentrados de glóbulos rojos, Transfusión de plasma fresco, Procedimiento especial que se realiza  bajo órdenes médicas, verificación rigurosa de datos del paciente, origen y datos del hemoderivado.",
    icon: "🩸",
    category: "tratamiento"
  },
  {
    title: "Aspiración de secreciones",
    description:
      "Previa valoración de enfermería y de acuerdo al estado clínico del paciente y necesidad de aspiración de secreciones. Aplicamos las técnicas adecuadas: Aspiración abierta (OSS) y Aspiración cerrada (CSS).",
    icon: "🌬️",
    category: "procedimiento"
  },
  {
    title: "Apertura de catéter port",
    description:
      "Bajo técnicas correctas, previa asepsia y antisepsia realizamos apertura, cuidados y mantenimiento del catéter PORT- A- CATH. brindamos la información necesaria.",
    icon: "🔑",
    category: "procedimiento"
  },
];
