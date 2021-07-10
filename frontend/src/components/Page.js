import React from "react"
import moment from "moment"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import Cookie from "js-cookie"
import { remove } from "../redux-store/actions"
import { removePage } from "../actions/diaryActions"

const Page = (props) => {
  const dispatch = useDispatch()
  const token = Cookie.get("token")

  const onRemove = () => {
    removePage(token, props.date)
    dispatch(remove({ date: props.date }))
  }

  return (
  <div className="page">
    <Link className="link" to={`/compose/${props.date}`}>
      <div>
        <h4>{`${props.serial}. ${moment(props.date).format("MMMM Do YYYY")}`}</h4>
      </div>
    </Link>
    <span>
        <button className="remove" onClick={onRemove}>X</button>
    </span>
  </div>
)}

export default Page