import React from "react";
import {View, Text, AppRegistry, StyleSheet, Alert, Button} from "react-native";
import { Actions } from "react-native-router-flux";

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

class HomeScreen extends React.Component{
  
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
    
    const region = {
    latitude:18.1054,
    longitude: -15.9553,
    latitudeDelta:0.0922,
    longitudeDelta:0.0421
    }
    const { status } = this.props.booking;
    return(
           <Container>
           { (status !== "pending") &&
           <View style={{flex:1}}>
           <HeaderComponent logo={taxiLogo}/>
           {
           this.props.region.latitude &&
           <MapContainerDriver
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
           <Button
           title="Go to Users... again"
           onPress={UsersScreen}
           />
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
    
  }
}
class UsersScreen extends React.Component{
  
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
    
    const region = {
    latitude:18.1054,
    longitude: -15.9553,
    latitudeDelta:0.0922,
    longitudeDelta:0.0421
    }
    const { status } = this.props.booking;
    return(
           <Container>
           { (status !== "pending") &&
           <View style={{flex:1}}>
           <HeaderComponent logo={taxiLogo}/>
           {
           this.props.region.latitude &&
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
           nearByDrivers={this.props.nearByDrivers}
           />
           }
           <Fab onPressAction={()=>this.props.bookCar()}/>
           {
           this.props.fare &&
           <Fare fare={this.props.fare} />
           }
           <FooterComponent/>
           <Text>Details Screen</Text>
           <Button
           title="Go to Users... again"
           onPress={() => this.props.navigation.push('Users')}
           />
           <Button
           title="Go to Home"
           onPress={() => this.props.navigation.navigate('HomeS')}
           />
           <Button
           title="Go back"
           onPress={() => this.props.navigation.goBack()}
           />
           </View>
           ||
           <FindDriver selectedAddress={this.props.selectedAddress}/>
           }
           
           </Container>
           
           );
    
  }
}
const RootStack = createStackNavigator(
                                       {
                                       HomeS: {
                                       screen: HomeScreen,
                                       },
                                       Users: {
                                       screen: UsersScreen,
                                       },
                                       },
                                       {
                                       initialRouteName: 'HomeS',
                                       }
                                       );

const HomeContainer = createAppContainer(RootStack);

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
    
    const region = {
    latitude:18.1054,
    longitude: -15.9553,
    latitudeDelta:0.0922,
    longitudeDelta:0.0421
    }
    const { status } = this.props.booking;
    return <HomeContainer />;
    
  }
}
export default Home;
/*
<Container>
{ (status !== "pending") &&
  <View style={{flex:1}}>
  <HeaderComponent logo={taxiLogo}/>
  {
    this.props.region.latitude &&
    <MapContainerDriver
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
  <Button
  title="Go to Users... again"
  onPress={UsersScreen}
  />
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
*/
