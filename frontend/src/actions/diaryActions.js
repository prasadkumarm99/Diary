import Axios from "axios"

// Reading pages
const getDiary = (token, callback) => {
  try {
    const response = Axios.get("/diary/pages", {
      headers: {
        Authorization: "Bearer " + token
      }
    })
    response.then((result) => {
      callback(undefined, result.data)
    })
  } catch (e) {
    callback(e, undefined)
  }
}

// Get content by date
const getContent = (token, date, callback) => {
  try {
    const response = Axios.get("/diary/content", { date }, {
      headers: {
        Authorization: "Bearer " + token
      }
    })
    response.then((result) => {
      callback(undefined, result.data)
    })
  } catch (e) {
    callback(e, undefined)
  }
}

// Add page: { date, content }
const addPage = (token, date, content) => {
  try {
    const response = Axios.post("/diary/add", { content, date }, {
      headers: {
        Authorization: "Bearer " + token
      }
    })
    // response.then((result) => {
    //   console.log(result.data)
    // })
  } catch (e) {
    console.log("Unauthorized")
  }
}

// Edit page: date
const editPage = (token, date, content) => {
  try {
    const response = Axios.patch(`/diary/edit/${date}`, { content }, {
      headers: {
        Authorization: "Bearer " + token
      }
    })
    // response.then((result) => {
    //   console.log(result.data)
    // })
  } catch (e) {
    console.log("Unauthorized")
  }
}

// Remove page: date
const removePage = (token, date) => {
  try {
    const response = Axios.delete(`/diary/remove/${date}`, {
      headers: {
        Authorization: "Bearer " + token
      }
    })
    // response.then((result) => {
    //   console.log(result.data)
    // })
  } catch (e) {
    console.log("Unauthorized")
  }
}

export { getDiary, getContent, addPage, editPage, removePage}