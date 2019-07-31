import {
    CHANGE_COMMENT_PAGE
} from "../../constants/defaultConstants";

const initialState = {
    page: 1,
};

export const commentPage = (state = initialState, {type, page}) => {
    switch (type) {
        case CHANGE_COMMENT_PAGE:
            return {
                ...state,
                page
            };
        default :
            return state
    }
};
