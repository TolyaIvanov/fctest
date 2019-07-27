import React, {Component} from 'react';
import {connect} from 'react-redux';
import Comments from "../../../components/homePage/rightColumn/Comments";

import {
    requestTopComments
} from "../../../actions/homePahe/dataRequest";

class CommentsContainer extends Component {
    componentDidMount() {
        this.props.getComments();
    }

    render() {
        return (
            <Comments

            >
                {this.renderCommentsList(this.props.lastComments)}
            </Comments>
        );
    }

    renderCommentsList = (comments) => {
        return comments.map(comment => (
                <div
                    key={comment.id}
                    className={'comment-small'}
                >
                    <p className={'text'}>{comment.text}</p>
                </div>
            )
        );
    };
}

const mapStateToProps = (state) => ({
    lastComments: state.homePageData.topComments,
});

const mapDispatchToProps = (dispatch) => ({
    getComments: () => dispatch(requestTopComments()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentsContainer);
