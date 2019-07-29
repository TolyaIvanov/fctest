import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import Articles from "../../../components/homePage/rightColumn/Articles";

import {
    requestTopArticles
} from "../../../actions/homePahe/dataRequest";

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
                <Link
                    to={`/article/${article.id}`}
                    key={article.id}
                    className={'article-small'}
                >
                    <p className={'title'}>{article.title} - <Link className={'author'} to={`/author/${article.author.id}`}>{article.author.name}({article.author.age} years)</Link></p>
                    <p className={'text'}>{article.body.split(' ').slice(0, 10).join(' ')}...</p>
                </Link>
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
