export default function Education({ title, entity, startDate, finishDate, duration = '' }) {

    return (
        <div>
            {duration != '' ?
                <div className="flex">
                    <i className="fa-solid fa-code mr-1 self-center"></i>
                    <p>{title} - {entity}. ({startDate} - {finishDate}, {duration}).</p>
                </div>
                :
                <div className="flex">
                    <i className="fa-solid fa-code mr-1 self-center"></i>
                    <p>{title} - {entity}. ({startDate} - {finishDate}).</p>
                </div>
            }
        </div>
    )
};