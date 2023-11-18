import {useState} from 'react'

const ToDoAdding = (props) => {
    const [currentValue, setCurrentValue] = useState('Change the note by typing in!')



    return (
        <section className="content">
            <div className="content_title">ToDo List</div>
            <div className="content_container">
                <input className='content_radio' type="radio" /><input name="content" className="content_input" value={currentValue} key={currentValue.id} />
            </div>
        </section>
        )
}

export default ToDoAdding