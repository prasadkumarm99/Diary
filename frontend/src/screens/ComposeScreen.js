import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { add, edit } from "../redux-store/actions"
import moment from "moment"

const Compose = (props) => {
    const [content, setContent] = useState("")
    const [createdAt, setCreatedAt] = useState(moment().toISOString())
    const date = props.match.params.id
    console.log(props)

    useEffect(() => {
      if (date !== "id") {
        setCreatedAt(date)
        setContent(props.diary.filter((page) => page.createdAt === date)[0].content)
      }
    }, [])

    const onSave = (e) => {
      e.preventDefault()
      if (date !== "id") {
        props.dispatch(edit({ createdAt, content}))
      } else {
        props.dispatch(add({ createdAt, content}))
      }
      props.history.push("/dashboard")
    }
    return (
      <div>
        <h3>Compose Today</h3>
        <form onSubmit={onSave}>
          <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
          <button>Save</button>
        </form>
      </div>
    )
}

const mapStateToProps = (store) => ({
  diary: store.diary
})

const ComposePage = connect(mapStateToProps)(Compose)

export default ComposePage