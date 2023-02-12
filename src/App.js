import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Offline, Online } from 'react-detect-offline';
import Homepage from './components/main-page/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorPage from './components/error-page/404_page';
import NetworkError from './components/error-page/NetworkErrorPage';
import './scss/utility.scss';

const App = () => {
	return (
		<>
			<Online>
				<>
					<Router>
						<Switch>
							<Route exact path="/" component={Homepage} />
							<Route component={ErrorPage} />
						</Switch>
					</Router>
				</>
			</Online>

			<Offline>
				<>
					<NetworkError />
				</>
			</Offline>
		</>
	);
};

export default App;
