// This is the origin application code

import React from "react"
import ReactDOM from "react-dom"
import "normalize.css/normalize.css"
import "./styles/style.scss"
import DiaryRouter from "./routes/router"
import { Provider } from "react-redux"
import getStore from "./redux-store/store"

const store = getStore()

class DiaryApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <DiaryRouter />
      </Provider>
    )
  }
}

ReactDOM.render(<DiaryApp />, document.getElementById("root"))