import axios from 'axios'

import {
    articleData,
} from "./actionCreator";

import {
    BASE_PATH
} from "../../constants/defaultConstants";

export const getArticle = (id) => dispatch => {
    axios.get(`${BASE_PATH}article/${id}`)
        .then(res => dispatch(articleData(res.data)))
        .catch(err => console.log(err))
};

