// Diary Reducer

const diaryDefault = []

const diaryReducer = (state = diaryDefault, action) => {
  switch(action.type) {
    case "LOAD":
      return [
        ...state,
        ...action.diary
      ]
    case "ADD":
      return [
        ...state,
        action.page
      ]
    case "EDIT":
      return state.map(page => {
        if (page.date === action.date) {
          return {
            ...page,
            ...action.page
          }
        } else {
          return page
        }
      })
    case "REMOVE":
      return state.filter(page => (page.date !== action.date))
    case "RESET":
      return []
    default:
      return state
  }
}

export default diaryReducer