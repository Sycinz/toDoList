const ToDoList = (props) => {
    const {toDo, setToDo} = props

    return (
    <section className="list">
        { toDo.map(v => (v.content)) }
    </section>
    )
}

export default ToDoList