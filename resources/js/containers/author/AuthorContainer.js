import React, {Component} from 'react';
import {connect} from 'react-redux';

import Author from "../../components/author/Author";

import {
    getAuthor
} from "../../actions/author/dataRequest";

class AuthorContainer extends Component {
    componentDidMount() {
        this.props.getAuthor(this.props.match.params.id);
        console.log(this.props);
    }

    render() {
        return (
            <Author>

            </Author>
        );
    }
}

const mapStateToProps = (state) => ({
    data: state.authorData
});

const mapDispatchToProps = (dispatch) => ({
    getAuthor: (id) => dispatch(getAuthor(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthorContainer);
