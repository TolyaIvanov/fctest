import {
    GET_TOP_ARTICLES,
    GET_TOP_AUTHORS,
    GET_TOP_COMMENTS,
    GET_LAST_POSTS
} from "../../constants/defaultConstants";

export const getTopArticles = data => ({
    type: GET_TOP_ARTICLES,
    data
});

export const getTopAuthors = data => ({
    type: GET_TOP_AUTHORS,
    data
});

export const getTopComments = data => ({
    type: GET_TOP_COMMENTS,
    data
});

export const getLastPosts = (data, load_param) => ({
    type: GET_LAST_POSTS,
    data,
    load_param
});
