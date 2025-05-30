import { useState } from 'react'
import './App.css'
import Navbar from './Navbar';
import Content from './Content'

function App() {
  const [toggled, setToggled] = useState('references');

  return (
    <>
      <Navbar setToggled={setToggled}/>
      <Content toggled={toggled}/>
    </>
  )
}

export default App
