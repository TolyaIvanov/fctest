import {
    GET_ARTICLE,
    CHANGE_COMMENT_PAGE,
    PUSH_COMMENT,
    CHANGE_ARTICLE_PAGE
} from "../../constants/defaultConstants";

export const articleData = (data) => ({
    type: GET_ARTICLE,
    data
});

export const articlePage = number => ({
    type: CHANGE_ARTICLE_PAGE,
    page: number
});

export const commentPage = number => ({
    type: CHANGE_COMMENT_PAGE,
    page: number
});

export const pushComment = comment => ({
    type: PUSH_COMMENT,
    data: comment
});
