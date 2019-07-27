import {combineReducers} from "redux";

import {
    dataRequest
} from "./homePage/dataRequest";

export default combineReducers({
    homePageData: dataRequest
});
