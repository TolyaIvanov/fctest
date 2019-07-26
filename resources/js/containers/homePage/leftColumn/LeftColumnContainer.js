import React, {Component} from 'react';
import {connect} from 'react-redux';
import LeftColumn from "../../../components/homePage/leftColumn/LeftColumn";

class LeftColumnContainer extends Component {
    render() {
        return (
            <LeftColumn

            >

            </LeftColumn>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LeftColumnContainer);
