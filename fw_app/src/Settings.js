import React, {Component,useState} from 'react';
import {SafeAreaView, View, Text, ImageComponent, Image, Button,FlatList, StyleSheet, TouchableOpacity} from 'react-native';
//import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';
import { AlignLeft } from "react-native-feather";
import { Bell } from "react-native-feather";
import { Search } from "react-native-feather";
import { Plus } from "react-native-feather";
import { Sliders } from "react-native-feather";
import { PlusCircle } from "react-native-feather";
import { CheckCircle } from "react-native-feather";
import GlobalFont from 'react-native-global-font';
export default class Settings extends Component 
{

  componentDidMount() {
    let fontName = 'Inter'
    GlobalFont.applyGlobal(fontName)   //<------- Added font family golbally 
 }
  render() {

    return(
      
      <View style={styles.settings}>

      </View>
      
    );
    
    
}

  
}
const styles = StyleSheet.create({
  settings: {
    backgroundColor: "#7F8CFA",
    alignContent: "center",
    justifyContent: "center",

  },
      
})