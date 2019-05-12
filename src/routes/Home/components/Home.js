import React, { Component } from 'react';
import {View, Text, AppRegistry, StyleSheet, Alert, Button} from 'react-native';
import { Actions } from "react-native-router-flux";
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import { Container }  from "native-base";
import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import MapContainer from "./MapContainer";
import MapContainerDriver from "./MapContainerDriver";
import HeaderComponent from "../../../components/HeaderComponent";
import FooterComponent from "../../../components/FooterComponent";
import Fare from "./Fare";
import Fab from "./Fab";
import FindDriver from "./FindDriver";
const taxiLogo = require("../../../assets/img/taxi_logo_white.png");
const carMarker = require("../../../assets/img/carMarker.png");


class Home extends React.Component{
  
  componentDidMount() {
    var rx = this;
    this.props.getCurrentLocation();
    setTimeout(function(){
               rx.props.getNearByDrivers();
               
               }, 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.booking.status === "confirmed" ){
      Actions.trackDriver({type: "reset"});
    }
    this.props.getCurrentLocation();
  }
  
  render(){
    /*
     const region = {
     latitude:3.146642,
     longitude:101.695845,
     latitudeDelta:0.0922,
     longitudeDelta:0.0421
     //latitude:39.7392,
     //latitude:18.0735,
     //longitude:-104.9903,
     //longitude:-15.9582,
     latitude:18.105437099999996,
     longitude:-15.955299699999996,
     //latitude:18.0862,
     //longitude:-15.9636,
     latitudeDelta:0.0922,
     longitudeDelta:0.0421
     }
     */
    //const HomeContainer = createAppContainer(RootStack);
    const region = {
    latitude:18.1054,
    longitude: -15.9553,
    latitudeDelta:0.0922,
    longitudeDelta:0.0421
    }
    const { status } = this.props.booking;
    return (
            <Container>
            { (status !== "pending") &&
            <View style={{flex:1}}>
            <HeaderComponent logo={taxiLogo}/>
            {
            this.props.region.latitude &&
            //<MapContainerDriver
            <MapContainer
            //region={this.props.region}
            region={region}
            getInputData={this.props.getInputData}
            toggleSearchResultModal={this.props.toggleSearchResultModal}
            getAddressPredictions={this.props.getAddressPredictions}
            resultTypes={this.props.resultTypes}
            predictions={this.props.predictions}
            getSelectedAddress={this.props.getSelectedAddress}
            selectedAddress={this.props.selectedAddress}
            carMarker={carMarker}
            showSearchBox={false}
            nearByDrivers={this.props.nearByDrivers}
            />
            
            }
            <Fab onPressAction={()=>this.props.bookCar()}/>
            {
            this.props.fare &&
            <Fare fare={this.props.fare} />
            }
            <FooterComponent/>
            
            </View>
            ||
            <FindDriver selectedAddress={this.props.selectedAddress}/>
            }
            
            </Container>
            );
    //return <HomeContainer />;
    
  }
}
export default Home;
