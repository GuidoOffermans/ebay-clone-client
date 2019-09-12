import React from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import AdvertisementList from './components/AdvertisementList/AdvertisementList';
import CreateAdForm from './components/CreateAdForm/CreateAdForm';
import AdDetails from './components/AdDetails/AdDetails';
import Admin from './components/Admin/Admin'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Link className="App-link" to={'/'}>
					Home
				</Link>
				<Link className="App-link push-right" to={'/advertisements'}>
					Advertisements
				</Link>
				<img
					className="logo"
					src="https://gbaydeals.herokuapp.com/images/icons/logo.png"
					alt="logo"
				/>
				<Link className="App-link push-left" to={'/createAd'}>
					Create ad
				</Link>
				<Link className="App-link" to={'/admin'}>
					Admin
				</Link>
			</header>
			<main className="App-main">
				<Switch>
					<Route path="/" exact component={Home} />
					<Route
						path="/advertisements"
						exact
						component={AdvertisementList}
					/>
					<Route path="/advertisements/:id" component={AdDetails} />
					<Route path="/createAd" component={CreateAdForm} />
          <Route path="/admin" component={Admin} />
				</Switch>
			</main>
			<footer className="App-footer">
				<p>made by Guido</p>
			</footer>
		</div>
	);
}

export default App;
