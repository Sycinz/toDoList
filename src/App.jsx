import { useState } from 'react'
import ToDoAdding from './ToDoAdding'
import ToDoList from './ToDoList'
import './App.scss'

function App() {
  const [toDo, setToDo] = useState([ {
    title: '',
    content: ''
  },
 ])
 const [currentValue, setCurrentValue] = useState('New note! Change it by typing in')

// Function that handles input value change (not title yet)
 const handleValue = (event) => {
  const {name, value} = event.target

   if (name === 'content') setCurrentValue(prevValue => (value))  
}

  return (
  <main>
    {/* ToDo adding to content list */}
    <ToDoAdding 
      handleValue={handleValue} 
      setToDo={setToDo} 
      currentValue={currentValue} 
      setCurrentValue={setCurrentValue} 
      />

      <ToDoList toDo={toDo} setToDo={setToDo}/>
  </main>
  )
}

export default App