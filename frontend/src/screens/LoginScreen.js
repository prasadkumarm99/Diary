import React, { useState, useEffect } from "react"
import { login } from "../actions/userActions"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import Cookie from "js-cookie"
import { loginUser } from "../redux-store/actions"
import Header from "../components/Header"

const LoginPage = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const token = Cookie.get("token")

  useEffect(() => {
    if (token) {
      props.history.push("/dashboard")
    }
  })

  const onSuccess = (err, data) => {
    if (err) return console.log("User not found..!")
    dispatch(loginUser(data.user))
    Cookie.set("token", data.token)
    props.history.push("/dashboard")
  }
  
  const onSubmit = (e) => {
    e.preventDefault()
    login(email, password, onSuccess)
  }

  return (
    <div>
      <Header route={props.history.location.pathname}/>
      <div className="centre-container">
        <form className="auth-form" onSubmit={onSubmit}>
          <h3 className="component">Login</h3>
          <input 
            className="component"
            type="text" 
            placeholder="Email" 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            className="component"
            type="password" 
            placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="component">Login</button>
          <p className="component">New to Diary? 
            <Link to="/register">Register</Link> 
          </p>
        </form>
      </div>
    </div>
  )
}

export default LoginPage