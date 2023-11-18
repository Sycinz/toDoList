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
// Function that handles input value change (not title yet)
 const handleValue = (event) => {
  const {name, value} = event.target

  setToDo(prevToDo => ({
    ...prevToDo,
    content: value
  }))
 }

  return (
  <main>
    {/* ToDo adding to content list */}
    <ToDoAdding handleValue={handleValue} setToDo={setToDo} />
    <ToDoList />
  </main>
  )
}

export default App