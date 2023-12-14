import { IconResponsive, IconSearch, IconBackInTime, IconSafetyCertificate } from "../components/Icons"

export const redes = [
    {
        id:1,
        name: "Facebook",
        link: "https://www.facebook.com/",
        image: "facebook"
    },
    {
        id:2,
        name: "Instagram",
        link: "https://www.instagram.com/",
        image: "instagram"
    },
    {
        id:3,
        name: "TikTok",
        link: "https://www.tiktok.com/",
        image: "tiktok"
    }
]

export const enlaces = [
    {
        id:1,
        name: "Servicios",
        link: "#servicios"
    },
    {
        id:2,
        name: "Experiencias",
        link: "#experiencias"
    },
    {
        id:3,
        name: "FAQs",
        link: "#faqs"
    },
    {
        id:4,
        name: "Contacto",
        link: "#contacto"
    }
]

export const herramientas = [
    {
        id:1,
        name: "Diseño web adaptable",
        description: "Asegura una experiencia visual perfecta en cualquier dispositivo",
        image: <IconResponsive />,
    },
    {
        id:2,
        name: "Optimizacion de Busqueda",
        description: " Aumenta tu visibilidad en línea y destaca en los motores de búsqueda",
        image: <IconSearch />,
    },
    {
        id:3,
        name: "Carga Rapida",
        description: "Tu sitio web se carga al instante, ofreciendo una experiencia sin demoras",
        image: <IconBackInTime />,
    },
    {
        id:4,
        name: "Certificado de Seguridad",
        description: "Protege tu sitio con nuestro certificado de seguridad para una experiencia segura",
        image: <IconSafetyCertificate />,
    }
]

export const paquetes = [
    {
        id: 1,
        name: "Impulsando mi negocio",
        tipo: "Landing Page",
        precio: "Ideal para destacar un producto, servicio o evento especifico",
        carateristicas: [
            "Hosting y Dominio por 1 año",
            "Certificado SSL",
            "Diseño para Celular y Tablet",
            "Matenimiento GRATIS por 30 dias",
            "Integracion de Redes Sociales",
            "Tu Landing Page en 7 dias"
        ]
    },
    {
        id: 2,
        name: "Mi primera pagina",
        tipo: "Pagina Web",
        precio: "Perfecto para presentar tu negocio o empresa de manera integral",
        carateristicas: [
            "Hosting y Dominio por 1 año",
            "Certificado SSL",
            "Diseño para Celular y Tablet",
            "Matenimiento GRATIS por 30 dias",
            "Integracion de Redes Sociales",
            "Catalogo de Productos",
            "formuolario de Contacto"
        ]
    },
    {
        id: 3,
        name: "Plan Empresarial",
        tipo: "Sitios Web",
        precio: "Recomendado para empresas grades o con diversas ofertas",
        carateristicas: [
            "Hosting y Dominio por 1 año",
            "Certificado SSL",
            "Diseño para Celular y Tablet",
            "Matenimiento GRATIS por 30 dias",
            "Tu Sitio web en 15 dias",
            "Hasta 5 paginas internas",
            "Catalogo de Productos",
            "Formulario de Contacto"
        ]
    }
]