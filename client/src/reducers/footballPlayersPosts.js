import {
    FETCH_ALL_P_POSTS,
    CREATE_P_POST,
    UPDATE_P_POST,
    DELETE_P_POST,
    FETCH_P_POST,
    START_P_LOADING,
    END_P_LOADING,
    FETCH_BY_POSITION,
    FETCH_BY_POSITION_CLICK,
} from '../constants/actionTypes';

export default (state = { isPLoading: true, footballPlayerPosts: [] }, action) => {
    switch (action.type) {
        case START_P_LOADING:
            return { ...state, isPLoading: true };
        case END_P_LOADING:
            return { ...state, isPLoading: false };
        case FETCH_ALL_P_POSTS:
            return {
                ...state,
                footballPlayerPosts: action.payload.data,
            };
        case FETCH_P_POST:
            return { ...state, footballPlayerPost: action.payload.footballPlayerPost };
        case FETCH_BY_POSITION_CLICK:
        case FETCH_BY_POSITION:
            return {...state, footballPlayerPosts: action.payload.data };
        case CREATE_P_POST:
            return { ...state, footballPlayerPosts: [...state.footballPlayerPosts, action.payload] };
        case UPDATE_P_POST:
            return { ...state, footballPlayerPosts: state.footballPlayerPosts.map((footballPlayerPost) => (footballPlayerPost._id === action.payload._id ? action.payload : footballPlayerPost)) };
        case DELETE_P_POST:
            return { ...state, footballPlayerPosts: state.footballPlayerPosts.filter((footballPlayerPost) => footballPlayerPost._id !== action.payload) };
        default:
            return state;
    }
};