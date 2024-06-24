import { useContext, useState } from "react";
import { languageContext } from "../Contexts";

export default function ContactContainer() {
    const { selectedLanguage, setSelectedLanguage } = useContext(languageContext);

    return (
        <>
        <div className="mt-8 rounded-lg py-4 px-4 md:px-6 lg:px-8">
            <div className="bg-violet-100 rounded-lg px-4 py-2 mb-4" id="contact">
                <p className="text-xl md:text-2xl text-violet-700 roboto-bold lg:text-3xl">{languageContext == 'spanish' ? 'Contacto' : 'Contact'}</p>
            </div>
            <div className="p-6 flex flex-col gap-y-3 lg:text-xl lg:flex-row lg:gap-x-4">
                <div className="border-2 border-purple-500 rounded-lg p-4 flex items-center space-x-2">
                    <i className="fa-solid fa-phone text-purple-600"></i>
                    <p>+54 9 336 457 1481</p>
                </div>
                <div className="border-2 border-purple-500 rounded-lg p-4 flex items-center space-x-2 overflow-auto">
                    <i className="fa-solid fa-envelope text-purple-600"></i>
                    <p>brianezequielv2004@gmail.com</p>
                </div>
                <div className="border-2 border-purple-500 rounded-lg p-4 flex items-center space-x-2">
                    <i className="fa-brands fa-linkedin text-purple-600"></i>
                    <a href="https://www.linkedin.com/in/brian-vel%C3%A1zquez-557a0b260/">
                        <p className="hover:text-violet-600 transition-colors">Linkedin</p>
                    </a>
                </div>
                <div className="border-2 border-purple-500 rounded-lg p-4 flex items-center space-x-2">
                    <i className="fa-brands fa-instagram text-purple-600"></i>
                    <a href="https://www.instagram.com/brianvelazquez827/">
                        <p className="hover:text-violet-600 transition-colors">Instagram</p>
                    </a>
                </div>
            </div>
        </div>
        </>
    );
}

{/* <div className="border-2 border-black">
<a href="https://www.linkedin.com/in/brian-vel%C3%A1zquez-557a0b260/">

</a>
</div>
<div className="border-2 border-black">
<a href='https://www.instagram.com/brianvelazquez827/'>
    <i className="fa-brands fa-instagram"></i>
    <p>Instagram</p>
</a>
</div> */}