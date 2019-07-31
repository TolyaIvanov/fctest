import axios from 'axios';

import {
    BASE_PATH
} from "../../constants/defaultConstants";

import {
    pushComment
} from "./actionCreator";

export const addComment = (text, id) => dispatch => {
    let data = {
        author_id: 1,
        body: text,
        article_id: id
    };

    axios.post(`${BASE_PATH}comments/add`, data)
        .then(res => {
            dispatch(pushComment(res.data.comment))
        })
        .catch(err => console.log(err));
};
