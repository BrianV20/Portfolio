import { useContext, useState } from "react";
import { languageContext } from "../Contexts";
import Proyect from "./Proyect";

export default function ProyectsContainer(){
    const { selectedLanguage, setSelectedLanguage } = useContext(languageContext);

    return (
        <div className="mt-8 rounded-lg py-4 px-4 md:px-6 lg:px-8" id="proyects">
            <div className="bg-violet-100 rounded-lg px-4 py-2 mb-4">
                <p className="text-xl md:text-2xl  text-violet-700 roboto-bold lg:text-3xl">{selectedLanguage == 'spanish' ? 'Proyectos' : 'Projects'}</p>
            </div>
            <div className="md:grid md:grid-cols-2 gap-x-8">
                <Proyect title='Sneaker Spot' description={selectedLanguage == 'spanish' ? 'Ecommerce con registro de cuentas que realicé en grupo como proyecto final del curso de programación full-stack de Digital House.' : 'Ecommerce that I did in group with other people as the final project for the Full-stack programming course dictated by Digital House.'} technologies='Express, React, MySQL' finishDate='2023' link='https://github.com/lautarovinales/grupo_3_SneakerSpot' images={['SneakerSpot-1', 'SneakerSpot-2', 'SneakerSpot-3', 'SneakerSpot-4', 'SneakerSpot-5']} />

                <Proyect title='La cueva del cine' description={selectedLanguage == 'spanish' ? 'Página que permite ver información de las últimas películas gracias al uso de una API.' : 'Page that allows you to see the information of the latest movies released on cinema with the use of an API.'} technologies='React' finishDate='2023' link='https://github.com/alexislan/Proyecto-Labo' deploy='https://proyecto-labo.vercel.app/' images={['CuevaDelCine-1', 'CuevaDelCine-2', 'CuevaDelCine-3']} />

                <Proyect title={selectedLanguage == 'spanish' ? 'Reloj de ajedréz' : 'Chess clock'} description={selectedLanguage == 'spanish' ? 'Reloj de ajedréz con la posibilidad de poder modificar el tiempo de incremento de cada turno.' : `Chess clock that let's you modify parameters such as the increment time and the total time of the game.`} technologies='React' finishDate='2023' link='https://github.com/BrianV20/Basic-Chess-Timer' deploy='https://admirable-mooncake-78b431.netlify.app/' images={['RelojAjedrez-1', 'RelojAjedrez-2', 'RelojAjedrez-3']} />

                <Proyect title={selectedLanguage == 'spanish' ? 'Generador de contraseñas' : 'Password generator'} description={selectedLanguage == 'spanish' ? 'Generador de contraseñas que indica la seguridad de la contraseña generada en base a distintos parámetros.' : 'Password generator that generates a password and shows the level of security based on certain parameters that the user can modify.'} technologies='React' finishDate='2023' link='https://github.com/BrianV20/password-generator' deploy='https://heartfelt-lebkuchen-8f8566.netlify.app/' images={['PasswordGenerator-1']} />

                <Proyect title='Musicboxd' description={selectedLanguage == 'spanish' ? 'Una página de discos de música que permite crear usuarios, artistas, discos, reseñas y ratings. Basada en la página RYM.' : 'Music based page inspired by RYM where the user can create an account and log albums, write reviews, ratings, etc.'} technologies='ASP .NET, React, SQL Server' finishDate='2024' link='https://github.com/BrianV20/MusicApiReact' images={['MusicBoxd-1', 'MusicBoxd-2', 'MusicBoxd-3', 'MusicBoxd-4', 'MusicBoxd-5', 'MusicBoxd-6', 'MusicBoxd-7', 'MusicBoxd-8']} />

                <Proyect title='Tekken moves' description={selectedLanguage == 'spanish' ? 'Página que permite ver los movimientos de los personajes del videojuego Tekken 7, cada uno con sus detalles y con la posibilidad de ver movimientos parecidos al seleccionado.' : 'Page that allows you to see the information of the movements of the characters of the videogame Tekken 7.'} technologies='Express, React' finishDate='2024' link='https://github.com/BrianV20/tekkenPage' deploy='https://tekkenmoves.netlify.app/' images={['tekkenMoves-1', 'tekkenMoves-2', 'tekkenMoves-3']} />
            </div>
        </div>
    )
};