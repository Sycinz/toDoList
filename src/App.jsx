import { useState } from 'react'
import ListContent from './ListContent'
import MainContent from './MainContent'
import './App.scss'

function App() {
  const [toDo, setToDo] = useState([ {
    title: 'New task',
    content: 'Change the text by typing in!'
  },{
    title: 'New task',
    content: 'Change the text by typing in!'
  },{
    title: 'New task',
    content: 'Change the text by typing in!'
  },{
    title: 'New task',
    content: 'Change the text by typing in!'
  },{
    title: 'New task',
    content: 'Change the text by typing in!'
  },{
    title: 'New task',
    content: 'Change the text by typing in!'
  },{
    title: 'New task',
    content: 'Change the text by typing in!'
  },{
    title: 'New task',
    content: 'Change the text by typing in!'
  },{
    title: 'New task',
    content: 'Change the text by typing in!'
  },{
    title: 'New task',
    content: 'Change the text by typing in!'
  },
 ])

  return (
  <main>
    {/* ToDo list on the left side */}
    <ListContent toDo={toDo} setToDo={setToDo} />
    {/* ToDo list of content */}
    <MainContent toDo={toDo} setToDo={setToDo} />
  </main>
  )
}

export default App