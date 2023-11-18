import {useState} from 'react'

const ToDoAdding = (props) => {
    const {handleValue, setToDo, setCurrentValue, currentValue} = props
    
    return (
        <section className="content">
            <div className="content_title">ToDo List</div>
            <div className="content_container">
                <button className='content_add'>+</button><input name="content" className="content_input" onChange={handleValue} value={currentValue} key={0} />
            </div>
        </section>
        )
}

export default ToDoAdding