import {
    CREATE_P_POST,
    DELETE_P_POST,
    END_P_LOADING,
    FETCH_ALL_P_POSTS,
    FETCH_BY_POSITION,
    FETCH_P_POST,
    START_P_LOADING,
    UPDATE_P_POST
} from "../constants/actionTypes";
import * as api from "../api/index";

export const getPlayerPost = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_P_LOADING });

        const { data } = await api.fetchPlayerPost(id);

        dispatch({ type: FETCH_P_POST, payload: { playerPost: data } });
    } catch (error) {
        console.log(error);
    }
};

export const createPlayersPost = (playerPost, history) => async (dispatch) => {
    try {
        dispatch({ type: START_P_LOADING });
        const { data } = await api.createPlayersPost(playerPost);

        dispatch({ type: CREATE_P_POST, payload: data });

        history.push(`/basketPlayers/${data._id}`);

    } catch (error) {
        console.log(error);
    }
};

export const updatePlayersPost = (id, playerPost) => async (dispatch) => {
    try {
        const { data } = await api.updatePlayersPost(id, playerPost);

        dispatch({ type: UPDATE_P_POST, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getPlayersPosts = () => async (dispatch) => {
    try {
        dispatch({ type: START_P_LOADING });
        const { data } = await api.fetchPlayersPosts();

        dispatch({ type: FETCH_ALL_P_POSTS, payload: { data } });
        dispatch({ type: END_P_LOADING });
    } catch (error) {
        console.log(error);
    }
};

export const deletePlayersPost = (id) => async (dispatch) => {
    try {
        await api.deletePlayersPost(id);

        dispatch({ type: DELETE_P_POST, payload: id });
    } catch (error) {
        console.log(error);
    }
};

export const getPlayerPostsByPosition = (position) => async (dispatch) => {
    try {
        dispatch({ type: START_P_LOADING });

        const { data: { data } } = await api.fetchPlayerPostsByPosition(position);
        dispatch({ type: FETCH_BY_POSITION, payload: { data } });
        dispatch({ type: END_P_LOADING });
    } catch (error) {
        console.log(error);
    }
};

