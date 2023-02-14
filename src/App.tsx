import { useState } from 'react'
import {Body} from "./components/Body/Body";
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Body />
    </div>
  )
}

export default App
