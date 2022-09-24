import { useState } from 'react'
import styled from './App.module.css'

function App() {
  const [list, setList] = useState<string[]>([])

  function addToList() {
    setList((state) => [...state, 'Novo item'])
  }

  return (
    <div className={styled.app}>
      {list.map((item) => (
        <div>{item}</div>
      ))}
      <button onClick={addToList}>Add to list</button>
    </div>
  )
}

export default App
