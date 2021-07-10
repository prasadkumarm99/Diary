// LOGIN
const loginUser = ({ _id, name, email }) => ({
  type: "LOGIN",
  user: {
    _id,
    name,
    email
  }
})

// LOGOUT
const logoutUser = () => ({
  type: "LOGOUT"
})

// LOAD
const load = (diary) => ({
  type: "LOAD",
  diary: diary.map((page) => ({
    date: page.date,
    content: page.content
  }))
})

// ADD
const add = ({ date, content }) => ({
  type: "ADD",
  page: {
    date,
    content
  }
})

// EDIT
const edit = ({ date, content }) => ({
  type: "EDIT",
  date,
  page: {
    content
  }
})

// REMOVE
const remove = ({ date }) => ({
  type: "REMOVE",
  date
})

export { loginUser, logoutUser, load, add, edit, remove }