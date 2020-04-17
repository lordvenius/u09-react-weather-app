import React, { Component } from 'react';


import styles from './Header.css';

import { Link } from 'react-router-dom';

export default class Header extends Component {

	constructor(props) {
		super(props)

		this.state = {
			query: ""
		}
	}

	setQuery = (newQuery) => {
		this.setState({
			query: newQuery
		})
	}



	render() {


		return (
			<div className="wrapper">
				{/*<h2>Weather App</h2>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/forecast">Forecast</Link>
						</li>
					</ul>
				</nav>
				*/}
				<div className="searchWrapper">
					<input placeholder="Search..."
						value={this.state.query}
						onChange={(e) => this.setQuery(e.target.value)}
						onKeyPress={(e) => this.props.search(e.target.value, e)}
					/>

				</div>
			</div>
		);
	}
};


