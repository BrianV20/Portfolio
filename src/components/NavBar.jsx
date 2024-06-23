import React from "react";
import { Link } from "react-scroll";

export default function NavBar() {
    return (
        <div className="bg-gradient-to-b from-violet-400 to-slate-100 py-2 px-5 flex justify-between items-center gap-x-5 md:py-4 lg:justify-around">
            <p className="text-2xl font-bold text-gray-800 lato-bold">Brian Velázquez</p>
            <div className="flex flex-wrap items-center gap-x-4 lato-regular md:text-xl">
                <Link to="aboutMe" smooth={true} duration={500} className="text-gray-700 hover:text-violet-500 transition-colors cursor-pointer">Sobre mí</Link>
                <Link to="proyects" smooth={true} duration={500} className="text-gray-700 hover:text-violet-500 transition-colors cursor-pointer">Proyectos</Link>
                <Link to="contact" smooth={true} duration={500} className="text-gray-700 hover:text-violet-500 transition-colors cursor-pointer">Contacto</Link>
            </div>
        </div>
    );
}