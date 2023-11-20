const ToDoList = (props) => {
    const {toDo, setToDo} = props

    return (
    <section className="list">
        <div className="list_container">
        { toDo.map(v => (<div className="list_item">{v.content}</div>)) }
        </div>
    </section>
    )
}

export default ToDoList