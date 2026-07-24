import {
    Download,
    PlayCircle,
    FileText,
    Smartphone,
    CheckCircle,
} from "lucide-react";
import Home from "/capturas/ConfigurarPDF3.jpeg"

export default function Hero() {
    return (
        <section
            id="hero"
            className="min-h-screen bg-gradient-to-br from-[#363026] via-[#33302D] to-[#614E34] flex items-center overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 py-28 w-full">

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Información */}

                    <div>

                        {/* Badge */}

                        {/* <div className="inline-flex items-center gap-2 bg-[#614E34] text-[#E1890A] px-5 py-2 rounded-full text-sm font-semibold border border-[#8B6734]">

                            <FileText size={18} />

                            Generador Inteligente de Órdenes de Trabajo

                        </div> */}

                        {/* Título */}

                        <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white">

                            Generá

                            <span className="text-[#E1890A]">
                                {" "}órdenes de trabajo
                            </span>

                            <br />

                            profesionales en segundos.

                        </h1>

                        {/* Descripción */}

                        <p className="mt-8 text-lg text-gray-300 leading-8 max-w-xl">

                            MambaPDF te permite crear plantillas personalizadas,
                            completar formularios desde tu dispositivo Android y
                            generar documentos PDF profesionales listos para compartir
                            con clientes o equipos de trabajo.

                        </p>

                        {/* Beneficios */}

                        <div className="mt-8 space-y-4">

                            <div className="flex items-center gap-3">

                                <CheckCircle
                                    size={22}
                                    className="text-[#E1890A]"
                                />

                                <span className="text-gray-300">

                                    Plantillas completamente personalizables

                                </span>

                            </div>

                            <div className="flex items-center gap-3">

                                <CheckCircle
                                    size={22}
                                    className="text-[#E1890A]"
                                />

                                <span className="text-gray-300">

                                    Generación automática de PDF

                                </span>

                            </div>

                            <div className="flex items-center gap-3">

                                <CheckCircle
                                    size={22}
                                    className="text-[#E1890A]"
                                />

                                <span className="text-gray-300">

                                    Funciona incluso sin conexión a Internet

                                </span>

                            </div>

                        </div>

                        {/* Botones */}

                        <div className="flex flex-wrap gap-5 mt-12">

                            <a
                                href="#download"
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    bg-[#E1890A]
                                    hover:bg-[#B67A26]
                                    px-8
                                    py-4
                                    rounded-xl
                                    text-white
                                    font-semibold
                                    shadow-xl
                                    transition-all
                                    duration-300
                                    hover:scale-105
                                "
                            >

                                <Download size={20} />

                                Descargar APK

                            </a>

                            <a
                                href="#demo"
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    border-2
                                    border-[#E1890A]
                                    text-[#E1890A]
                                    hover:bg-[#614E34]
                                    px-8
                                    py-4
                                    rounded-xl
                                    font-semibold
                                    transition-all
                                    duration-300
                                "
                            >

                                <PlayCircle size={20} />

                                Ver Demo

                            </a>

                        </div>

                        {/* Estadísticas */}

                        <div className="grid grid-cols-3 gap-8 mt-16">

                            <div>

                                <h3 className="sm: text-2xl md:text-4xl font-bold text-[#E1890A]">

                                    100%

                                </h3>

                                <p className="text-gray-400 mt-2">

                                    Offline

                                </p>

                            </div>

                            <div>

                                <h3 className="sm: text-2xl md:text-4xl font-bold text-[#E1890A]">

                                    PDF

                                </h3>

                                <p className="text-gray-400 mt-2">

                                    Automático

                                </p>

                            </div>

                            <div>

                                <h3 className=" sm: text-2xl md:text-4xl font-bold text-[#E1890A] ">

                                    Android

                                </h3>

                                <p className="text-gray-400 mt-2">

                                    Compatible

                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Mockup */}

                    <div className="flex justify-center">

                        <div className="relative">

                            {/* Glow */}

                            <div className="absolute inset-0 bg-[#E1890A] blur-[120px] opacity-20 rounded-full"></div>

                            {/* Teléfono */}

                            <div className="relative bg-[#000000] rounded-[45px] p-3 shadow-2xl">

                                <div className="w-[330px] h-[660px] bg-white rounded-[35px] overflow-hidden">

                                    <img src={Home} alt="CAPTURA DEL INICIO DE LA APP" />
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}