import React, {Component} from 'react';
import {connect} from 'react-redux';

import Article from "../../components/article/Article";

import {
    getArticle
} from "../../actions/article/dataRequest";

class ArticleContainer extends Component {
    componentDidMount() {
        this.props.getArticle(this.props.match.params.id);
        console.log(this.props)
    }

    render() {
        return (
            <Article

            >

            </Article>
        );
    }
}

const mapStateToProps = (state) => ({
    data: state.articleData
});

const mapDispatchToProps = (dispatch) => ({
    getArticle: (id) => dispatch(getArticle(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticleContainer);
