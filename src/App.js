import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';

import Home from './components/Home/Home';
import AdvertisementList from './components/AdvertisementList/AdvertisementList';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Link className='App-link' to={'/'}>Home</Link>
        <Link className='App-link' to={'/advertisements'}>Advertisements</Link>
			</header>
			<main className="App-main">
				<Route path="/" exact component={Home} />
        <Route path="/advertisements"  component={AdvertisementList} />
			</main>
			<footer className='App-footer'>
        <p>made by Guido</p>
      </footer>
		</div>
	);
}

export default App;
