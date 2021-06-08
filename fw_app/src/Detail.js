import React, {Component,useState} from 'react';
import {SafeAreaView, View, Text, ImageComponent, Image, Button,FlatList, StyleSheet, TouchableOpacity} from 'react-native';
//import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';
import { AlignLeft } from "react-native-feather";
import { ArrowLeft } from "react-native-feather";
import { ArrowRight } from "react-native-feather";
import { X } from "react-native-feather";
import GlobalFont from 'react-native-global-font';

export default class Detail extends Component 
{
  componentDidMount() {
    let fontName = 'Poppins'
    GlobalFont.applyGlobal(fontName)   //<------- Added font family golbally 
 }
  Home=()=>
  {
    this.props.navigation.navigate('Home');
  }
  Next=()=>
  {
    this.props.navigation.navigate('Add2');
  }
  render() {

    return(
      
      <View style={styles.profilepage}>
        <View style={styles.navbar}>
        <TouchableOpacity activeOpacity={0.95}  onPress={this.Home} style={styles.to}>
          <X style={styles.menu} stroke="white"  width={25} height={25} margin={15}/>
{/* <Bell style={styles.notif} stroke="white"  width={25} height={25} margin={15}/> */}
          <Text style={styles.title}>BUZZWORD-A-THON</Text>
        </TouchableOpacity>
          
        </View>
        
        
        
      </View>
      
    );
    
    
}

  
}
const styles = StyleSheet.create({
  profilepage: {
    
    alignContent: "center",
    justifyContent: "center",

  },
  navbar: {
    backgroundColor: "#3E71FF",
    height: 50
  },
  menu: {
    position: "absolute",
    top: 0,
    left: 5,
    resizeMode: 'contain',
    flex: 1
  },
  title: {
    textAlign: "center",
    top: 15,
    color: "white",
    fontWeight: "bold"
  },
  start: {
    height: 60, 
    width: 60,
    backgroundColor: '#7F8CFA',
    alignItems: 'center',
    justifyContent: 'center',
    elevation:3,
    borderRadius:100,
    marginTop: 60,
    alignSelf: "center",
  },
  to: {
    height: 50
  }

})