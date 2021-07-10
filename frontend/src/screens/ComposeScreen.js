import React, { useState, useEffect } from "react"
import moment from "moment"
import { useSelector, useDispatch } from "react-redux"
import Cookie from "js-cookie"
import { addPage, editPage } from "../actions/diaryActions"
import Header from "../components/Header"
import { add, edit } from "../redux-store/actions"

const ComposePage = (props) => {
  const [content, setContent] = useState("")
  const diary = useSelector((state) => state.diary)
  const date = moment().toISOString()
  const token = Cookie.get("token") 
  const url = props.match.params.id
  const dispatch = useDispatch()

  if (!token) {
    props.history.push("/")
    return <div></div>
  }

  useEffect(() => {
    if (url !== "id") {
      setContent(diary.filter((page) => page.date === url)[0].content)
    }
  }, [])

  const onSave = (e) => {
    e.preventDefault()
    if (url !== "id") {
      editPage(token, url, content)
      dispatch(edit({ date: url, content }))
    } else {
      addPage(token, date, content)
      dispatch(add({ date, content }))
    }
    props.history.push("/dashboard")
  }

  return (
    <div>
      <Header route={props.history.location.pathname}/>
      <div className="container">
        <h3>Compose Today</h3>
        <form className="compose" onSubmit={onSave}>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} rows="30"></textarea>
          <button className="save" >Save</button>
        </form>
      </div>
    </div>
  )
}

export default ComposePage