import React from "react";
import { Text, Image } from "react-native";
import { Header, Left, Body, Right, Button} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./HeaderComponentStyles";

export const HeaderComponent =  ({logo})=>{
	return (
		//<Header style={{backgroundColor:"#FF5E3A"}} iosBarStyle="light-content">
    <Header style={{backgroundColor:"#697FA5"}} iosBarStyle="light-content">
			<Left>
				<Button transparent>
					<Icon name="bars" style={styles.icon} />
				</Button>
			</Left>
			<Body>{logo &&
					<Image resizeMode="contain" style={styles.logo} source={logo}/>
					||
					<Text style={styles.headerText}>Votre Chauffeur est en route</Text>
				}
			</Body>

			<Right>
				<Button transparent>
					<Icon name="gift" style={styles.icon} />
				</Button>
			</Right>
		</Header>
	);
}

export default HeaderComponent;
