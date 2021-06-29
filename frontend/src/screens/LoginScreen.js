import React, { useState } from "react"
import Header from "../components/Header"

const LoginScreen = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
  }

  return (
    <div>
      <Header />
      <form onSubmit={onSubmit}>
        <h3>Login</h3>
        <input 
          type="text" 
          placeholder="Email" 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginScreen