import {
    GET_AUTHOR
} from "../../constants/defaultConstants";

const initialState = {
    age: '',
    name: '',
    articles: []
};

export const authorData = (state = initialState, {type, data}) => {
    switch (type) {
        case GET_AUTHOR:
            return {
                ...state,
                ...data,
            };
        default :
            return state;
    }
};


