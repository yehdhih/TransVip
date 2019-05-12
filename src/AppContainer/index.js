import React, { Component } from "react";
import { Router } from "react-native-router-flux";

import scenes from "../routes/scenes";

import { Provider } from "react-redux";
import PropTypes from "prop-types";
export default class AppContainer extends Component {
	static propTypes = {
		store: PropTypes.object.isRequired
	}
	render(){
		return (

			<Provider store={this.props.store}>
				<Router scenes={scenes} />

			</Provider>

			);
	}
}
