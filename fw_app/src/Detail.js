import React, {Component,useState} from 'react';
import {SafeAreaView, View, Text, ImageComponent, Image, Button,FlatList, StyleSheet, TouchableOpacity} from 'react-native';
//import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';
import { AlignLeft } from "react-native-feather";
import { ArrowLeft } from "react-native-feather";
import { ArrowRight } from "react-native-feather";
import { X } from "react-native-feather";
import GlobalFont from 'react-native-global-font';
import { challenges } from './data/data';
import { CheckCircle } from "react-native-feather";


//export default class Detail extends Component 
export default function Detail ({ navigation })
{
//   componentDidMount() {
//     let fontName = 'Poppins'
//     GlobalFont.applyGlobal(fontName)   //<------- Added font family golbally 
//  }
//   Home=()=>
//   {
//     this.props.navigation.navigate('Home');
//   }
//   Next=()=>
//   {
//     this.props.navigation.navigate('Add2');
//   }
//   render() {

    return(
      
      <View style={styles.profilepage}>
        <View style={styles.navbar}>
          {/* <X style={styles.menu} stroke="white"  width={25} height={25} margin={15}/> */}
{/* <Bell style={styles.notif} stroke="white"  width={25} height={25} margin={15}/> */}
          <Text style={styles.title}>{navigation.getParam('title')}</Text>
        
        </View>
        <View style={styles.div2}>
          <Text style={styles.date}>{navigation.getParam('start')} - {navigation.getParam('end')}</Text>
         
          <Text style={styles.des}>{navigation.getParam('description')}</Text>

        <TouchableOpacity activeOpacity={0.95} style={styles.start} onPress={()=>{}}>
          <Button
          style={styles.add}
          full
          rounded
          success
          color= "#3e71ff"
          onPress= {()=> {}}
          title= "Add to my calendar">
          {/* <CheckCircle style={styles.CheckCircle} stroke="#efefef"  width={25} height={25} margin={25}/> */}

          </Button>
        </TouchableOpacity>

    {challenges.map(challenge =>(
          <View style={styles.div3}>
            
              <Text style={styles.challenges}>

              {challenge.one}
              </Text>
               <CheckCircle style={styles.CheckCircle} stroke="#efefef"  width={25} height={25} margin={25}/>

              
            
          </View>
          ))}
      </View>
        
        
      </View>
      
    );
    

  
}
const styles = StyleSheet.create({
  profilepage: {
    backgroundColor: "#3e71ff",
    alignContent: "center",
    justifyContent: "center",

  },
  navbar: {
    backgroundColor: "#3E71FF",
    height: "7%"
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
    fontWeight: "bold",
    fontSize: 17
  },
  start: {

    backgroundColor: '#7F8CFA',

    elevation:3,
    borderRadius:100,

margin: 20
  },
  to: {
    height: 50
  },
  div2: {
    backgroundColor: "white",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: "93%"
  },
  des: {
    color: "black",
    padding: 10,
    marginLeft: 10,
paddingTop: 0
  },
  date: {
    color: "#3e71ff",
    padding: 20,

    fontWeight: "bold"
  },
  challenges: {
    color: "black",

    marginLeft: 20,
    fontWeight: "bold",marginBottom: 10,
    width: "100%"
  },
  div3: {
    marginTop: 20,
    marginBottom: 0
  },
  CheckCircle: {
    position: "absolute",
bottom: -17,
    right: 0
  },


})