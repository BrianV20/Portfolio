export default function Education({ title, entity, startDate, finishDate, duration = '' }) {

    return (
        <div>
            {duration != '' ? (
                <>
                    {finishDate != '' && 
                        <div className="flex">
                            <i className="fa-solid fa-code mr-2 self-center md:mr-3"></i>
                            <p>{title} - {entity}. ({startDate}, {duration}).</p>
                        </div>
                    }
                </>
            )
                :
                <div className="flex">
                    <i className="fa-solid fa-code mr-2 self-center md:mr-3"></i>
                    <p>{title} - {entity}. ({startDate} - {finishDate}).</p>
                </div>
            }
        </div>
    )
};