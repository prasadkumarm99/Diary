import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import Cookie from "js-cookie"
import { logout } from "../actions/userActions"
import { logoutUser } from "../redux-store/actions"

const Header = (props) => {
  const dispatch = useDispatch()
  const token = Cookie.get("token") 
  
  const onLogout = () => {
    dispatch(logoutUser())
    logout(token)
    Cookie.remove("token")
  }

  return (
    <div className="header">
      <div className="container">
        <div className="view">
          <Link to="/dashboard">
            <h1 className="title">Diary</h1>
            <span>
              <p className="subtitle">Have a good habbit</p>
            </span>
          </Link>
          {
            (props.route !== "/" && props.route !== "/register") ? 
            (
              <Link to="/"> 
                <button className="logout" onClick={onLogout}>
                  <b>Logout</b>
                </button>
              </Link>
            ) : ""
          }
        </div>
      </div>
    </div>
  )
}

export default Header