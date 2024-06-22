export default function Education({ title, entity, startDate, finishDate, duration = '' }) {

    return (
        <div>
            {duration != '' ?
                <p>✔ {title} - {entity}. ({startDate} - {finishDate}, {duration})</p>
                :
                <p>✔ {title} - {entity}. ({startDate} - {finishDate})</p>
            }
        </div>
    )
};