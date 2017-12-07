import React from 'react';
import {StyleSheet, Text, View, Button, Image } from 'react-native';
import {StackNavigator} from 'react-navigation';

import {HomeScreen} from '../Pages/HomeScreen.js';
import {DiningHallScreen} from '../Pages/DiningHallScreen.js';
import {AccommodationsScreen} from '../Pages/AccommodationsScreen.js';
import {RecreationsScreen} from '../Pages/RecreationsScreen.js';
import {ContactUsScreen} from '../Pages/ContactUsScreen.js';
import {RecDetailScreen} from '../Pages/RecDetailScreen.js';


export const RootStack = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Dining: {
    screen: DiningHallScreen,
    navigationOptions: {
      title: 'Dining'
    }
  },
  Accommodations: {
    screen: AccommodationsScreen,
    navigationOptions: {
      title: 'Accommodations'
    }
  },
  Recreation: {
    screen: RecreationsScreen,
    navigationOptions: {
      title: 'Recreation'
    }
  },
  RecDetail: {
    screen: RecDetailScreen,
  },
  Contact: {
    screen: ContactUsScreen,
    navigationOptions: {
      title: 'Contact Us'
    }
  }
},{
  navigationOptions: {
    headerStyle: {
      backgroundColor: 'grey',
    },
    headerTitleStyle: {
      fontSize: 20,
    },
    headerTintColor: 'white',
    headerBackTitleStyle: {
      fontSize: 20,
    }
  }
}

);
