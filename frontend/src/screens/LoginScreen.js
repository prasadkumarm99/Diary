import React, { useState } from "react"
import { login } from "../actions/userActions"
import { Link } from "react-router-dom"
import { loginUser } from "../redux-store/actions"
import { connect } from "react-redux"

const Login = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSuccess = (err, user) => {
    if (err) return console.log("User not found..!")
    const { _id, name, email } = user
    props.dispatch(loginUser({ id: _id, name, email, isLogged: true }))
    props.history.push("/dashboard")
  }
  const onSubmit = (e) => {
    e.preventDefault()
    login(email, password, onSuccess)
  }

  return (
    <div>

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
        <p>New to Diary? 
          <Link to="/register">Register</Link> 
        </p>
      </form>
    </div>
  )
}

const LoginPage = connect()(Login)

export default LoginPage