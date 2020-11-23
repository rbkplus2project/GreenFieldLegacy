// Creates the Redux Store
const initState = {
    test: [
        { username: "ahamd", password: "123" }
    ],
    showMenu: 0,
      
}

// Edits the Redux variables
const rootReducer = (state = initState, action) => {
    if (action.type === "SHOW_MENU") {
        return {
            ...state,
            showMenu: action.showMenu
        }
    }
    return state;
}

export default rootReducer;
