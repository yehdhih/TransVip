import { StyleSheet, Dimensions } from "react-native";
var width = Dimensions.get("window").width; //full width

const styles = StyleSheet.create({
                                 container: {
                                 justifyContent: 'center',
                                 alignItems: 'center',
                                 marginLeft:15,
                                 marginRight:10,
                                 marginTop:10,
                                 marginBottom:230,
                                 //backgroundColor: '#F5FCFF',
                                 },
                                 welcome: {
                                 fontSize: 20,
                                 textAlign: 'center',
                                 margin: 8,
                                 },
                                 instructions: {
                                 textAlign: 'center',
                                 color: '#333333',
                                 marginBottom: 5,
                                 },
                                 });

export default styles;
