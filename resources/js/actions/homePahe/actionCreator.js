import {
    GET_TOP_ARTICLES,
    GET_TOP_AUTHORS,
    GET_TOP_COMMENTS
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
