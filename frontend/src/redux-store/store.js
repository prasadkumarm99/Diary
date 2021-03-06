import { createStore, combineReducers } from "redux"
import userReducer from "../redux-store/userReducer"
import diaryReducer from "../redux-store/diaryReducer"

const getStore = () => {
  return createStore(
    combineReducers({
      user: userReducer,
      diary: diaryReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}

export default getStore

/*

{
  user: {
    _id: "",
    name: "",
    email: "",
  }
  diary: [
    {
      createdAt: "date",
      content: ""
    },
    ...
  ]
}

*/