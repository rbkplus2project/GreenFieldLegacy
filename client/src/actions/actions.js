// Creates Redux functions that edit the Redux variables to be used by any React||Redux component

export const showMenu = (z) => {
    return {
        type: 'SHOW_MENU',
        showMenu: z
    }
}
export const setUser = (z) => {
    return {
        type: 'USER_INFO',
        user: z
    }
}

