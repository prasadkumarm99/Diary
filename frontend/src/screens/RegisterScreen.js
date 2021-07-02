import React, { useState } from "react"
import { register } from "../actions/userActions"
import { Link } from "react-router-dom"
import moment from "moment"
import Swal from 'sweetalert2'

const RegisterPage = (props) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rePassword, setRePassword] = useState("")
  const diary = [{
      createdAt: moment(),
      content: "Prasad"
    },{
      createdAt: moment(),
      content: "kumar"
    }
  ]

  const onSuccess = (err, user) => {
    if (err) return console.log("Error on registration", err)
    Swal.fire('Registered Successfully', 'Please Login', 'success')
    props.history.push("/")
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (password === rePassword) {
      register(name, email, password, diary, onSuccess)
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h3>Register</h3>
        <input 
          type="text" 
          placeholder="Full Name" 
          onChange={(e) => setName(e.target.value)} 
        />
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
        <input 
          type="password" 
          placeholder="Confirm Password" 
          onChange={(e) => setRePassword(e.target.value)} 
        />
        <button>Register</button>
        <p>Already a user? 
          <Link to="/">Login</Link> 
        </p>
      </form>
    </div>
  )
}

export default RegisterPage