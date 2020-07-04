export const fetchUsersRequest = () => {
    return {
        type: 'FETCH_USERS_REQUEST'
    }
}
export const fetchUsersSuccess = (characters) => {
    return {
        type: 'FETCH_USERS_SUCCESS',
        data: characters
    }
}
export const fetchUsersFailure = (error) => {
    return {
        type: 'FETCH_USERS_FAILURE',
        data: error
    }
}
