// Diary Reducer

const diaryDefault = []

const diaryReducer = (state = diaryDefault, action) => {
  switch(action.type) {
    case "ADD":
      return [
        ...state,
        action.page
      ]
    case "EDIT":
      return state.map(page => {
        if (page.createdAt === action.createdAt) {
          return {
            ...page,
            ...action.page
          }
        }
      })
    case "REMOVE":
      return state.filter(page => (page.createdAt !== action.createdAt))
    default:
      return state
  }
}

export default diaryReducer