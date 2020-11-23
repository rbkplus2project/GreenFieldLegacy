// Creates Redux functions that edit the Redux variables to be used by any React||Redux component

export const showMenu = (z) => {
    return {
        type: 'SHOW_MENU',
        showMenu: z
    }
}
export const showSearch = (z) => {
    return {
        type: 'SHOW_SEARCH',
        showSearch: z
    }
}

