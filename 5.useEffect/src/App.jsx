import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [firstName , setFirstName] = useState('');
  const [lastName , setLastName] = useState('');

  useEffect(()=>{
    console.log("her zaman çalışır")
  })

  useEffect(()=>{
    console.log("ilk render edildiğinde çalışır.")
  }, [])

  useEffect(()=>{
    console.log("ilk rener edildiğinde ve firstName state değeri değiştiğinde çalışır.")
  }, [firstName])

  useEffect(()=>{
    console.log("ilk rener edildiğinde ve lastName state değeri değiştiğinde çalışır.")
  }, [lastName])

  return (
    <div>
      <div><button onClick={()=> setFirstName("Berkay")}>Adı Değiştir</button></div>
      <div><button onClick={()=> setLastName("Bal")}>Soyismi Değiştir</button></div>
    </div>
  )
}

export default App
