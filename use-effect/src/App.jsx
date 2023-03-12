import { useState } from 'react'
import './App.css'
import List from './Components/List'
import Details from './Components/Details'

function App() {
  const [object, setObject] = useState('')

  const getProp = (value) =>{
    setObject(value)
  }

  return (
    <div className='Main'>
      <List onChange={getProp} />
      <Details object={object}/>
    </div>
  )
}

export default App
