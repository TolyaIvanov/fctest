import axios from 'axios'

import {
    getTopArticles,
    getTopAuthors,
    getTopComments
} from "./actionCreator";

import {
    BASE_PATH
} from "../../constants/defaultConstants";

export const requestTopArticles = () => dispatch => {
    axios.get(`${BASE_PATH}get/top/articles`)
        .then(res => dispatch(getTopArticles(res)))
        .catch(err => console.log(err))
};

export const requestTopAuthors = () => dispatch => {
    axios.get(`${BASE_PATH}get/top/users`)
        .then(res => dispatch(getTopAuthors(res)))
        .catch(err => console.log(err))
};

export const requestTopComments = () => dispatch => {
    axios.get(`${BASE_PATH}get/top/comments`)
        .then(res => dispatch(getTopComments(res)))
        .catch(err => console.log(err))
};
