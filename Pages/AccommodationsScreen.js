import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';

import {TOButton} from '../Components/TOButtons.js';
import {data} from '../data/data.js';


//Placeholder for Accommodations Screen.
export class AccommodationsScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
      <Image
        style={{width: '100%', height: '20%'}}
        source={require('../assets/accom.jpg')}
        />
      <ScrollView>
      <Text style={styles.text}>{data.accomodationsPages[0].detail}</Text>
      <Text style={styles.body}>{data.accomodationsPages[0].body}</Text>
      <Text style={styles.text}>{data.accomodationsPages[0].body2}</Text>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 23,
    margin: 10,
    textAlign: 'center',
    fontFamily: 'Arial',
  },
  body: {
    fontSize: 30,
    margin: 10,
    textAlign: 'center',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
