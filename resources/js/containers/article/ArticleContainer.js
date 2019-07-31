import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

import Article from "../../components/article/Article";

import {
    addComment
} from "../../actions/article/comments";

import {
    commentPage
} from "../../actions/article/actionCreator";

import {
    getArticle
} from "../../actions/article/dataRequest";

class ArticleContainer extends Component {
    componentDidMount() {
        this.props.getArticle(this.props.match.params.id);
    }

    render() {
        return (
            <Article
                author={this.props.data.author}
                articleId={this.props.data.id}
                title={this.props.data.title}
                body={this.props.data.body}
                addComment={this.props.addComment}
                postsLength={this.chunk(this.props.data.comments, 5).length}
            >
                {
                    this.renderCommentsList(this.props.data.comments)
                }
                {
                    this.renderPages(this.chunk(this.props.data.comments, 5))
                }
            </Article>
        );
    }

    renderCommentsList = (comments) => {
        let partKey = 0;

        return this.chunk(comments, 5).map(chunkedComments => {
            let part = chunkedComments.map(comment => (
                <div
                    key={comment.id}
                    className={'comment'}
                >
                    <p className={'comment-author'}>
                        <span>Автор - <Link to={`/author/${comment.author.id}`}>{comment.author.name}</Link></span>
                        <span className={'date'}>{comment.updated_at}</span>
                    </p>
                    <p className={'comment-body'}>
                        {comment.body}
                    </p>
                </div>
            ));

            partKey++;

            return (
                <div
                    key={partKey}
                    className={ partKey === this.props.page ? 'comments-part active' : 'comments-part'}
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
                    onClick={(event) => this.props.changeCommentPage(parseInt(event.target.innerHTML, 10))}
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

const mapStateToProps = (state) => ({
    data: state.articleData,
    page: state.commentPage.page
});

const mapDispatchToProps = (dispatch) => ({
    getArticle: (id) => dispatch(getArticle(id)),
    addComment: (text, id) => dispatch(addComment(text, id)),
    changeCommentPage: (number) => dispatch(commentPage(number))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticleContainer);
