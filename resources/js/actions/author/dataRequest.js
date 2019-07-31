import axios from 'axios'

import {
    authorData,
} from "./actionCreator";

import {
    BASE_PATH
} from "../../constants/defaultConstants";

export const getAuthor = (id) => dispatch => {
    axios.get(`${BASE_PATH}author/${id}`)
        .then(res => dispatch(authorData(res.data)))
        .catch(err => console.log(err))
};

