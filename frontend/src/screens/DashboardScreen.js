import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import moment from "moment"
import Page from "../components/Page"
import Cookie from "js-cookie"
import { getDiary } from "../actions/diaryActions"
import Header from "../components/Header"
import { load } from "../redux-store/actions"

const DashboardPage = (props) => {
  const arrange = (book) => book.sort((page1, page2) => moment(page2.date) - moment(page1.date))

  const token = Cookie.get("token")
  let diary = useSelector((state) => state.diary)
  diary = arrange(diary)
  const [isTodayDone, setIsTodayDone] = useState(false)
  const dispatch = useDispatch()

  if (!token) {
    props.history.push("/")
    return <div></div>
  }

  useEffect(() => {
    if (diary.length == 0) {
      getDiary(token, (err, pages) => {
        if (err) return console.log(err)
        console.log(pages)
        if (pages.length >= 2) {
          pages = arrange(pages)
          console.log(pages)
        }
        dispatch(load(pages))
      })
      setIsTodayDone(false)
    }
    const match = diary.find((page) => page.date.slice(0, 10) === moment().toISOString().slice(0, 10))
    if (match) {
      setIsTodayDone(true)
    }
  }, [diary])

  return (
    <div>
      <Header route={props.history.location.pathname}/>
      <div className="container">
        <h3>Diary Pages</h3>
        <Link to="/compose/id">
          <button className="add-page" disabled={isTodayDone}>Add today's page</button>
        </Link>
        <div>
          {
            diary.map((page, index) => {
              return <Page key={index + 1} serial={index + 1} date={page.date} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default DashboardPage