import { useState } from 'react'
import './App.css'
import IPLTable from './components/IplTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <IPLTable/>
    </>
  )
}

export default App
