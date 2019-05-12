// @flow
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Alert, Button } from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
//import { createStackNavigator, createAppContainer } from "react-navigation";
import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import type { User } from 'react-native-google-signin';
import config from './config'; // see docs/CONTRIBUTING.md for details
import styles from "./GoogleSignInStyles.js";
type ErrorWithCode = Error & { code?: string };

type State = {
error: ?ErrorWithCode,
userInfo: ?User,
};

class GoogleSignIn extends Component<{}, State> {
//export const GoogleSignIn = ({State})=> {
  constructor(props) {
    super(props);
    this.state = {
    userInfo: null,
    error: null,
    };
  }
  
  async componentDidMount() {
    this._configureGoogleSignIn();
    await this._getCurrentUser();
  }
  
  _configureGoogleSignIn() {
    GoogleSignin.configure({
                           webClientId: config.webClientId,
                           offlineAccess: false,
                           });
  }
  
  async _getCurrentUser() {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      this.setState({ userInfo, error: null });
    } catch (error) {
      const errorMessage =
      error.code === statusCodes.SIGN_IN_REQUIRED ? 'Please sign in :)' : error.message;
      /*this.setState({
                    error: new Error(errorMessage),
                    });*/
    }
  }
 
 render() {
    const { userInfo } = this.state;
    
    const body = userInfo ? this.renderUserInfo(userInfo) : this.renderSignInButton();
    return (
            <View style={[styles.container, { flex: 1 }]}>
            {body}
            </View>
            );
}
           // {this.renderIsSignedIn()}
  isSignedIn() {
    return GoogleSignin.isSignedIn();
  }
  renderIsSignedIn() {
    return (
            <Button
            onPress={async () => {
            const isSignedIn = await GoogleSignin.isSignedIn();
            Alert.alert(String(isSignedIn));
            }}
            title="Driver"
            //title="is user signed in?"
            />
            );
  }
  
  renderUserInfo(userInfo) {
    return (
            <View style={styles.container}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 36 }}>
            Welcome {userInfo.user.name}
            </Text>
            <Text>Welcome: {JSON.stringify(userInfo.user.name)}</Text>
            
            <Button onPress={this._signOut} title="Log out" />
            {this.renderError()}
            </View>
            );
  }
  
  renderSignInButton() {
    return (
            <View style={styles.container}>
            <GoogleSigninButton
           style={{ width: 212, height: 60 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Auto}
            onPress={this._signIn}
            />
            {this.renderError()}
            </View>
            );
  }
  
  renderError() {
    const { error } = this.state;
    if (!error) {
      return null;
    }
    const text = `${error.toString()} ${error.code ? error.code : ''}`;
    return <Text>{text}</Text>;
  }
  
  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo, error: null });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // sign in was cancelled
        Alert.alert('cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation in progress already
        Alert.alert('in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('play services not available or outdated');
      } else {
        Alert.alert('Something went wrong', error.toString());
        this.setState({
                      error,
                      });
      }
    }
  };
  
  _signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      
      this.setState({ userInfo: null, error: null });
    } catch (error) {
      this.setState({
                    error,
                    });
    }
  };
}


class HomeScreen extends React.Component {
  render() {
    return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Details')}
            />
            </View>
            );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button
            title="Go to Details... again"
            onPress={() => this.props.navigation.push('Details')}
            />
            <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
            />
            <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
            />
            </View>
            );
  }
}

const RootStack = createStackNavigator(
                                       {
                                       Home: {
                                       screen: HomeScreen,
                                       },
                                       Details: {
                                       screen: DetailsScreen,
                                       },
                                       },
                                       {
                                       initialRouteName: 'Home',
                                       }
                                       );

//const AppContainer = createAppContainer(RootStack);
/*
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
*/

//AppRegistry.registerComponent('GoogleSigninSampleApp', () => GoogleSigninSampleApp);

export default GoogleSignIn;

