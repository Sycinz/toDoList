const ToDoAdding = (props) => {
    const {handleValue, setToDo, currentValue} = props

    const handleSubmit = (event) => {
        event.preventDefault()
        setToDo(prevToDo => ([...prevToDo, currentValue]))
    }
    
    return (
        <section className="content">
            <div className="content_title">ToDo List</div>
            <form className="content_container" onSubmit={handleSubmit}>
                <input className="content_checkbox" type="checkbox" name="checkbox" onChange={handleSubmit} />
                <input name="content" className="content_input" onChange={handleValue} value={currentValue} key={0} />
            </form>
        </section>
        )
}

export default ToDoAdding