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
export default class Profile extends Component 
{
  componentDidMount() {
    let fontName = 'Poppins'
    GlobalFont.applyGlobal(fontName)   //<------- Added font family golbally 
 }
Menu=()=>
  {
    this.props.navigation.navigate('Menu');
  }
  render() {

    return(
      
      <View style={styles.profilepage}>
        <View style={styles.navbar}>
          <AlignLeft onPress={() => this.Menu()} style={styles.menu} stroke="white" fill="#fff" width={25} height={25} margin={15}/>
          {/* <Bell style={styles.notif} stroke="white"  width={25} height={25} margin={15}/> */}
        </View>
        <View style={styles.info}>
          <View style={styles.pp}></View>
          <Text style={styles.name}>Imane Helalouch</Text>
          <View style={styles.table}>
            <View style={styles.column}>
            <Text style={styles.number}>24</Text>
            <Text style={styles.saved}>Saved</Text>
            </View>
            <View style={styles.column}>
            <Text style={styles.number}>10</Text>
            <Text style={styles.joined}>Joined</Text>
            </View>
            <View style={styles.column}>
            <Text style={styles.number}>3</Text>
            <Text style={styles.completed}>Completed</Text>
            </View>
          </View>
        </View>

        <View style={styles.div2}>
          <View >
          <Text style={styles.title}>Buzzword-a-thon</Text>
          <Text style={styles.subtitle}>Joined</Text>
          <Text style={styles.sidetitle}>2 days left</Text>
          <View style={styles.challenges}>
            <CheckCircle style={styles.CheckCircle} stroke="#60D56C"  width={25} height={25} margin={5}/>
            <CheckCircle style={styles.CheckCircle} stroke="#60D56C"  width={25} height={25} margin={5}/>
            <CheckCircle style={styles.CheckCircle} stroke="#efefef"  width={25} height={25} margin={5}/>
            <CheckCircle style={styles.CheckCircle} stroke="#efefef"  width={25} height={25} margin={5}/>
            <CheckCircle style={styles.CheckCircle} stroke="#efefef"  width={25} height={25} margin={5}/>
            <CheckCircle style={styles.CheckCircle} stroke="#efefef"  width={25} height={25} margin={5}/>
          </View>
          </View>
          <View >
          <Text style={styles.title}>Buzzword-a-thon</Text>
          <Text style={styles.subtitle}>Saved</Text>
          <Text style={styles.sidetitle}>5 days left</Text>
          <View style={styles.challenges}>
            <CheckCircle style={styles.CheckCircle} stroke="#60D56C"  width={25} height={25} margin={5}/>
            <CheckCircle style={styles.CheckCircle} stroke="#60D56C"  width={25} height={25} margin={5}/>
            <CheckCircle style={styles.CheckCircle} stroke="#60D56C"  width={25} height={25} margin={5}/>
            <CheckCircle style={styles.CheckCircle} stroke="#60D56C"  width={25} height={25} margin={5}/>
            <CheckCircle style={styles.CheckCircle} stroke="#efefef"  width={25} height={25} margin={5}/>
            <CheckCircle style={styles.CheckCircle} stroke="#efefef"  width={25} height={25} margin={5}/>
          </View>
        </View>
        </View>
      </View>
      
    );
    
    
}

  
}
const styles = StyleSheet.create({
  profilepage: {
    backgroundColor: "#3E71FF",
    alignContent: "center",
    justifyContent: "center",

  },
  navbar: {
    height: 50
  },
  menu: {
    position: "absolute",
    top: 0,
    left: 5,
    resizeMode: 'contain',
    flex: 1
  },
  notif: {
    position: "absolute",
    top: 0,
    right: 5,
    resizeMode: 'contain',
    flex: 1
  },
  pp: {
    height: 70,
    width: 70,
    borderRadius: 50,
    backgroundColor: "white",
    marginTop: 20
  },
  info: {
    alignItems: "center",
  },
  name: {
    color: "white",
    marginTop: 10,
    marginBottom: 10
  },
  column: {
    width: "28%",
  },
  number: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold", 
    textAlign: "center",
    padding: 5
  },
  saved: {
    backgroundColor: "#FFC96A",
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 20,
    width: 100,
    textAlign: "center",
    color: "white"
  },
  joined: {
    backgroundColor: "#7AAFFF",
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 20,
    width: 100,
    textAlign: "center",
    color: "white"
  },
  completed: {
    backgroundColor: "#6DDF78",
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 20,
    width: 100,
    textAlign: "center",
    color: "white"
  },
  table: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start', // if you want to fill rows left to right
    marginTop: 10,
    marginBottom: 15
  },
  div2: {
    backgroundColor: "white",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    paddingTop: 20,
    paddingLeft: 10,
    marginTop: 10
  },
  title: {
    fontSize: 16,
    top: 10,
    left: 20,

  },
  subtitle: {
    color: "#7AAFFF",
    paddingLeft: 20,
    top: 10
  },
  sidetitle: {
    position: "absolute",
    top: 10,
    right: 30,
    fontSize: 13,
    color: "grey"
  },
  challenges: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    margin:12,
    marginTop: 15,
    marginBottom: 0
  }
})