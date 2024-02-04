import { useState } from 'react'
import './App.css'
import ValentineProposal from './Prop'
import reactLogo from './assets/react.svg'
import { Button } from './components/ui/button'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ValentineProposal />
    </>
  )
}

export default App
