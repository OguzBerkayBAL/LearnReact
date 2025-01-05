import React from 'react'

export const users = [
  {
    username: "berkay",
    password: "1",
  },
  {
    username: "neslihan",
    password: "2"
  }
  
]

const Login = () => {
  return (
    <div>
      <div>
        <p>Kullanıcı Adı</p>
        <input type="text" />
      </div>

      <div>
        <p>şifreniz</p>
        <input type="text" />
      </div>

      <button>giris yap</button>
    </div>
  )
}

export default Login