/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableHighlight
} from 'react-native';


export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            onPress= {() => navigate('Profile')}>

            <View style={styles.button}>
              <Text style={styles.buttonText}>Go to Profile</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableHighlight
            onPress= {() => navigate('Page3')}>

            <View style={styles.button}>
              <Text style={styles.buttonText}>Go to Page 3</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'grey',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  buttonContainer: {
    margin: 5,
  }
});
