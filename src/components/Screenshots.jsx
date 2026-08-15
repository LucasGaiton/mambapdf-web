import { useState } from "react";
import {
    Smartphone,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

const screenshots = [
    {
        title: "Pantalla Principal",
        images: [
            "/capturas/home.jpeg"
        ],
    },
    {
        title: "Plantillas",
        images: [
            "/capturas/plantilla.jpeg",
            "/capturas/plantilla2.jpeg"
        ],
    },
    {
        title: "Nueva Orden",
        images: [
            "/capturas/SeleccionarPlantilla.jpeg",

        ],
    },
    {
        title: "Formulario",
        images: [
            "/capturas/Formulario.jpeg",
            "/capturas/Formulario2.jpeg"

        ],
    },
    {
        title: "Configuración PDF",
        images: [
            "/capturas/ConfigurarPDF.jpeg",
            "/capturas/ConfigurarPDF2.jpeg",
            "/capturas/ConfigurarPDF3.jpeg"
        ],
    },
    {
        title: "Listado de Órdenes",
        images: [
            "/capturas/ordenes.jpeg",
            "/capturas/ordenes2.jpeg",
            "/capturas/ordenes3.jpeg"
        ],
    },
];

export default function Screenshots() {

    const [currentImages, setCurrentImages] = useState(
        screenshots.map(() => 0)
    );

    const siguiente = (index) => {

        setCurrentImages((prev) => {

            const nuevo = [...prev];

            nuevo[index] =
                (nuevo[index] + 1) %
                screenshots[index].images.length;

            return nuevo;

        });

    };

    const anterior = (index) => {

        setCurrentImages((prev) => {

            const nuevo = [...prev];

            nuevo[index] =
                (nuevo[index] - 1 + screenshots[index].images.length) %
                screenshots[index].images.length;

            return nuevo;

        });

    };

    return (

        <section
            id="screenshots"
            className="bg-[#33302D] py-28"
        >

            <div className="max-w-7xl mx-auto px-6">

                {/* Encabezado */}

                <div className="text-center max-w-3xl mx-auto">

                    <span className="uppercase tracking-widest font-semibold text-[#E1890A]">
                        Galería
                    </span>

                    <h2 className="mt-4 text-5xl font-bold text-white">
                        Conocé la interfaz de MambaPDF
                    </h2>

                    <p className="mt-6 text-lg text-gray-300 leading-8">
                        Una aplicación simple, moderna e intuitiva diseñada para
                        agilizar la creación de órdenes de trabajo y documentos
                        PDF desde cualquier dispositivo Android.
                    </p>

                </div>

                {/* Grid */}

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">

                    {screenshots.map((screen, index) => (

                        <div
                            key={screen.title}
                            className="group"
                        >

                            <div
                                className="
                                    relative
                                    bg-[#363026]
                                    border
                                    border-[#614E34]
                                    rounded-[38px]
                                    p-3
                                    shadow-2xl
                                    transition-all
                                    duration-500
                                    hover:-translate-y-3
                                    hover:border-[#E1890A]
                                "
                            >

                                {/* Glow */}

                                <div
                                    className="
                                        absolute
                                        inset-0
                                        rounded-[38px]
                                        bg-[#E1890A]
                                        opacity-0
                                        blur-3xl
                                        transition-all
                                        duration-500
                                        group-hover:opacity-20
                                    "
                                />

                                {/* Cámara */}

                                <div
                                    className="
                                        absolute
                                        top-4
                                        left-1/2
                                        -translate-x-1/2
                                        w-24
                                        h-5
                                        rounded-full
                                        bg-[#33302D]
                                        z-20
                                    "
                                />

                                {/* Flecha izquierda */}

                                <button
                                    onClick={() => anterior(index)}
                                    className="
                                        absolute
                                        left-4
                                        top-1/2
                                        -translate-y-1/2

                                        w-10
                                        h-10

                                        rounded-full
                                        bg-[#363026]/80
                                        backdrop-blur

                                        border
                                        border-[#614E34]

                                        flex
                                        items-center
                                        justify-center

                                        text-white

                                        hover:bg-[#E1890A]
                                        hover:border-[#E1890A]

                                        transition
                                        z-20
                                    "
                                >
                                    <ChevronLeft size={20} />
                                </button>

                                {/* Flecha derecha */}

                                <button
                                    onClick={() => siguiente(index)}
                                    className="
                                        absolute
                                        right-4
                                        top-1/2
                                        -translate-y-1/2

                                        w-10
                                        h-10

                                        rounded-full
                                        bg-[#363026]/80
                                        backdrop-blur

                                        border
                                        border-[#614E34]

                                        flex
                                        items-center
                                        justify-center

                                        text-white

                                        hover:bg-[#E1890A]
                                        hover:border-[#E1890A]

                                        transition
                                        z-20
                                    "
                                >
                                    <ChevronRight size={20} />
                                </button>

                                {/* Carrusel */}

                                <div className="relative overflow-hidden rounded-[30px]">

                                    <div
                                        className="flex transition-transform duration-300 ease-in-out"
                                        style={{
                                            transform: `translateX(-${currentImages[index] * 100}%)`,
                                        }}
                                    >

                                        {screen.images.map((image, imgIndex) => (

                                            <img
                                                key={imgIndex}
                                                src={image}
                                                alt={`${screen.title} ${imgIndex + 1}`}
                                                className="
                                                            h-[560px]
                                                            w-full
                                                            shrink-0
                                                            
                                                            bg-white
                                                "
                                            />

                                        ))}

                                    </div>

                                </div>

                            </div>

                            {/* Indicadores */}

                            <div className="flex justify-center gap-2 mt-5">

                                {screen.images.map((_, imgIndex) => (

                                    <div
                                        key={imgIndex}
                                        className={`
                                            h-2.5
                                            rounded-full
                                            transition-all
                                            duration-300
                                            ${currentImages[index] === imgIndex
                                                ? "bg-[#E1890A] w-6"
                                                : "bg-[#614E34] w-2.5"
                                            }
                                        `}
                                    />

                                ))}

                            </div>

                            <div className="mt-6 text-center">

                                <div className="flex justify-center mb-3">

                                    <div
                                        className="
                                            w-12
                                            h-12
                                            rounded-xl
                                            bg-[#614E34]
                                            flex
                                            items-center
                                            justify-center
                                            text-[#E1890A]
                                        "
                                    >
                                        <Smartphone size={22} />
                                    </div>

                                </div>

                                <h3 className="text-xl font-semibold text-white">
                                    {screen.title}
                                </h3>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}