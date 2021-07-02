import React from "react"
import moment from "moment"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { remove } from "../redux-store/actions"

const Page = (props) => {
  const onRemove = () => {
    props.dispatch(remove({ createdAt: props.date }))
  }
  return (
  <div>
    <h4>{`${props.serial}. ${moment(props.date).format("MMMM Do YYYY")}`}</h4>
    <span>
      <Link to={`/compose/${props.date}`}><button>Edit</button></Link>
      <button onClick={onRemove}>X</button>
    </span>
  </div>
)}

export default connect()(Page)