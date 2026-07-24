import { useEffect, useState } from "react";
import { Menu, X, FileText } from "lucide-react";
import icon from "../assets/icon/icon.png";


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        {
            name: "Características",
            href: "#features",
        },
        // {
        //     name: "Demo",
        //     href: "#demo",
        // },
        {
            name: "Capturas",
            href: "#screenshots",
        },
        {
            name: "Desarrollador",
            href: "#developer",
        },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-[#33302D]/95 backdrop-blur-md border-b border-[#614E34] shadow-xl"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">



                <a
                    href="#hero"
                    className="flex items-center gap-3"
                >

                    <img src={icon} alt="icon" className="w-14 h-14 object-contain rounded-xl" />


                    <div>
                        <h1 className="font-bold text-xl text-white tracking-wide">
                            MambaPDF
                        </h1>

                        <p className="text-xs text-[#B67A26]">
                            Work Orders Generator
                        </p>
                    </div>
                </a>

                {/* Desktop */}

                <nav className="hidden md:flex items-center gap-8">

                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="
                                text-gray-300
                                hover:text-[#E1890A]
                                transition
                                duration-300
                                font-medium
                                relative
                                after:absolute
                                after:left-0
                                after:-bottom-1
                                after:h-[2px]
                                after:w-0
                                after:bg-[#E1890A]
                                after:transition-all
                                hover:after:w-full
                            "
                        >
                            {link.name}
                        </a>
                    ))}

                    <a
                        href="#download"
                        className="
                            bg-[#E1890A]
                            hover:bg-[#B67A26]
                            text-white
                            px-6
                            py-3
                            rounded-xl
                            font-semibold
                            shadow-lg
                            transition-all
                            duration-300
                            hover:scale-105
                        "
                    >
                        Descargar APK
                    </a>

                </nav>

                {/* Botón menú */}

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-white"
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

            </div>

            {/* Menú Mobile */}

            {menuOpen && (
                <div className="md:hidden bg-[#33302D] border-t border-[#614E34] shadow-xl">

                    <nav className="flex flex-col p-6 gap-6">

                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="
                                    text-gray-300
                                    hover:text-[#E1890A]
                                    transition
                                    duration-300
                                "
                            >
                                {link.name}
                            </a>
                        ))}

                        <a
                            href="#download"
                            onClick={() => setMenuOpen(false)}
                            className="
                                mt-2
                                bg-[#E1890A]
                                hover:bg-[#B67A26]
                                text-white
                                text-center
                                py-3
                                rounded-xl
                                font-semibold
                                transition-all
                                duration-300
                            "
                        >
                            Descargar APK
                        </a>

                    </nav>

                </div>
            )}
        </header>
    );
}