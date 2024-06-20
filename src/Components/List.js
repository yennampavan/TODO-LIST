export default function List({ items, onDelete, onEdit }) {
    return (
        <ul className="list">
            {
                items.length && items.map((ele, index) => (
                    <div className="list-item">
                        <li key={index}>{ele.task}</li>
                        <button onClick={() => onDelete(ele.id)} type="button">Delete</button>
                        <button className="edit-btn" onClick={() => onEdit(ele.id)} type="button">Edit</button>
                    </div>
                ))
            }
        </ul>
    )
}