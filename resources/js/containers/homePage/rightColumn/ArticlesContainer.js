import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import Articles from "../../../components/homePage/rightColumn/Articles";

import {
    requestTopArticles
} from "../../../actions/homePage/dataRequest";

class ArticlesContainer extends Component {
    componentDidMount() {
        this.props.getArticles();
    }

    render() {
        return (
            <Articles

            >
                {this.renderArticleList(this.props.top)}
            </Articles>
        );
    }

    renderArticleList = (articles) => {
        return articles.map(article => (
                <div
                    key={article.id}
                    className={'article-wrapper'}
                >
                    <Link className={'author'}
                          to={`/author/${article.author.id}`}>{article.author.name}({article.author.age} years)</Link>
                    <Link
                        to={`/article/${article.id}`}
                        className={'article-small'}
                    >
                        <p className={'title'}>title - {article.title}</p>
                        <p className={'text'}>{article.body.split(' ').slice(0, 10).join(' ')}...</p>
                    </Link>
                </div>
            )
        );
    };
}

const mapStateToProps = (state) => ({
    top: state.homePageData.topArticles,
});

const mapDispatchToProps = (dispatch) => ({
    getArticles: () => dispatch(requestTopArticles())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticlesContainer);
