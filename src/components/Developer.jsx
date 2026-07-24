import {
    // Github,
    // Linkedin,
    Mail,
    GraduationCap,
    Briefcase,
    Code2,
    Download,
} from "lucide-react";

import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Developer() {
    return (
        <section
            id="developer"
            className="bg-[#33302D] py-28"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Título */}

                <div className="text-center max-w-3xl mx-auto">

                    <span className="text-[#E1890A] uppercase tracking-widest font-semibold">

                        Desarrollador

                    </span>

                    <h2 className="mt-4 text-5xl font-bold text-white">

                        Conocé al creador de MambaPDF

                    </h2>

                    <p className="mt-6 text-gray-300 text-lg leading-8">

                        MambaPDF nació con el objetivo de facilitar la creación
                        de órdenes de trabajo profesionales desde dispositivos
                        móviles, optimizando el tiempo y eliminando procesos
                        manuales.

                    </p>

                </div>

                {/* Card */}

                <div className="mt-20 bg-[#363026] border border-[#614E34] rounded-3xl overflow-hidden shadow-2xl">

                    <div className="grid lg:grid-cols-2">

                        {/* Foto */}

                        <div className="flex justify-center items-center p-12">

                            <div className="relative">

                                <div className="absolute inset-0 bg-[#E1890A] blur-3xl opacity-20 rounded-full"></div>

                                <img
                                    src="/Cv/Perfil.jpeg"
                                    alt="Lucas Gaitón"
                                    className="
                                        relative
                                        w-72
                                        h-72
                                        object-cover
                                        rounded-full
                                        border-4
                                        border-[#E1890A]
                                        shadow-2xl
                                    "
                                />

                            </div>

                        </div>

                        {/* Información */}

                        <div className="p-12">

                            <span className="text-[#E1890A] font-semibold">

                                Full Stack Developer

                            </span>

                            <h3 className="mt-3 text-4xl font-bold text-white">

                                Lucas Gaitón

                            </h3>

                            <p className="mt-8 text-gray-300 leading-8">

                                Soy desarrollador Full Stack egresado del
                                Bootcamp Soy Henry y estudiante de la
                                Licenciatura en Sistemas.

                                <br /><br />

                                Me entusiasma el desarrollo de aplicaciones web y
                                móviles enfocadas en resolver problemas reales
                                mediante soluciones intuitivas, escalables y
                                fáciles de utilizar. Aplicando buenas practicas y metodolosgias adecuadas

                            </p>

                            {/* Datos */}

                            <div className="grid md:grid-cols-2 gap-6 mt-10">

                                <div className="flex items-center gap-4">

                                    <div className="bg-[#614E34] p-3 rounded-xl text-[#E1890A]">

                                        <GraduationCap size={24} />

                                    </div>

                                    <div>

                                        <h4 className="text-white font-semibold">

                                            Formación

                                        </h4>

                                        <p className="text-gray-400 text-sm">

                                            Lic. en Sistemas

                                        </p>

                                    </div>

                                </div>

                                <div className="flex items-center gap-4">

                                    <div className="bg-[#614E34] p-3 rounded-xl text-[#E1890A]">

                                        <Briefcase size={24} />

                                    </div>

                                    <div>

                                        <h4 className="text-white font-semibold">

                                            Especialidad

                                        </h4>

                                        <p className="text-gray-400 text-sm">

                                            Full Stack

                                        </p>

                                    </div>

                                </div>

                            </div>

                            {/* Tecnologías */}

                            <div className="mt-12">

                                <h4 className="text-white font-semibold flex items-center gap-2">

                                    <Code2
                                        size={22}
                                        className="text-[#E1890A]"
                                    />

                                    Tecnologías

                                </h4>

                                <div className="flex flex-wrap gap-3 mt-5">

                                    {[
                                        "React",
                                        "React Native",
                                        "JavaScript",
                                        "Node.js",
                                        "Express",
                                        "MongoDB",
                                        "TailwindCSS",
                                        "Expo"
                                    ].map((tech) => (

                                        <span
                                            key={tech}
                                            className="
                                                px-4
                                                py-2
                                                rounded-full
                                                bg-[#614E34]
                                                text-[#E1890A]
                                                text-sm
                                                font-medium
                                            "
                                        >
                                            {tech}
                                        </span>

                                    ))}

                                </div>

                            </div>

                            {/* Redes */}

                            <div className="flex flex-wrap gap-5 mt-12">

                                <a
                                    href="https://github.com/"
                                    target="_blank"
                                    className="
                                        bg-[#614E34]
                                        hover:bg-[#E1890A]
                                        hover:text-white
                                        transition
                                        p-4
                                        rounded-xl
                                        text-[#E1890A]
                                    "
                                >
                                    <FaGithub size={24} />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/lucas-gaiton-b56a3326a/"
                                    target="_blank"
                                    className="
                                        bg-[#614E34]
                                        hover:bg-[#E1890A]
                                        hover:text-white
                                        transition
                                        p-4
                                        rounded-xl
                                        text-[#E1890A]
                                    "
                                >
                                    <FaLinkedin size={24} />
                                </a>

                                <a
                                    href="mailto:tuemail@gmail.com"
                                    className="
                                        bg-[#614E34]
                                        hover:bg-[#E1890A]
                                        hover:text-white
                                        transition
                                        p-4
                                        rounded-xl
                                        text-[#E1890A]
                                    "
                                >
                                    <Mail size={24} />
                                </a>

                                <a
                                    href="../../public/Cv/CV Lucas Gaiton.pdf"
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                        bg-[#E1890A]
                                        hover:bg-[#B67A26]
                                        text-white
                                        px-6
                                        rounded-xl
                                        font-semibold
                                        transition
                                    "
                                >

                                    <Download size={20} />

                                    Descargar CV

                                </a>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Estadísticas */}

                {/* <div className="grid md:grid-cols-3 gap-8 mt-16">

                    <div className="bg-[#363026] border border-[#614E34] rounded-2xl p-8 text-center">

                        <h3 className="text-5xl font-bold text-[#E1890A]">

                            10+

                        </h3>

                        <p className="text-gray-400 mt-3">

                            Proyectos desarrollados

                        </p>

                    </div>

                    <div className="bg-[#363026] border border-[#614E34] rounded-2xl p-8 text-center">

                        <h3 className="text-5xl font-bold text-[#E1890A]">

                            Full

                        </h3>

                        <p className="text-gray-400 mt-3">

                            Stack Developer

                        </p>

                    </div>

                    <div className="bg-[#363026] border border-[#614E34] rounded-2xl p-8 text-center">

                        <h3 className="text-5xl font-bold text-[#E1890A]">

                            2026

                        </h3>

                        <p className="text-gray-400 mt-3">

                            MambaPDF v1.0

                        </p>

                    </div>

                </div> */}

            </div>
        </section>
    );
}