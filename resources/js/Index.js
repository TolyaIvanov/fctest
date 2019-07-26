import React, {Component, Suspense} from 'react'
import ReactDOM from 'react-dom'
import {Router} from "react-router-dom"
import {Provider} from 'react-redux'
import history from './history/history'
import store from './store/store'


import Routes from './Routes'
import HeaderContainer from './containers/header/HeaderContainer'

class Index extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={history}>
					<HeaderContainer/>
					<Suspense fallback={null}>
						<Routes/>
					</Suspense>
				</Router>
			</Provider>
		);
	}
}

if (document.getElementById('root')) {
	ReactDOM.render(<Index/>, document.getElementById('root'));
}
