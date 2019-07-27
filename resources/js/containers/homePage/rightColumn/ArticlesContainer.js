import React, {Component} from 'react';
import {connect} from 'react-redux';
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
                <div
                    key={article.id}
                    className={'article-small'}
                >
                    <p className={'title'}>{article.title} - {article.author}</p>
                    <p className={'text'}>{article.text.split(' ').slice(0, 10).join(' ')}...</p>
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
