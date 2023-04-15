import { GET_RESPONSE, SET_RESPONSE, SET_LOADING } from "./const";

export const setLoading = () => ({
    type: SET_LOADING
});

export const getResponse = (query) => ({
    type: GET_RESPONSE,
    query
});

export const setResponse = (payload) => ({
    type: SET_RESPONSE,
    payload
});
