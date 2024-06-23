import Proyect from "./Proyect";

export default function ProyectsContainer(){

    return (
        <div className="mt-8 rounded-lg py-4 px-4 md:px-6 lg:px-8" id="proyects">
            <div className="bg-violet-100 rounded-lg px-4 py-2 mb-4">
                <p className="text-xl md:text-2xl  text-violet-700 roboto-bold lg:text-3xl">Proyectos</p>
            </div>
            <div className="md:grid md:grid-cols-2 gap-x-8">
                <Proyect title='Sneaker Spot' description='Ecommerce con registro de cuentas que realicé en grupo como proyecto final del curso de programación full-stack de Digital House.' technologies='Express, React, MySQL' finishDate='2023' link='https://github.com/lautarovinales/grupo_3_SneakerSpot' images={['SneakerSpot-1', 'SneakerSpot-2', 'SneakerSpot-3', 'SneakerSpot-4', 'SneakerSpot-5']} />

                <Proyect title='La cueva del cine' description='Página que permite ver información de las últimas películas gracias al uso de una api.' technologies='React' finishDate='2023' link='https://github.com/alexislan/Proyecto-Labo' deploy='https://proyecto-labo.vercel.app/' images={['CuevaDelCine-1', 'CuevaDelCine-2', 'CuevaDelCine-3']} />

                <Proyect title='Reloj de ajedréz' description='Reloj de ajedréz con la posibilidad de poder modificar el tiempo de incremento de cada turno.' technologies='React' finishDate='2023' link='https://github.com/BrianV20/Basic-Chess-Timer' deploy='https://admirable-mooncake-78b431.netlify.app/' images={['RelojAjedrez-1', 'RelojAjedrez-2', 'RelojAjedrez-3']} />

                <Proyect title='Generador de contraseñas' description='Generador de contraseñas que indica la seguridad de la contraseña generada en base a distintos parámetros.' technologies='React' finishDate='2023' link='https://github.com/BrianV20/password-generator' deploy='https://heartfelt-lebkuchen-8f8566.netlify.app/' images={['PasswordGenerator-1']} />

                <Proyect title='Musicboxd' description='Una página de discos de música que permite crear usuarios, artistas, discos, reseñas y ratings. Basada en la página RYM.' technologies='ASP .NET, React, SQL Server' finishDate='2024' link='https://github.com/BrianV20/MusicApiReact' images={['MusicBoxd-1', 'MusicBoxd-2', 'MusicBoxd-3', 'MusicBoxd-4', 'MusicBoxd-5', 'MusicBoxd-6', 'MusicBoxd-7', 'MusicBoxd-8']} />

                <Proyect title='Tekken moves' description='Página que permite ver los movimientos de los personajes del videojuego Tekken 7, cada uno con sus detalles y con la posibilidad de ver movimientos parecidos al seleccionado.' technologies='Express, React' finishDate='2024' link='https://github.com/BrianV20/tekkenPage' deploy='https://tekkenmoves.netlify.app/' images={['tekkenMoves-1', 'tekkenMoves-2', 'tekkenMoves-3']} />
            </div>
        </div>
    )
};