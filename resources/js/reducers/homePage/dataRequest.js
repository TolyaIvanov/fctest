import {
    GET_TOP_ARTICLES,
    GET_TOP_COMMENTS,
    GET_TOP_AUTHORS,
    GET_LAST_POSTS
} from "../../constants/defaultConstants";

const initialState = {
    topAuthors: [],
    lastComments: [],
    topArticles: [],
    posts: [],
    load_param: 0
};

export const dataRequest = (state = initialState, {type, data, load_param}) => {
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
        case GET_LAST_POSTS:
            return {
                ...state,
                posts: [...new Set([...data, ...state.posts])],
                load_param: load_param++,
            };
        default:
            return state;
    }
};
