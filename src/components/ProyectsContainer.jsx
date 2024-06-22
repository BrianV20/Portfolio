import Proyect from "./Proyect";

export default function ProyectsContainer(){

    return (
        <div className="border-y-2 mt-8 border-b-slate-300 border-t-slate-300 rounded-lg py-3">
            <div className="bg-orange-200 rounded-xl px-2 w-fit mb-2">
                <p className="text-2xl roboto-bold">PROYECTOS</p>
            </div>
            <Proyect title='Sneaker Spot' description='Ecommerce con registro de cuentas que realicé en grupo como proyecto final del curso de programación full-stack de Digital House.' technologies='Express, React, MySQL' finishDate='2023' link='https://github.com/lautarovinales/grupo_3_SneakerSpot' images='Musicboxd-1, Musicboxd-2, Musicboxd-3, Musicboxd-4, Musicboxd-5, Musicboxd-6, Musicboxd-7, Musicboxd-8' />

            <Proyect title='La cueva del cine' description='Página que permite ver información de las últimas películas gracias al uso de una api.' technologies='React' finishDate='2023' link='https://github.com/alexislan/Proyecto-Labo' deploy='https://proyecto-labo.vercel.app/' images='CuevaDelCine-1, CuevaDelCine-2, CuevaDelCine-3' />

            <Proyect title='Reloj de ajedréz' description='Reloj de ajedréz con la posibilidad de poder modificar el tiempo de incremento de cada turno.' technologies='React' finishDate='2023' link='https://github.com/BrianV20/Basic-Chess-Timer' deploy='https://admirable-mooncake-78b431.netlify.app/' images='RelojAjedrez-1, RelojAjedrez-2, RelojAjedrez-3' />

            <Proyect title='Generador de contraseñas' description='Generador de contraseñas que indica la seguridad de la contraseña generada en base a distintos parámetros.' technologies='React' finishDate='2023' link='https://github.com/BrianV20/password-generator' deploy='https://heartfelt-lebkuchen-8f8566.netlify.app/' images='PasswordGenerator-1' />

            <Proyect title='Musicboxd' description='Una página de discos de música que permite crear usuarios, artistas, discos, reseñas y ratings. Basada en la página RYM.' technologies='ASP .NET, React, SQL Server' finishDate='2024' link='https://github.com/BrianV20/MusicApiReact' images='MusicBoxd-1, MusicBoxd-2, MusicBoxd-3, MusicBoxd-4, MusicBoxd-5, MusicBoxd-6, MusicBoxd-7, MusicBoxd8' />

            <Proyect title='Tekken moves' description='Página que permite ver los movimientos de los personajes del videojuego Tekken 7, cada uno con sus detalles y con la posibilidad de ver movimientos parecidos al seleccionado.' technologies='Express, React' finishDate='2024' link='https://github.com/BrianV20/tekkenPage' deploy='https://tekkenmoves.netlify.app/' images='tekkenMoves-1, tekkenMoves-2, tekkenMoves-3' />
        </div>
    )
};