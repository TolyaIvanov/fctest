import axios from 'axios'

import {
    getTopArticles,
    getTopAuthors,
    getTopComments,
    getLastPosts
} from "./actionCreator";

import {
    BASE_PATH
} from "../../constants/defaultConstants";
import store from "../../store/store";

export const requestTopArticles = () => dispatch => {
    axios.get(`${BASE_PATH}get/top/articles`)
        .then(res => dispatch(getTopArticles(res.data.articles)))
        .catch(err => console.log(err))
};

export const requestTopAuthors = () => dispatch => {
    axios.get(`${BASE_PATH}get/top/users`)
        .then(res => dispatch(getTopAuthors(res.data.users)))
        .catch(err => console.log(err))
};

export const requestTopComments = () => dispatch => {
    axios.get(`${BASE_PATH}get/top/comments`)
        .then(res => dispatch(getTopComments(res.data.comments)))
        .catch(err => console.log(err))
};

export const loadLastPosts = (load_param) => dispatch => {
    axios.get(`${BASE_PATH}get/articles?load_param=${load_param}`)
        .then(res => {
            dispatch(getLastPosts(res.data, load_param))
        })
        .catch(err => console.log(err))
};
