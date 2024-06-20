export default function AboutMeContainer() {

    return (
        <div className="flex flex-col bg-green-200">
            <div className="border-2 border-black mt-5 mb-3">
                <img src="./img/epdro.jpg" alt="My picture" className="rounded-full max-h-[18rem] mx-auto" />
            </div>
            <div className="border-2 border-blue-600">
                <p>Hola! Soy Brian Velázquez, un junior full stack developer de San Nicolás, Buenos Aires.</p>
                <p>Actualmente estoy realizando el proyecto final de una tecnicatura en programación, mientras tanto estoy buscando mi primer experiencia laboral en el campo de la programación.</p>
                <p>Aspiro principalmente a conseguir un trabajo estable en una empresa del rubro y a mejorar como programador.</p>
                {/* <p>Hi! I'm Brian Velázquez, a junior full stack developer.</p>
                <p>Currently, I'm working on the final proyect of my carreer to become a technician in programming, meanwhile, I'm looking for my first job experience on this field.</p>
                <p>The thing I aspire the most is to work with a good group of people on a prestigious company and to become better as a programmer as well.</p> */}
            </div>
        </div>
    )
};