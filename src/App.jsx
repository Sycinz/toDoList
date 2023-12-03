import { useState } from 'react'
import ToDoAdding from '../components/ToDoAdding'
import ToDoList from '../components/ToDoList'
import './App.scss'

function App() {
  const [toDo, setToDo] = useState([''])
//  currentValue is current <ToDoAdding / >'s input value. 
 const [currentValue, setCurrentValue] = useState('New note! Change it by typing in')

// Function that handles input value change and saves it in the currentValue state
 const handleValue = (event) => {
  const {name, value} = event.target

  setCurrentValue(prevValue => (value))  
}

  return (
  <main>
    {/* ToDo adding to content list */}
    <ToDoAdding 
      handleValue={handleValue} 
      setToDo={setToDo} 
      currentValue={currentValue} 
      toDo={toDo}
      />
    {/* ToDo list on the left side */}
    <section className='list'>
      <div className='container'>
        <li>Masno Geng Lista</li>
        <li>Masno Geng Lista</li>
        <li>Masno Geng Lista</li>
        <li>Masno Geng Lista</li>
        <li>Masno Geng Lista</li>
        <li>Masno Geng Lista</li>
        <li>Masno Geng Lista</li>
        <li>Masno Geng Lista</li>
        <li>Masno Geng Lista</li>
        <li>Masno Geng Lista</li>
      </div>
    </section>
    {/* ToDo list of content */}
    <section className='content'>

      <ToDoList toDo={toDo} setToDo={setToDo}/>
  </main>
  )
}

export default App