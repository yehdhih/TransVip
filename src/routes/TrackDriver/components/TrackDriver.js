import React from "react";
import {View, Text} from "react-native";

import { Container }  from "native-base";
import HeaderComponent from "../../../components/HeaderComponent";
import MapTrack from "./MapTrack";
import DriverFound from "./DriverFound";
import DriverFooterProfile from "./DriverFooterProfile";
import DriverOnTheWayFooter from "./DriverOnTheWayFooter";
const carMarker = require("../../../assets/img/carMarker.png");
class TrackDriver extends React.Component{

	componentDidMount() {
		this.props.getCurrentLocation();
		this.props.getDriverInfo();
	}
	componentWillReceiveProps(nextProps) {
		if(this.props.driverLocation && nextProps.driverLocation !== this.props.driverLocation){
			this.props.getDistanceFromDriver();
		}
	}

	render(){
   /*
    const region = {
    latitude:3.146642,
    longitude:101.695845,
    latitudeDelta:0.0922,
    longitudeDelta:0.0421
    //latitude:39.7392,
    //longitude:-104.9903,
    //longitude:-15.9582,
    //latitude:18.0735,
    latitude:18.105437099999996,
    longitude:-15.955299699999996,
    //latitude:18.0862,
    // longitude:-15.9636,
    latitudeDelta:0.0922,
    longitudeDelta:0.0421
    }
    */
    
		const region = {
    latitude:18.1054,
    longitude: -15.9553,
    latitudeDelta:0.0922,
    longitudeDelta:0.0421
		}
		return(
			<Container>
				<View style={{flex:1}}>
					<HeaderComponent />
					{
						this.props.region &&
						<MapTrack
							//region={this.props.region}
           region={region}
							selectedAddress={this.props.selectedAddress}
							driverLocation={this.props.driverLocation}
							showCarMaker={this.props.showCarMaker}
							carMarker={carMarker}
						/>
					}
					{
						this.props.distanceFromDriver.rows &&
						<DriverOnTheWayFooter
							driverInfo={this.props.driverInfo}
							distanceFromDriver={this.props.distanceFromDriver}
						/>
					}
					<DriverFooterProfile
						driverInfo={this.props.driverInfo}
					/>

					{
						this.props.showDriverFound &&
						<DriverFound
							driverInfo={this.props.driverInfo}
							getDriverLocation={this.props.getDriverLocation}
						/>
					}
				</View>
			</Container>

		);

	}
}

export default TrackDriver;
