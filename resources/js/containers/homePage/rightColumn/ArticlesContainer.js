import React, {Component} from 'react';
import {connect} from 'react-redux';
import Articles from "../../../components/homePage/rightColumn/Articles";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

class ArticlesContainer extends Component {
    render() {
        return (
            <Articles

            >

            </Articles>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticlesContainer);
