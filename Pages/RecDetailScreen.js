import React, { Component } from 'react';
import {View, Text, ScrollView, Image, StyleSheet, Platform} from 'react-native';
import {TOButton} from '../Components/TOButtons.js';
import {data} from '../data/data.js';

//This is a screen component that takes in a data object as a prop,
//and uses this prop for page title and details on screen.
//This functionality will be expanded upon when we populate the recreation pages with all their relevant information.
//Using a data object prop will allow us to get this information from outside the app and pass it in,
//so data could feasibly be changed without updating the app.
export class RecDetailScreen extends React.Component {

  static navigationOptions = ({navigation}) =>  ({
    title: `${navigation.state.params.title}`,
  });

  render(){
    const {params} = this.props.navigation.state;
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView>

          <Text style={styles.detailheader}>WHEN</Text>
          <Text style={styles.text}>{params.whendetail}</Text>
          <Text style={styles.detailheader}>WHERE</Text>
          <Text style={styles.text}>{params.wheredetail}</Text>
          <Text style={styles.detailheader}>HOW</Text>
          <Text style={styles.text}>{params.howdetail}</Text>
          <Text style={styles.detailheader}>TIME</Text>
          <Text style={styles.text}>{params.timedetail}</Text>

          <View style = {styles.lineStyle}/>
          {params.detail.map((item, index) => {
            return (
              <View key={index} style={styles.container}>
                <Text style={styles.header}>{item.header}</Text>
                <Text style={styles.body}>{item.body}</Text>
              </View>
            );
          })}
          <TOButton
            title={'Show ' + params.title + ' on Map'}
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
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium',
  },
  header:{
    fontSize: 25,
    margin: 10,
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium',
    fontWeight: 'bold',
  },
  body: {
    fontSize: 20,
    margin: 5,
    paddingLeft: 5,
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium',
  },
  detailheader: {
    fontSize: 25,
    margin: 10,
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  lineStyle:{
    borderWidth: 1,
    borderColor: '#2C4500',
    margin: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
