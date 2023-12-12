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
        name: "Plan Basico",
        tipo: "Starter",
        precio: 9.99,
        carateristicas: [
            "Acceso completo a nuestra plataforma en línea",
            "Descuentos exclusivos en productos y servicios seleccionados",
            "Boletín informativo mensual con consejos y actualizaciones",
            "Soporte por correo electrónico"
        ]
    },
    {
        id: 2,
        name: "Plan Premium",
        tipo: "Pro",
        precio: 19.99,
        carateristicas: [
            "Acceso completo a nuestra plataforma en línea",
            "Descuentos exclusivos en productos y servicios seleccionados",
            "Acceso prioritario a nuevas funciones y características",
            "Boletín informativo mensual con consejos y actualizaciones",
            "Soporte por correo electrónico y chat en vivo",
            "Contenido exclusivo y webinars mensuales"
        ]
    },
    {
        id: 3,
        name: "Plan Empresarial",
        tipo: "Elite",
        precio: 49.99,
        carateristicas: [
            "Acceso completo a nuestra plataforma en línea",
            "Descuentos exclusivos en productos y servicios seleccionados",
            "Acceso prioritario a nuevas funciones y características",
            "Boletín informativo mensual con consejos y actualizaciones",
            "Soporte 24/7 por correo electrónico, chat en vivo y teléfono",
            "Sesiones de consultoría personalizadas mensuales",
            "Acceso a una comunidad exclusiva para networking y colaboración"
        ]
    }
]