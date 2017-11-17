import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableHighlight,
  Image
} from 'react-native';

import {PageHeader} from '../Components/PageHeader.js';

export class RecreationsScreen extends React.Component {

  render() {
    const {navigate} = this.props.navigation;
    return(
      <View style={styles.container}>
        <PageHeader onPress={() => navigate('DrawerToggle')}/>
        <View style={styles.body}>
          <Text style={styles.text}>Recreational Activities</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: 'grey'
  },
})