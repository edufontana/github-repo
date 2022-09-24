import { useEffect, useState } from 'react'
import styled from './App.module.css'

function App() {
  const [list, setList] = useState<string[]>([])
  const [filter, setFilter] = useState('')

  function addToList() {
    setList((state) => [...state, 'Novo item'])
  }

  useEffect(() => {
    fetch('https://api.github.com/users/edufontana/repos')
      .then((res) => res.json())
      .then((data) => {
        setList(data.map((item) => item.full_name))
      })
  }, [])

  const filteredList = list.filter((item) => item.includes(filter))

  return (
    <div className={styled.app}>
      <input
        type="text"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      />
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      Itens filtrados
      <ul>
        {filteredList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={addToList}>Add to list</button>
    </div>
  )
}

export default App
