// LOGIN
const loginUser = ({ id, name, email, isLogged }) => ({
  type: "LOGIN",
  user: {
    id,
    name,
    email,
    isLogged
  }
})

// LOGOUT
const logoutUser = () => ({
  type: "LOGOUT"
})

// ADD
const add = ({ createdAt, content }) => ({
  type: "ADD",
  page: {
    createdAt,
    content
  }
})

// EDIT
const edit = ({ createdAt, content }) => ({
  type: "EDIT",
  createdAt,
  page: {
    content
  }
})

// REMOVE
const remove = ({ createdAt }) => ({
  type: "REMOVE",
  createdAt
})

export { loginUser, logoutUser, add, edit, remove }