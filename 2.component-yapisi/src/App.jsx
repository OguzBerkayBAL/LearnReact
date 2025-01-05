import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import { users } from './Login'
import Hello from './Hello'
import Product from './Product'

function App() {
  

console.log(users)

  return (
    <div>
      <Product/>
    </div>
  )
}

export default App
