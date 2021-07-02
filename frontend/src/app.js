import React from "react"
import ReactDOM from "react-dom"
import "normalize.css/normalize.css"
import "./styles/style.scss"
import DiaryRouter from "./routes/router"
import { Provider } from "react-redux"
import getStore from "./redux-store/store"

const store = getStore()

const DiaryApp = () => (
  <Provider store={store}>
    <DiaryRouter />
  </Provider>
)

store.subscribe(() => {
  console.log("Upadated")
})

ReactDOM.render(<DiaryApp />, document.getElementById("root"))