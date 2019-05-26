import React from "react";
import {Text, Image} from "react-native";
import { View, Button } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./DriverOnTheWayStyles.js";

export const DriverOnTheWayFooter = ({ driverInfo, distanceFromDriver})=>{
	const { vehicle } = driverInfo || {};
	const { duration } = distanceFromDriver.rows[0].elements[0] || "";
	return (
		<View style={styles.footerContainer}>
			<View style={styles.iconContainer}>
				<Icon name="window-minimize" style={styles.icon}/>
				<Text style={styles.distanceText}>{(duration.value < 100) ? "Votre Chauffeur est arrive" : duration.text}</Text>
				<Text style={styles.onWayText}>Votre Chauffeur est en route</Text>
				<Text style={styles.vehicleText}>{vehicle && vehicle.plateNumber} {vehicle && vehicle.model}</Text>

			</View>

		</View>

	);
}

export default DriverOnTheWayFooter;
