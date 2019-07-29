import {combineReducers} from "redux";

import {
    dataRequest
} from "./homePage/dataRequest";

import {
    articleData
} from "./article/articleData";

import {
    authorData
} from "./author/authorData";

export default combineReducers({
    homePageData: dataRequest,
    articleData,
    authorData
});
