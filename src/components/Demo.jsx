import {
    PlayCircle,
    CheckCircle2,
    Smartphone,
    FileText,
    Share2,
} from "lucide-react";

export default function Demo() {
    return (
        <section
            id="demo"
            className="bg-[#363026] py-28"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Encabezado */}

                <div className="text-center max-w-3xl mx-auto">

                    <span className="uppercase tracking-widest font-semibold text-[#E1890A]">

                        Demostración

                    </span>

                    <h2 className="mt-4 text-5xl font-bold text-white">

                        Mirá MambaPDF en acción

                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-300">

                        Descubrí cómo crear una orden de trabajo completa en pocos
                        segundos utilizando plantillas dinámicas y generando un
                        PDF profesional listo para compartir.

                    </p>

                </div>

                {/* Contenido */}

                <div className="grid lg:grid-cols-2 gap-16 mt-20 items-center">

                    {/* Video */}

                    <div>

                        <div className="
                            bg-[#33302D]
                            rounded-3xl
                            border
                            border-[#614E34]
                            overflow-hidden
                            shadow-2xl
                        ">

                            <div className="aspect-video">

                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/QjEluwvuY2E"
                                    title="Demo MambaPDF"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />

                            </div>

                        </div>

                        <p className="text-center text-gray-400 mt-5">

                            Video demostrativo de la aplicación.

                        </p>

                    </div>

                    {/* Información */}

                    <div>

                        <div className="flex items-center gap-3">

                            <PlayCircle
                                size={34}
                                className="text-[#E1890A]"
                            />

                            <h3 className="text-3xl font-bold text-white">

                                ¿Qué vas a ver?

                            </h3>

                        </div>

                        <p className="mt-6 text-gray-300 leading-8">

                            En esta demostración se muestra el flujo completo de
                            trabajo de MambaPDF, desde la selección de una
                            plantilla hasta la generación y compartición del
                            documento PDF.

                        </p>

                        {/* Características */}

                        <div className="space-y-6 mt-10">

                            <div className="flex gap-4">

                                <div className="
                                    w-12
                                    h-12
                                    rounded-xl
                                    bg-[#614E34]
                                    flex
                                    items-center
                                    justify-center
                                    text-[#E1890A]
                                ">

                                    <FileText size={24} />

                                </div>

                                <div>

                                    <h4 className="text-white font-semibold">

                                        Creación de órdenes

                                    </h4>

                                    <p className="text-gray-400 mt-2">

                                        Completá formularios dinámicos utilizando
                                        plantillas personalizadas.

                                    </p>

                                </div>

                            </div>

                            <div className="flex gap-4">

                                <div className="
                                    w-12
                                    h-12
                                    rounded-xl
                                    bg-[#614E34]
                                    flex
                                    items-center
                                    justify-center
                                    text-[#E1890A]
                                ">

                                    <Smartphone size={24} />

                                </div>

                                <div>

                                    <h4 className="text-white font-semibold">

                                        Optimizada para Android

                                    </h4>

                                    <p className="text-gray-400 mt-2">

                                        Diseñada para utilizarse cómodamente
                                        durante trabajos en campo.

                                    </p>

                                </div>

                            </div>

                            <div className="flex gap-4">

                                <div className="
                                    w-12
                                    h-12
                                    rounded-xl
                                    bg-[#614E34]
                                    flex
                                    items-center
                                    justify-center
                                    text-[#E1890A]
                                ">

                                    <Share2 size={24} />

                                </div>

                                <div>

                                    <h4 className="text-white font-semibold">

                                        Compartición inmediata

                                    </h4>

                                    <p className="text-gray-400 mt-2">

                                        Exportá el PDF y compartilo por WhatsApp,
                                        correo electrónico o cualquier otra aplicación.

                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* Beneficios */}

                        <div className="mt-12 bg-[#33302D] border border-[#614E34] rounded-2xl p-8">

                            <h4 className="text-xl font-bold text-white mb-6">

                                Beneficios principales

                            </h4>

                            <div className="space-y-4">

                                {[
                                    "Generación automática de documentos PDF.",
                                    "Plantillas completamente configurables.",
                                    "Almacenamiento local de la información.",
                                    "Interfaz simple e intuitiva.",
                                    "No requiere conexión a Internet."
                                ].map((item) => (

                                    <div
                                        key={item}
                                        className="flex items-center gap-3"
                                    >

                                        <CheckCircle2
                                            size={20}
                                            className="text-[#E1890A]"
                                        />

                                        <span className="text-gray-300">

                                            {item}

                                        </span>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}