import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

import Author from "../../components/author/Author";

import {
    getAuthor
} from "../../actions/author/dataRequest";

import {
    articlePage
} from "../../actions/article/actionCreator";

class AuthorContainer extends Component {
    componentDidMount() {
        this.props.getAuthor(this.props.match.params.id);
    }

    render() {
        return (
            <Author
                name={this.props.data.name}
                age={this.props.data.age}
            >
                {
                    this.renderArticles(this.props.data.articles)
                }
                {
                    this.renderPages(this.chunk(this.props.data.articles, 5))
                }
            </Author>
        );
    }

    renderArticles = articles => {
        let partKey = 0;

        return this.chunk(articles, 5).map(chunkedArticles => {
            let part = chunkedArticles.map(article => (
                <div key={article.id} className={'author-article'}>
                    <Link
                        to={`/article/${article.id}`}
                        className={'article-small'}
                    >
                        <p className={'title'}>title - {article.title}</p>
                        <p className={'text'}>{article.body.split(' ').slice(0, 10).join(' ')}...</p>
                    </Link>
                </div>
            ));
            partKey++;

            return (
                <div
                    key={partKey}
                    className={partKey === this.props.page ? 'author-article-part active' : 'author-article-part'}
                >
                    {part}
                </div>
            );
        })
    };

    renderPages = pages => {
        let pageNumber = 0;

        return pages.map(page => {
            pageNumber++;

            return (
                <div
                    key={pageNumber}
                    className={pageNumber === this.props.page ? 'page-number active' : 'page-number'}
                    onClick={(event) => this.props.changeArticlePage(parseInt(event.target.innerHTML, 10))}
                >
                    {pageNumber}
                </div>
            )
        });
    };

    chunk = (array, size) => {
        const chunked_arr = [];
        let index = 0;

        while (index < array.length) {
            chunked_arr.push(array.slice(index, size + index));
            index += size;
        }

        return chunked_arr;
    }
}

const
    mapStateToProps = (state) => ({
        data: state.authorData,
        page: state.articlePage.page
    });

const
    mapDispatchToProps = (dispatch) => ({
        getAuthor: (id) => dispatch(getAuthor(id)),
        changeArticlePage: (number) => dispatch(articlePage(number))
    });

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthorContainer);

