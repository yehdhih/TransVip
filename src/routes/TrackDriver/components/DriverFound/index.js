import React from "react";
import {Text, Image} from "react-native";
import { View, Button } from "native-base";

import styles from "./DriverFoundStyles.js";
const pic = require("../../../../assets/img/Yehdhih.png");
// <Image resizemode="contain" style={styles.driverPic} source={{uri:profilePic}} />
export const DriverFound = ({ driverInfo, getDriverLocation})=>{
	const { profilePic } = driverInfo || "";
	const { vehicle } = driverInfo || {};
	return (
		<View style={styles.findDriverContainer}>
			<View style={styles.content}>
				<Text>YAY Driver Found!</Text>
				<Image resizemode="contain" style={styles.driverPic} source={pic} />
				<View style={styles.driverInfo}>
					<Text style={styles.quotationMarkLeft}>""</Text>
					<View style={styles.driverBio}>
						<Text style={styles.bioText}>
            Bonjour, mon nom est:
						</Text>
						<Text style={styles.nameText}>
							{driverInfo.firstName} {driverInfo.lastName}
						</Text>
						<Text style={styles.bioText}>
            et je suis a 3 km.
						</Text>
					</View>
					<Text style={styles.quotationMarkRight}>""</Text>
				</View>
				<View style={styles.vehicleDetails}>
					<Text style={styles.vehicleText}>Matricule de vehicule:</Text>
					<Text style={styles.vehicleNumber}> {vehicle && vehicle.plateNumber}</Text>
					<Button style={styles.nextBtn} onPress={()=>getDriverLocation()}>
						<Text style={styles.nextBtnText}>Next</Text>
					</Button>
				</View>
			</View>
			
		</View>

	);
}

export default  DriverFound;
