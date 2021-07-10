// User Reducer

const userDefault = {
  _id: "",
  name: "",
  email: ""
}

const userReducer = (state = userDefault, action) => {
  switch(action.type) {
    case "LOGIN":
      return {
        ...state,
        ...action.user
      }
    case "LOGOUT":
      return {
        ...state,
        ...userDefault
      }
    default:
      return state
  }
}

export default userReducer