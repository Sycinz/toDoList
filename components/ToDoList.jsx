const ToDoList = (props) => {
    const {toDo, setToDo} = props

    return (
    <section className="list">
        <ul className="list_container">
        { toDo.map((v, i) => (v !== "" ? <li key={i} className="list_item">{v}</li> : null)) }
        </ul>
    </section>
    )
}

export default ToDoList