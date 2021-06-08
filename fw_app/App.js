import React, {Component} from 'react';
import {View, Text, ImageComponent, Image, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as firebase from 'firebase';

import SignIn from './src/SignIn';
import Intro from './src/Intro';
import SignUp from './src/SignUp';
import Home from './src/Home';
import Menu from './src/Menu';
import Calendar from './src/Calendar';
import Profile from './src/Profile';
import Settings from './src/Settings';
import Add1 from './src/Add1';
import Add2 from './src/Add2';
import Add3 from './src/Add3';
import Detail from './src/Detail';

import { SafeAreaProvider } from 'react-native-safe-area-context';


import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCDZUli-R2q1q8-Cxm1WwhRIRS72Jh2Mbo",
    authDomain: "finalwork-reactnative.firebaseapp.com",
    projectId: "finalwork-reactnative",
    storageBucket: "finalwork-reactnative.appspot.com",
    messagingSenderId: "968399824260",
    appId: "1:968399824260:web:8d72f9da262b9ee17de9d1",
    measurementId: "G-K8KWV5GW71"
};

const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(app);

export const ClubsRef = db.collection("clubs");

//const clubDocument = firestore().collection('clubs').doc('WJ2kAa9E5zNjFwmdIOJ1').get()

export { firebase };

const App=createStackNavigator(
  {
    Intro : {screen: Intro},
  
    SignIn : {screen: SignIn},
   
    SignUp : {screen: SignUp},

    Home : {screen: Home},

    Menu : {screen: Menu},

    Calendar : {screen: Calendar},

    Profile : {screen: Profile},

    Settings : {screen: Settings},

    Add1 : {screen: Add1},

    Add2 : {screen: Add2},

    Add3 : {screen: Add3},

    Detail : {screen: Detail},
  },{
    defaultNavigationOptions: {
      headerShown: false
    },}
);




export default createAppContainer(App)
