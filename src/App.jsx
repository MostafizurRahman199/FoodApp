import { useState } from 'react'
import './App.css'
import Search from './components/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Search></Search>
    </div>
  )
}

export default App
