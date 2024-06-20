import Proyect from "./Proyect";

export default function ProyectsContainer(){

    return (
        <div className="bg-violet-400">
            <Proyect title='Sneaker Spot' description='Ecommerce con registro de cuentas que realicé en grupo como proyecto final del curso de programación full-stack de Digital House.' technologies='Express, React, MySQL' finishDate='2023' />
            <Proyect title='La cueva del cine' description='Página que permite ver información de las últimas películas gracias al uso de una api.' technologies='React' finishDate='2023' />
            <Proyect title='Reloj de ajedréz' description='Reloj de ajedréz con la posibilidad de poder modificar el tiempo de incremento de cada turno.' technologies='React' finishDate='2023' />
            <Proyect title='Generador de contraseñas' description='Generador de contraseñas que indica la seguridad de la contraseña generada en base a distintos parámetros.' technologies='React' finishDate='2023' />
            <Proyect title='Musicboxd' description='Una página de discos de música que permite crear usuarios, artistas, discos, reseñas y ratings. Basada en la página RYM.' technologies='ASP .NET, React, SQL Server' finishDate='2024' />
            <Proyect title='Tekken moves' description='Página que permite ver los movimientos de los personajes del videojuego Tekken 7, cada uno con sus detalles y con la posibilidad de ver movimientos parecidos al seleccionado.' technologies='Express, React' finishDate='2024' />
        </div>
    )
};