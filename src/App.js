import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import WrapperComponent from "./components/WrapperComponent"


import './App.css';

function App() {

	const search = (query, e) => {
		if (e.key === 'Enter') {
			this.Yform.childForm.submit()

		}

	}

	return (
		<div className="App">
			<WrapperComponent />

			{/* 
			<Router>
				<Header search={search} />
				<Switch>
					<Route exact path="/">

						<Test2 search={} />

					</Route>
					<Route path="/forecast">
						<FiveDayForecast />
					</Route>
				</Switch>
			</Router>
			*/}
		</div>
	);
}

export default App;
