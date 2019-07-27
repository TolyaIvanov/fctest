import {
    GET_TOP_ARTICLES,
    GET_TOP_COMMENTS,
    GET_TOP_AUTHORS
} from "../../constants/defaultConstants";

const initialState = {
    topAuthors: [],
    topComments: [],
    topArticles: []
};

export const dataRequest = (state = initialState, {type, data}) => {
    switch (type) {
        case GET_TOP_AUTHORS:
            return {
                topAuthors: data
            };
        case GET_TOP_COMMENTS:
            return {
                lastComments: data
            };
        case GET_TOP_ARTICLES:
            return {
                topArticles: data
            };
        default:
            return state;
    }
};
