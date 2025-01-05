import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [firstName, setFirstName] = useState('Berkay');

  // const handleChange = () => {
  //   setFirstName("Neslihan")
  // }

  const [count, setCount] = useState(0)

  const arttir = () => {
    setCount(count + 1);
  }

  return (
    <div>
      {/* <div>{firstName}</div>
      <div><button onClick={handleChange}>İsmi Değiştir</button></div> */}
      <div>{count}</div>
      <div><button onClick={arttir}>Arttır</button></div>
    </div>

  )
}

export default App
