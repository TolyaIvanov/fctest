import axios from 'axios'

import {
    authorData,
} from "./actionCreator";

import {
    BASE_PATH
} from "../../constants/defaultConstants";

export const getAuthor = (id) => dispatch => {
    axios.get(`${BASE_PATH}get/author/${id}`)
        .then(res => dispatch(authorData(res.data.author)))
        .catch(err => console.log(err))
};

