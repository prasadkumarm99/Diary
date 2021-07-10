import Axios from "axios"

const register = (name, email, password, callback) => {
  try {
    const response = Axios.post("/user/register", { name, email, password })
    response.then(result => {
      callback(undefined, result.data)
    })
  } catch(err) {
    callback(err, undefined)
  }
}

const login = (email, password, callback) => {
  const response = Axios.post("/user/login", { email, password })
  response.then(result => {
    callback(undefined, result.data)
  })
}

const logout = (token) => {
  try {
    Axios.delete("/user/logout", {
      headers: {
        Authorization: "Bearer " + token
      }
    })
  } catch(e) {}
}

export { register, login, logout }