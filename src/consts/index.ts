// Imports optimizados de imágenes
import medicalServiceImg from "../assets/images/services/medicalService.webp";
import cuidadoImg from "../assets/images/services/cuidado.webp";
import enfermeraImg from "../assets/images/services/enfermera.webp";
import procedimientosImg from "../assets/images/services/procedimientos.webp";
import laboratorioImg from "../assets/images/services/laboratorio.webp";
import radiografiaImg from "../assets/images/services/radiografia.webp";
import equiposImg from "../assets/images/services/equipos.webp";
import oxigenoImg from "../assets/images/services/oxigeno.webp";
import vitaminasImg from "../assets/images/services/vitaminas.webp";

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
    label: "Opciones de Cuidado",
    href: null,
    children: [
      {
        label: "Cuidadoras Internas",
        href: "/cuidadoras-internas",
      },
      {
        label: "Cuidadoras Externas",
        href: "/cuidadoras-internas",
      },
    ],
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
        href: "",
      },
      {
        label: "Radiografías (RX) y Ecografías a Domicilio",
        href: "",
      },
    ],
  },
  {
    label: "Equipamiento Médico",
    href: "",
  },
  {
    label: "Galería",
    href: "",
  },
  {
    label: "Blog",
    href: "",
  },
  {
    label: "Empresas",
    href: "",
  },
  {
    label: "Nosotros",
    href: "",
  },
];

export const SERVICES = [
  {
    img: {
      src: medicalServiceImg,
      alt: "Imagen del servicio de Medicos en casa",
    },
    title: "Médico en Casa",
    description:
      "Servicio de médicos a domicilio, contamos con diferentes especialidades: GERIATRIA – CARDIOLOGIA – INTERNISTA – ONCOLOGIA – GASTROENTEROLOGIA – NEUMOLOGIA entre otras especialidades",
    href: "/",
  },
  {
    img: {
      src: cuidadoImg,
      alt: "Imagen del servicio de cuidados en casa",
    },
    title: "Cuidados en Casa\n Enfermeras técnicas a domicilio",
    description:
      "Servicio de médicos a domicilio, contamos con diferentes especialidades: GERIATRIA – CARDIOLOGIA – INTERNISTA – ONCOLOGIA – GASTROENTEROLOGIA – NEUMOLOGIA entre otras especialidades",
    href: "/",
  },
  {
    img: {
      src: enfermeraImg,
      alt: "Imagen del servicio de enfermeras a domicilio",
    },
    title: "Enfermeras a domicilio\n Atención especializada",
    description:
      "Atención de enfermería diseñada para pacientes con diferentes patologías que requieren cuidados especializados:  monitoreo continuo, procedimientos de enfermería invasivos, cuidados paliativos, cuidados post operatorios entre otros.",
    href: "/",
  },
  {
    img: {
      src: procedimientosImg,
      alt: "Imagen del servicio de procedimientos de enfermeria a domicilio",
    },
    title: "Procedimientos\n Enfermeras licenciadas a domicilio",
    description:
      "Inyectables, tratamientos por vía endovenosa, toma de muestras para laboratorios, colocación de sondas, catéter, curas de escaras, hidratación, sueros endovenosos.",
    href: "/",
  },
  {
    img: {
      src: laboratorioImg,
      alt: "Imagen del servicio de laboratorio a domicilio",
    },
    title: "Laboratorios clínicos",
    description:
      "Tenemos a su disposición más de 4 mil análisis de laboratorios que puede realizar desde casa con nuestro personal altamente entrenado y calificado.",
    href: "/",
  },
  {
    img: {
      src: radiografiaImg,
      alt: "Imagen del servicio de radiografia y ecografia a domicilio",
    },
    title: "Radiografía y Ecografía",
    description:
      "Contamos con los mejores equipos y un sistema avanzado deDoppler. Las mejores imágenes con calidad uniforme para un mejor diagnóstico.",
    href: "/",
  },
  {
    img: {
      src: equiposImg,
      alt: "Imagen del servicio de equipamiento medico en casa",
    },
    title: "Clínica en casa\n Equipos médicos",
    description:
      "Servicio de equipamiento en casa, camas clínicas, monitores, accesorios para pacientes encamados o postrados, materiales médicos entre otros.",
    href: "/",
  },
  {
    img: {
      src: oxigenoImg,
      alt: "Imagen del servicio de oxigeno medicinal",
    },
    title: "Oxígeno Medicinal",
    description:
      "Servicio de  recarga de balones de oxígeno, instalación y suministro de accesorios,  las 24 horas del día con atención oportuna en el menor tiempo posible.",
    href: "/",
  },
  {
    img: {
      src: vitaminasImg,
      alt: "Imagen del servicio de vitaminas",
    },
    title: "Cóctel vitamínicos\n Administración de vitaminas",
    description:
      "Por Vena, Vitamina C, Vitamina B12, Acido Folico, Glutathione, Sueros Vitaminados Diseñados Para Pacientes Que Desean Recibir Atencion En Casa.",
    href: "/",
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
    title: "CUIDADORES/AS Y ENFERMERAS POR HORAS.",
    description:
      "Horario adaptado a necesidad del caso y familia. profesionales titulados y experiencia constatada.",
  },
  {
    title: "CUIDADORES/AS Y ENFERMERAS EN FINES DE SEMANA.",
    description:
      "Diseñado para personas/pacientes dependientes y necesidad de servicios los fines de semana.",
  },
  {
    title: "CUIDADORES/AS Y ENFERMERAS 24 HORAS.",
    description:
      "Servicio continuo día y noche Los 365 días del año. profesionales titulados y experiencia constatada.",
  },
  {
    title: "CUIDADORES/AS Y ENFERMERAS 12 HORAS. (DIA Y/O NOCHE)",
    description:
      "Establecido con un diseño de cuidados adaptados a la necesidad  de persona/paciente. profesionales titulados y experiencia constatada.",
  },
  {
    title: "TRASLADOS DE PACIENTES 24 HORAS/365 DIAS AL AÑO",
    description:
      "Diseñado para el paciente que requiere traslado bajo supervisión y cuidados de nuestros profesionales de la salud. Clínica u hospital – casa. casa-casa. Ciudad- Ciudad. Pais-Pais..",
  },
];

