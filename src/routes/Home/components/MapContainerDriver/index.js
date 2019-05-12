import React from "react";
import { View } from "native-base";
import MapView from "react-native-maps";
//@import Firebase;
//@import GoogleSignIn;
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import SearchBox from "../SearchBox";
import SearchResults from "../SearchResults";
import GoogleSignIn from "../GoogleSignIn";
import styles from "./MapContainerStyles.js";

export const MapContainerDriver = ({
		region,
		getInputData,
		toggleSearchResultModal,
		getAddressPredictions,
		resultTypes,
		predictions,
		getSelectedAddress,
		selectedAddress,
		carMarker,
    showSearchBox,
		nearByDrivers
	})=>{

	const { selectedPickUp, selectedDropOff } = selectedAddress || {};

	return(
		<View style={styles.container}>
			<MapView
				provider={MapView.PROVIDER_GOOGLE}
				style={styles.map}
				region={region}
         //onRegionChangeComplete={this.handleLocationChange}
         zoomEnabled={true}
         scrollEnabled={true}
			>
         { selectedPickUp &&
         <MapView.Marker
         coordinate={{latitude:selectedPickUp.latitude, longitude:selectedPickUp.longitude}}
         pinColor="green"
         
         />
         }
         { selectedDropOff &&
         <MapView.Marker
         coordinate={{latitude:selectedDropOff.latitude, longitude:selectedDropOff.longitude}}
         pinColor="blue"
         
         />
         }
         
         {
         nearByDrivers && nearByDrivers.map((marker, index)=>
                                            <MapView.Marker
                                            key={index}
                                            coordinate={{latitude:marker.coordinate.coordinates[1], longitude:marker.coordinate.coordinates[0] }}
                                            image={carMarker}
                                            />
                                            )
         }
</MapView>
      <GoogleSignIn State = {null, null}/>
         { (resultTypes.pickUp || resultTypes.dropOff) &&
         <SearchResults predictions={predictions} getSelectedAddress={getSelectedAddress}/>
         }
		</View>
	)
}

export default MapContainerDriver;

/*         <GoogleSigninButton
 style={{ width: 48, height: 48 }}
 size={GoogleSigninButton.Size.Icon}
 color={GoogleSigninButton.Color.Dark}
 onPress={this._signIn}
 //disabled={this.state.isSigninInProgress}
 />
 
 
 
*/

/*
 <SearchBox
 getInputData={getInputData}
 toggleSearchResultModal={toggleSearchResultModal}
 getAddressPredictions={getAddressPredictions}
 selectedAddress={selectedAddress}
 />
 */
/*

 <SearchBox
 getInputData={getInputData}
 toggleSearchResultModal={toggleSearchResultModal}
 getAddressPredictions={getAddressPredictions}
 selectedAddress={selectedAddress}
 />


*/
