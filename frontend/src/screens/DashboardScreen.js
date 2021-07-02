import React, { useState } from "react"
import { connect } from "react-redux"
import Page from "../components/Page"
import { Link } from "react-router-dom"

const Dashboard = (props) => {
  const [count, setCount] = useState(1)
  console.log(props.diary)

  return (
    <div>
      <h3>Diary Pages</h3>
      <Link to="/compose/id" >
        <button>Add today's page</button>
      </Link>
      <div>
        {
          props.diary.map((page, index) => (
            <Page key={index + 1} serial={count} date={page.createdAt} />
          ))
        }
        <button>view more pages</button>
      </div>
    </div>
  )
}

const mapStateToProps = (store) => ({
  diary: store.diary,
  user: store.user
})

const DashboardPage = connect(mapStateToProps)(Dashboard)

export default DashboardPage