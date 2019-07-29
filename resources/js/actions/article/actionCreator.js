import {
    GET_ARTICLE
} from "../../constants/defaultConstants";

export const articleData = (data) => ({
    type: GET_ARTICLE,
    data
});
