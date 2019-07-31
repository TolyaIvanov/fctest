import {
    GET_ARTICLE,
    PUSH_COMMENT
} from "../../constants/defaultConstants";

const initialState = {
    author: {
        id: '',
        age: '',
        name: ''
    },
    id: '',
    body: '',
    title: '',
    updated_at: '',
    comments: [],
};

export const articleData = (state = initialState, {type, data}) => {
    switch (type) {
        case GET_ARTICLE :
            return {
                ...state,
                ...data
            };
        case PUSH_COMMENT:
            return {
                ...state,
                comments: state.comments.concat(data)
            };
        default:
            return state;
    }
};
