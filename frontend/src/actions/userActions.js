import Axios from "axios"

const register = (name, email, password, diary, callback) => {
  try {
    const response = Axios.post("/user/register", { name, email, password, diary })
    response.then(result => {
      callback(undefined, result)
    })
  } catch(err) {
    callback(err, undefined)
  }
}

const login = (email, password, callback) => {
  try{
    const response = Axios.post("/user/login", { email, password })
    response.then(result => {
      console.log("Register response:", result.data)
      callback(undefined, result.data)
    })
    console.log("Login response:", response)
  } catch (err) {
    callback(err, undefined)
  }
  
}

export { login, register }