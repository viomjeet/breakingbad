import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
    loading: false,
    characters: [],
    error: '',
    limit: 20
}
const charactor = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_USERS_REQUEST":
            return {
                ...state,
                loading: true,
            }
        case "FETCH_USERS_SUCCESS":
            return {
                ...state,
                loading: false,
                characters: action.data,
                error: ''
            }
        case "FETCH_USERS_FAILURE":
            return {
                ...state,
                loading: false,
                characters: [],
                error: action.error
            }
        default: return state

    }
}


const store = createStore(charactor, applyMiddleware(thunk))

export default store;