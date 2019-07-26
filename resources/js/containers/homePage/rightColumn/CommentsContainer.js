import React, {Component} from 'react';
import {connect} from 'react-redux';
import Comments from "../../../components/homePage/rightColumn/Comments";

class CommentsContainer extends Component {
    render() {
        return (
            <Comments

            >

            </Comments>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentsContainer);
