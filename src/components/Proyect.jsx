export default function Proyect({ title, description, technologies, finishDate, images, link, deploy = '' }){

    // const splitTechnologies = (techs) => {
    //     return techs.split(', ');
    // };

    const getImages = () => {}; //HACER LOGICA PARA BUSCAR LAS IMAGENES DE LA CARPETA PUBLIC/img

    return (
        <div className="px-2 my-3">
            <p className="roboto-bold">{title}</p>
            <p>{description}</p>

            <div>
                aca van a estar las imgs
            </div>
            
            <p>Tecnologías: {technologies}.</p>
            {/* <div>
                {splitTechnologies(technologies)}
            </div> */}

            <a href={link}>
                <p>Link</p>
            </a>
            {deploy != '' && <a href={deploy}>
                <p>Deploy</p>
            </a>}
            <p>({finishDate})</p>
        </div>
    )
};