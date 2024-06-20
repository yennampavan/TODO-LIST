export default function Add({ click, change, value }) {
    return (
        <div className="addField">
            <input value={value} onChange={e => change(e.target.value)} type="text" name="task" placeholder="Enter your new task" />
            <button onClick={click} className="add-btn" type="button">+ New Task</button>
        </div>
    )
}