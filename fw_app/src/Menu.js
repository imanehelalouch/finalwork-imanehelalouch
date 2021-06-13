import React, {Component,useState} from 'react';
import {SafeAreaView, View, Text, ImageComponent, Image, Button,FlatList, StyleSheet, TouchableOpacity} from 'react-native';
//import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';
import { AlignLeft } from "react-native-feather";
import { X } from "react-native-feather";
import { Bell } from "react-native-feather";
import { Compass } from "react-native-feather";
import { Calendar } from "react-native-feather";
import { User } from "react-native-feather";
import { Settings } from "react-native-feather";
import { LogOut } from "react-native-feather";
import { NavigationActions } from 'react-navigation';
import GlobalFont from 'react-native-global-font';

export default class Menu extends Component 
{
  componentDidMount() {
    let fontName = 'Inter'
    GlobalFont.applyGlobal(fontName)   //<------- Added font family golbally 
 }
  Landing=()=>
  {
    this.props.navigation.navigate('Home');
  }
  Calendar=()=>
  {
    this.props.navigation.navigate('Calendar');
  }
  Profile=()=>
  {
    this.props.navigation.navigate('Profile');
  }
  Settings=()=>
  {
    this.props.navigation.navigate('Settings');
  }
  LogOut=()=>
  {
    this.props.navigation.navigate('Intro');
  }

  render() {

    return(
      
      <View style={styles.menu}>
          <View style={styles.navbar}>
          <TouchableOpacity  onPress={this.Landing} style={styles.navbar}> 
            <X style={styles.cross} stroke="white" fill="#fff" width={25} height={25} margin={15}/>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => this.Settings()} style={styles.notif}> 
              <Settings style={styles.notif} stroke="white"  width={22} height={22} margin={15}/>
          </TouchableOpacity>

          </View>
          <View style={styles.menulist}>
            <TouchableOpacity onPress={() => this.Landing()} style={styles.bar}>
              <Compass style={styles.menuitem} stroke="#3E71FF"  width={25} height={25} margin={15}/>
              <Text style={styles.itemtext}>Discover</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.Calendar()} style={styles.bar}>
              <Calendar style={styles.menuitem} stroke="#3E71FF"  width={25} height={25} margin={15}/>
              <Text style={styles.itemtext}>Calendar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.Profile()} style={styles.bar}>
              <User style={styles.menuitem} stroke="#3E71FF"  width={25} height={25} margin={15}/>
              <Text style={styles.itemtext}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.LogOut()} style={styles.bar}>
              <LogOut style={styles.menuitem} stroke="#3E71FF"  width={25} height={25} margin={15}/>
              <Text style={styles.itemtext}>Sign Out</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.broll}>
            </View>
      </View>
      
    );
    
    
}

  
}
const styles = StyleSheet.create({
  menu: {
    backgroundColor: "#3E71FF",
    alignContent: "center",
    justifyContent: "center",
  },navbar: {
    backgroundColor: "#3E71FF",
height: "7%"
  },
  cross :{
    position: "absolute",
    top: 0,
    left: 5,

  },
  notif: {
    position: "absolute",
    top: 0,
    right: 5,

  },
  menulist: {
    backgroundColor: "white",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: "94%"
  },
  itemtext: {
    position: "absolute",
    left: 70,
    top: 22
  },
  menuitem: {
    marginLeft: 23,
    marginTop: 20
  },
  bar: {
    width: "100%",
    height: 60
  },

  notif: {
    position: "absolute",
    top: 0,
    right: 5,
    resizeMode: 'contain',
    flex: 1
  },
})