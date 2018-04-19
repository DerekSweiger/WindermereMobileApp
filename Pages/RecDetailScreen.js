import React, { Component } from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import {TOButton} from '../Components/TOButtons.js';
import {data} from '../data/data.js';

//This is a screen component that takes in a data object as a prop,
//and uses this prop for page title and details on screen.
//This functionality will be expanded upon when we populate the recreation pages with all their relevant information.
//Using a data object prop will allow us to get this information from outside the app and pass it in,
//so data could feasibly be changed without updating the app.
export class RecDetailScreen extends React.Component {

  static navigationOptions = ({navigation}) =>  ({
    title: `${navigation.state.params.key}`,
  });

  render(){
    const {params} = this.props.navigation.state;
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>{params.detail}</Text>
        <TOButton
          title={'Show ' + params.key + ' on map'}
          onPress={()=>navigate('SingleMap', params.coordinate)}
        />
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
  image: {
    width: '100%',
    height: '100%',
  },
});
