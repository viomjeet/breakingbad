import { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } from '../action/action'
const limit = 52;
const charApi = "https://breakingbadapi.com/api/characters?limit=";
const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest())
        fetch(charApi + limit).then(response => response.json())
            .then(response => {
                const usersData = response
                dispatch(fetchUsersSuccess(usersData))
            })
            .catch(error => {
                dispatch(fetchUsersFailure(error))
            })
    }
}

export default fetchUsers;