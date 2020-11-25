// Creates Redux functions that edit the Redux variables to be used by any React||Redux component

export const store = (z) => {
    return {
        type: 'STORE-USER',
        user: z
    }
}

