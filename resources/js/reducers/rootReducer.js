import {combineReducers} from "redux";

import {
    dataRequest
} from "./homePage/dataRequest";

import {
    articleData
} from "./article/articleData";

import {
    articlePage
} from "./author/articlePage";

import {
    commentPage
} from "./article/commentPage";

import {
    authorData
} from "./author/authorData";

export default combineReducers({
    homePageData: dataRequest,
    articleData,
    authorData,
    commentPage,
    articlePage
});
