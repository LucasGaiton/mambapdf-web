import {
    FileText,
    // Github,
    // Linkedin,
    Mail,
    Heart,
    ArrowUp,
} from "lucide-react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import icon from "../assets/icon/icon.png";

export default function Footer() {
    return (
        <footer className="bg-[#33302D] border-t border-[#614E34]">

            <div className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid lg:grid-cols-4 gap-12">

                    {/* Logo */}

                    <div>

                        <div className="flex items-center gap-3">



                            <img src={icon} alt="icon" className="w-16 h-16 object-contain rounded-xl" />


                            <div>

                                <h2 className="text-2xl font-bold text-white">

                                    MambaPDF

                                </h2>

                                <p className="text-[#B67A26] text-sm">

                                    Work Orders Generator

                                </p>

                            </div>

                        </div>

                        <p className="mt-6 text-gray-400 leading-7">

                            Aplicación Android diseñada para crear órdenes de
                            trabajo profesionales y generar documentos PDF de
                            manera rápida, sencilla y completamente offline.

                        </p>

                    </div>

                    {/* Navegación */}

                    <div>

                        <h3 className="text-white font-semibold text-lg">

                            Navegación

                        </h3>

                        <div className="mt-6 flex flex-col gap-4">

                            <a
                                href="#hero"
                                className="text-gray-400 hover:text-[#E1890A] transition"
                            >
                                Inicio
                            </a>

                            <a
                                href="#features"
                                className="text-gray-400 hover:text-[#E1890A] transition"
                            >
                                Características
                            </a>

                            <a
                                href="#demo"
                                className="text-gray-400 hover:text-[#E1890A] transition"
                            >
                                Demo
                            </a>

                            <a
                                href="#screenshots"
                                className="text-gray-400 hover:text-[#E1890A] transition"
                            >
                                Capturas
                            </a>

                            <a
                                href="#download"
                                className="text-gray-400 hover:text-[#E1890A] transition"
                            >
                                Descargar APK
                            </a>

                        </div>

                    </div>

                    {/* Recursos */}

                    <div>

                        <h3 className="text-white font-semibold text-lg">

                            Recursos

                        </h3>

                        <div className="mt-6 flex flex-col gap-4">

                            <a
                                href="/Lucas-Gaiton-CV.pdf"
                                className="text-gray-400 hover:text-[#E1890A] transition"
                            >
                                Descargar CV
                            </a>

                            <a
                                href="mailto:tuemail@gmail.com"
                                className="text-gray-400 hover:text-[#E1890A] transition"
                            >
                                Contacto
                            </a>

                            <a
                                href="#developer"
                                className="text-gray-400 hover:text-[#E1890A] transition"
                            >
                                Sobre el desarrollador
                            </a>

                        </div>

                    </div>

                    {/* Redes */}

                    <div>

                        <h3 className="text-white font-semibold text-lg">

                            Seguime

                        </h3>

                        <p className="mt-5 text-gray-400 leading-7">

                            Si te gustó este proyecto podés conocer más
                            desarrollos o contactarme mediante mis redes.

                        </p>

                        <div className="flex gap-4 mt-8">

                            <a
                                href="https://github.com/LucasGaiton"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    w-12
                                    h-12
                                    rounded-xl
                                    bg-[#614E34]
                                    hover:bg-[#E1890A]
                                    text-[#E1890A]
                                    hover:text-white
                                    flex
                                    items-center
                                    justify-center
                                    transition-all
                                    duration-300
                                "
                            >

                                <FaGithub size={22} />

                            </a>

                            <a
                                href="https://www.linkedin.com/in/lucas-gaiton-b56a3326a/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    w-12
                                    h-12
                                    rounded-xl
                                    bg-[#614E34]
                                    hover:bg-[#E1890A]
                                    text-[#E1890A]
                                    hover:text-white
                                    flex
                                    items-center
                                    justify-center
                                    transition-all
                                    duration-300
                                "
                            >

                                <FaLinkedin size={22} />

                            </a>

                            <a
                                href="mailto:tuemail@gmail.com"
                                className="
                                    w-12
                                    h-12
                                    rounded-xl
                                    bg-[#614E34]
                                    hover:bg-[#E1890A]
                                    text-[#E1890A]
                                    hover:text-white
                                    flex
                                    items-center
                                    justify-center
                                    transition-all
                                    duration-300
                                "
                            >

                                <Mail size={22} />

                            </a>

                        </div>

                    </div>

                </div>

                {/* Línea */}

                <div className="border-t border-[#614E34] mt-14 pt-8">

                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                        <p className="text-gray-500 text-center">

                            © {new Date().getFullYear()} MambaPDF · Desarrollado por{" "}

                            <span className="text-[#E1890A] font-semibold">

                                Lucas Gaitón

                            </span>

                        </p>

                        <div className="flex items-center gap-2 text-gray-500">

                            <span>

                                Realizado usando React + TailwindCSS

                            </span>


                        </div>

                        <a
                            href="#hero"
                            className="
                                w-12
                                h-12
                                rounded-full
                                bg-[#E1890A]
                                hover:bg-[#B67A26]
                                text-white
                                flex
                                items-center
                                justify-center
                                transition-all
                                duration-300
                                hover:-translate-y-1
                            "
                        >

                            <ArrowUp size={22} />

                        </a>

                    </div>

                </div>

            </div>

        </footer>
    );
}