import { useState } from 'react'
import ToDoAdding from './ToDoAdding'
import ToDoList from './ToDoList'
import './App.scss'

function App() {
  const [toDo, setToDo] = useState([ {
    content: 'Easy peasy, lemon squezie'
  },
 ])
//  currentValue is current <ToDoAdding / >'s input value. 
 const [currentValue, setCurrentValue] = useState('New note! Change it by typing in')

// Function that handles input value change and saves it in the currentValue state
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