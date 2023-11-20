const ToDoAdding = (props) => {
    const {handleValue, setToDo, toDo, currentValue} = props

    const handleSubmit = (event) => {
        event.preventDefault()
        setToDo(prevToDo => ([...prevToDo, {content: currentValue}]))
        console.log(currentValue)
    }
    
    return (
        <section className="content">
            <div className="content_title">ToDo List</div>
            <form className="content_container" onSubmit={handleSubmit}>
                <button name="add" className='content_add'>+</button><input name="content" className="content_input" onChange={handleValue} value={currentValue} key={0} />
            </form>
        </section>
        )
}

export default ToDoAdding