export const ACCORDION_PROCEDURE = [
  {
    title: "Administración de tratamientos endovenosos",
    description:
      "Amplia experiencia en Canalización de vía endovenosa a pacientes Geriátricos y oncológicos. para cualquier tratamiento endovenoso se requiere orden Médica.",
  },
  {
    title: "Medición signos vitales:",
    description:
      "Servicio disponible a cualquier hora, Medición de: Presión arterial, pulso o frecuencia cardiaca, Saturación de oxígeno, temperatura, frecuencia respiratoria y medición de glucemia o azúcar en sangre.",
  },
  {
    title: "Colocación de sondas",
    description:
      "Realizamos cambios y colocación de sonda NSG y  foley a domicilio. En todos los casos se solicitará la orden médica y calibre o medida de la sonda.",
  },
  {
    title: "Colocación de enema- evacuol.",
    description:
      "Según sea el caso, colocamos enema evacuante, realizamos tacto rectal y extracción de fecalomas (masas de heces acumuladas en el conducto intestinal y rectal), a pacientes postrados y no postrados.",
  },
  {
    title: "Canalización de vía subcutánea- catéter íntima",
    description:
      "Somos expertos en Administración de medicamentos subcutáneos y colocación de Catéter ÍNTIMA.",
  },
  {
    title: "Retiro de puntos",
    description:
      "Procedimiento especial, realizado por profesionales calificados, bajo métodos de asepsia y antisepsia se retiran puntos y grapas quirúrgicas dentro de los días indicados para su retiro.",
  },
  {
    title: "Inyectables intramuscular/ intradérmica",
    description:
      "Aplicamos inyectables con técnicas y jeringas correctas que ayudan a la  disminución del dolor a la hora de la punción y en muchas ocasiones sin dolor.",
  },
  {
    title: "Higiene y confort ",
    description:
      "De acuerdo al estado del paciente, previa valoración de enfermería se realiza baño/higiene completo del paciente, utilizando las  técnicas adecuadas para prevención de lesión y riesgo de caída, incluye cambio de cama.",
  },
  {
    title: "Curación avanzada",
    description:
      "Tenemos amplia experiencia en curaciones de heridas simples y complicadas (lesiones por presión, quemaduras, pie diabético, úlceras venosas o arteriales, heridas quirúrgicas, entre otras). ",
  },
  {
    title: "Cambio bolsa colostomía",
    description:
      "Existen diferentes tipos de bolsas, de ser necesario, le ayudamos a seleccionar la bolsa adecuada para su ostomía, realizamos el cambio guardando la integridad de su piel con nuestros productos especiales y brindamos información requerida.",
  },
  {
    title: "Transfusión sanguínea:",
    description:
      "Hemoterapia que consiste en Transfusión de sangre, Transfusión de concentrados de glóbulos rojos, Transfusión de plasma fresco, Procedimiento especial que se realiza  bajo órdenes médicas, verificación rigurosa de datos del paciente, origen y datos del hemoderivado.",
  },
  {
    title: "Aspiración de secreciones",
    description:
      "Previa valoración de enfermería y de acuerdo al estado clínico del paciente y necesidad de aspiración de secreciones. Aplicamos las técnicas adecuadas: Aspiración abierta (OSS) y Aspiración cerrada (CSS).",
  },
  {
    title: "Apertura de catéter port",
    description:
      "Bajo técnicas correctas, previa asepsia y antisepsia realizamos apertura, cuidados y mantenimiento del catéter PORT- A- CATH. brindamos la información necesaria.",
  },
];
