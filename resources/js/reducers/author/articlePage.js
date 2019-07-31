import {
    CHANGE_ARTICLE_PAGE
} from "../../constants/defaultConstants";

const initialState = {
    page: 1,
};

export const articlePage = (state = initialState, {type, page}) => {
    switch (type) {
        case CHANGE_ARTICLE_PAGE:
            return {
                ...state,
                page
            };
        default :
            return state
    }
};
