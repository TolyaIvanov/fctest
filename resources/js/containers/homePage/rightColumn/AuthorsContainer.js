import React, {Component} from 'react';
import {connect} from 'react-redux';
import Authors from "../../../components/homePage/rightColumn/Authors";

class AuthorsContainer extends Component {
    render() {
        return (
            <Authors

            >

            </Authors>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthorsContainer);
