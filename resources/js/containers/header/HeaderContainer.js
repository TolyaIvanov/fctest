import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from './../../components/header/Header'


class HeaderContainer extends Component {
    render() {
        return (
            <Header

            >
            </Header>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
