import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import Swal from 'sweetalert2'
import Cookie from "js-cookie"
import { register } from "../actions/userActions"
import Header from "../components/Header"
import { loginUser } from "../redux-store/actions"


const RegisterPage = (props) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rePassword, setRePassword] = useState("")
  const dispatch = useDispatch()
  const token = Cookie.get("token")

  if (token) {
    props.history.push("/dashboard")
    return <div></div>
  }

  const onSuccess = (err, data) => {
    if (err) return console.log("Error on registration", err)
    dispatch(loginUser(data.user))
    Cookie.set("token", data.token)
    Swal.fire('Registered Successfully', 'Feel free to explore', 'success')
    props.history.push("/dashboard")
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (password === rePassword) {
      register(name, email, password, onSuccess)
    }
  }

  return (
    <div>
      <Header route={props.history.location.pathname}/>
      <div className="centre-container">
        <form className="auth-form" onSubmit={onSubmit}>
          <h3 className="component">Register</h3>
          <input 
            className="component"
            type="text" 
            placeholder="Full Name" 
            onChange={(e) => setName(e.target.value)} 
          />
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
          <input 
            className="component"
            type="password" 
            placeholder="Confirm Password" 
            onChange={(e) => setRePassword(e.target.value)} 
          />
          <button className="component">Register</button>
          <p className="component">Already a user? 
            <Link to="/">Login</Link> 
          </p>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage