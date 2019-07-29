import {
    GET_ARTICLE
} from "../../constants/defaultConstants";

const initialState = {};

export const articleData = (state = initialState, {type, data}) => {
    switch (type) {
        case GET_ARTICLE :
            return {
                ...state,
                data
            };
        default:
            return state;
    }
};
