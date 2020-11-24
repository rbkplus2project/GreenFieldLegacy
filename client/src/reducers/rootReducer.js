// Creates the Redux Store
const initState = {
    test: [
        { username: "ahamd", password: "123" }
    ],
    showMenu: 0,
    user: {}
      
}

// Edits the Redux variables
const rootReducer = (state = initState, action) => {
    if (action.type === "USER_INFO") {
        return  {
            ...state,
            user: action.user
        }
    }
    return state;
}

export default rootReducer;
