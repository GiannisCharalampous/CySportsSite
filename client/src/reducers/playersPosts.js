import {
    FETCH_ALL_P_POSTS,
    CREATE_P_POST,
    UPDATE_P_POST,
    DELETE_P_POST,
    FETCH_P_POST,
    START_P_LOADING,
    END_P_LOADING, FETCH_BY_POSITION,
    FETCH_BY_POSITION_CLICK,
} from '../constants/actionTypes';

export default (state = { isPLoading: true, playerPosts: [] }, action) => {
    switch (action.type) {
        case START_P_LOADING:
            return { ...state, isPLoading: true };
        case END_P_LOADING:
            return { ...state, isPLoading: false };
        case FETCH_ALL_P_POSTS:
            return {
                ...state,
                playerPosts: action.payload.data,
            };
        case FETCH_P_POST:
            return { ...state, playerPost: action.payload.playerPost };
        case FETCH_BY_POSITION_CLICK:
        case FETCH_BY_POSITION:
            return {...state, playerPosts: action.payload.data };
        case CREATE_P_POST:
            return { ...state, playerPosts: [...state.playerPosts, action.payload] };
        case UPDATE_P_POST:
            return { ...state, playerPosts: state.playerPosts.map((playerPost) => (playerPost._id === action.payload._id ? action.payload : playerPost)) };
        case DELETE_P_POST:
            return { ...state, playerPosts: state.playerPosts.filter((playerPost) => playerPost._id !== action.payload) };
        default:
            return state;
    }
};