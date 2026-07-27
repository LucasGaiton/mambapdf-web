import {
    Download,
    ShieldCheck,
    Smartphone,
    HardDrive,
    CheckCircle2,
    ArrowDownCircle,
} from "lucide-react";

export default function Downloadd() {
    return (
        <section
            id="download"
            className="bg-[#363026] py-28"
        >
            <div className="max-w-6xl mx-auto px-6">

                {/* Card principal */}

                <div
                    className="
                        bg-[#33302D]
                        border
                        border-[#614E34]
                        rounded-3xl
                        overflow-hidden
                        shadow-2xl
                    "
                >
                    <div className="grid lg:grid-cols-2">

                        {/* Información */}

                        <div className="p-12 flex flex-col justify-center">

                            <span
                                className="
                                    uppercase
                                    tracking-widest
                                    font-semibold
                                    text-[#E1890A]
                                "
                            >
                                Descarga
                            </span>

                            <h2 className="mt-4 text-5xl font-bold text-white leading-tight">

                                Descargá MambaPDF

                            </h2>

                            <p className="mt-6 text-lg text-gray-300 leading-8">

                                Instalá la aplicación en tu dispositivo Android y
                                comenzá a crear órdenes de trabajo profesionales
                                desde cualquier lugar, incluso sin conexión a Internet.

                            </p>

                            {/* Características */}

                            <div className="space-y-5 mt-10">

                                <div className="flex items-center gap-3">

                                    <CheckCircle2
                                        size={22}
                                        className="text-[#E1890A]"
                                    />

                                    <span className="text-gray-300">

                                        Generación automática de PDF

                                    </span>

                                </div>

                                <div className="flex items-center gap-3">

                                    <CheckCircle2
                                        size={22}
                                        className="text-[#E1890A]"
                                    />

                                    <span className="text-gray-300">

                                        Plantillas totalmente configurables

                                    </span>

                                </div>

                                <div className="flex items-center gap-3">

                                    <CheckCircle2
                                        size={22}
                                        className="text-[#E1890A]"
                                    />

                                    <span className="text-gray-300">

                                        Funcionamiento sin Internett

                                    </span>

                                </div>

                            </div>

                            {/* Botón */}

                            <a
                                href="https://github.com/LucasGaiton/mambapdf-web/releases/latest/download/MambaPDF.apk"
                                download
                                className="
                                    mt-12
                                    inline-flex
                                    items-center
                                    justify-center
                                    gap-3
                                    bg-[#E1890A]
                                    hover:bg-[#B67A26]
                                    text-white
                                    px-8
                                    py-5
                                    rounded-2xl
                                    font-semibold
                                    text-lg
                                    transition-all
                                    duration-300
                                    hover:scale-105
                                    shadow-xl
                                    w-fit
                                "
                            >
                                <Download size={24} />

                                Descargar APK

                            </a>

                            <p className="mt-4 text-sm text-gray-500">

                                Versión 1.0 • Android 8.0 o superior

                            </p>

                        </div>

                        {/* Panel derecho */}

                        <div className="bg-[#363026] p-12 flex flex-col justify-center">

                            <h3 className="text-3xl font-bold text-white">

                                Información del archivo

                            </h3>

                            <div className="space-y-6 mt-10">

                                <div className="flex items-center gap-4">

                                    <div
                                        className="
                                            w-14
                                            h-14
                                            rounded-xl
                                            bg-[#614E34]
                                            flex
                                            items-center
                                            justify-center
                                            text-[#E1890A]
                                        "
                                    >
                                        <ArrowDownCircle size={28} />
                                    </div>

                                    <div>

                                        <h4 className="text-white font-semibold">

                                            Versión

                                        </h4>

                                        <p className="text-gray-400">

                                            1.0.0

                                        </p>

                                    </div>

                                </div>

                                <div className="flex items-center gap-4">

                                    <div
                                        className="
                                            w-14
                                            h-14
                                            rounded-xl
                                            bg-[#614E34]
                                            flex
                                            items-center
                                            justify-center
                                            text-[#E1890A]
                                        "
                                    >
                                        <HardDrive size={28} />
                                    </div>

                                    <div>

                                        <h4 className="text-white font-semibold">

                                            Tamaño

                                        </h4>

                                        <p className="text-gray-400">

                                            120 MB

                                        </p>

                                    </div>

                                </div>

                                <div className="flex items-center gap-4">

                                    <div
                                        className="
                                            w-14
                                            h-14
                                            rounded-xl
                                            bg-[#614E34]
                                            flex
                                            items-center
                                            justify-center
                                            text-[#E1890A]
                                        "
                                    >
                                        <Smartphone size={28} />
                                    </div>

                                    <div>

                                        <h4 className="text-white font-semibold">

                                            Compatibilidad

                                        </h4>

                                        <p className="text-gray-400">

                                            Android 8.0+

                                        </p>

                                    </div>

                                </div>

                                <div className="flex items-center gap-4">

                                    <div
                                        className="
                                            w-14
                                            h-14
                                            rounded-xl
                                            bg-[#614E34]
                                            flex
                                            items-center
                                            justify-center
                                            text-[#E1890A]
                                        "
                                    >
                                        <ShieldCheck size={28} />
                                    </div>

                                    <div>

                                        <h4 className="text-white font-semibold">

                                            Seguridad

                                        </h4>

                                        <p className="text-gray-400">

                                            APK firmada digitalmente

                                        </p>

                                    </div>

                                </div>

                            </div>

                            {/* Aviso */}

                            <div
                                className="
                                    mt-12
                                    bg-[#614E34]
                                    border
                                    border-[#8B6734]
                                    rounded-2xl
                                    p-6
                                "
                            >

                                <h4 className="text-white font-semibold">

                                    Primera instalación

                                </h4>

                                <p className="text-gray-300 mt-3 leading-7">

                                    Si Android muestra una advertencia al instalar
                                    la aplicación, habilitá temporalmente la opción
                                    <strong className="text-[#E1890A]">
                                        {" "}Instalar aplicaciones de orígenes desconocidos
                                    </strong>
                                    {" "}desde la configuración del dispositivo.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}