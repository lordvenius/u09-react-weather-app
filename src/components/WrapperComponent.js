import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from "./Header"
import Test2 from "./Test2"





export default class WrapperComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchQuery: ""
        }
    }

    search = (query, e) => {
        if (e.key === 'Enter') {
            this.setState({
                searchQuery: query
            })
        }
    }


    render() {
        return (
            <div className="wrapperComponentDiv">
                <Router>
                    <Header search={this.search} />
                    <Switch>
                        <Route exact path="/">

                            <Test2 searchQuery={this.state.searchQuery} />

                        </Route>
                        <Route path="/forecast">

                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}