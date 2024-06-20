export default function Education({ title, entity, startDate, finishDate, duration = '' }) {

    return (
        <div className="bg-green-300">
            {duration != '' ?
                <p>{title} - {entity}. ({startDate} - {finishDate}, {duration})</p>
                :
                <p>{title} - {entity}. ({startDate} - {finishDate})</p>
            }
        </div>
    )
};