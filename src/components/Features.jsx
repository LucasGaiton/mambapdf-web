import {
    FilePlus2,
    FileText,
    Share2,
    Smartphone,
    Database,
    ShieldCheck,
} from "lucide-react";

const features = [
    {
        icon: <FilePlus2 size={36} />,
        title: "Plantillas personalizadas",
        description:
            "Creá formularios adaptados a cualquier tipo de trabajo sin necesidad de editar documentos manualmente.",
    },
    {
        icon: <FileText size={36} />,
        title: "Generación automática de PDF",
        description:
            "Transformá la información ingresada en documentos PDF profesionales con un solo toque.",
    },
    {
        icon: <Share2 size={36} />,
        title: "Compartí fácilmente",
        description:
            "Enviá las órdenes de trabajo por WhatsApp, correo electrónico o cualquier aplicación instalada.",
    },
    {
        icon: <Database size={36} />,
        title: "Almacenamiento local",
        description:
            "Todas las plantillas y órdenes quedan guardadas en el dispositivo incluso sin conexión.",
    },
    {
        icon: <Smartphone size={36} />,
        title: "Optimizada para Android",
        description:
            "Diseñada para utilizarse cómodamente desde teléfonos y tablets durante el trabajo en campo.",
    },
    {
        icon: <ShieldCheck size={36} />,
        title: "Información segura",
        description:
            "Los datos permanecen almacenados localmente para brindar mayor privacidad y disponibilidad.",
    },
];

export default function Features() {
    return (
        <section
            id="features"
            className="bg-[#363026] py-24"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Encabezado */}

                <div className="text-center max-w-3xl mx-auto">

                    <span className="text-[#E1890A] font-semibold uppercase tracking-widest">
                        Características
                    </span>

                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
                        Todo lo que necesitás para generar
                        órdenes de trabajo profesionales
                    </h2>

                    <p className="mt-6 text-gray-300 text-lg leading-8">
                        MambaPDF fue diseñada para agilizar el trabajo diario de
                        técnicos, empresas de mantenimiento y profesionales que
                        necesitan generar documentación de forma rápida y sencilla.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid gap-8 mt-20 sm:grid-cols-2 lg:grid-cols-3">

                    {features.map((feature) => (

                        <div
                            key={feature.title}
                            className="
                                group
                                bg-[#33302D]
                                rounded-3xl
                                p-8
                                border
                                border-[#614E34]
                                transition-all
                                duration-300
                                hover:-translate-y-2
                                hover:border-[#E1890A]
                                hover:shadow-2xl
                            "
                        >

                            {/* Icono */}

                            <div
                                className="
                                    w-16
                                    h-16
                                    rounded-2xl
                                    bg-[#614E34]
                                    flex
                                    items-center
                                    justify-center
                                    text-[#E1890A]
                                    transition-all
                                    duration-300
                                    group-hover:bg-[#E1890A]
                                    group-hover:text-white
                                "
                            >
                                {feature.icon}
                            </div>

                            {/* Título */}

                            <h3 className="mt-8 text-2xl font-bold text-white">
                                {feature.title}
                            </h3>

                            {/* Descripción */}

                            <p className="mt-4 text-gray-300 leading-7">
                                {feature.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}