import {
    GET_TOP_ARTICLES,
    GET_TOP_COMMENTS,
    GET_TOP_AUTHORS
} from "../../constants/defaultConstants";

const initialState = {
    topAuthors: [],
    lastComments: [],
    topArticles: []
};

export const dataRequest = (state = initialState, {type, data}) => {
    switch (type) {
        case GET_TOP_AUTHORS:
            return {
                ...state,
                topAuthors: data
            };
        case GET_TOP_COMMENTS:
            return {
                ...state,
                lastComments: data
            };
        case GET_TOP_ARTICLES:
            return {
                ...state,
                topArticles: data
            };
        default:
            return state;
    }
};
