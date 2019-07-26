import React, {Component, Fragment, lazy} from 'react';
import {connect} from 'react-redux';
import Error from "./Error";
import {Route, Switch} from "react-router-dom"

const HomePage = lazy(() => import('./components/homePage/HomePage'));

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={'/'} component={HomePage}/>

                <Route component={Error}/>
            </Switch>
        );
    }
}

const mapStateToProps = (state) => ({});


export default connect(mapStateToProps, null)(Routes);
