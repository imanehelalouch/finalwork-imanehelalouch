import React, {Component} from 'react';
import {View, Text, ImageComponent, Image,StatusBar, Button, StyleSheet, TouchableOpacity} from 'react-native';
//import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';
import { ArrowRight } from "react-native-feather";
import GlobalFont from 'react-native-global-font';




export default class Intro extends Component 
{
  componentDidMount() {
    let fontName = 'Poppins'
    GlobalFont.applyGlobal(fontName)   //<------- Added font family golbally 
 }


  Next=()=>
  {
    this.props.navigation.navigate('SignIn');
  }
  render() {
    
    return(
      
      <View style={styles.startContainer}>
      <StatusBar backgroundColor='#fff' barStyle="dark-content" />
        <Image style={styles.logo} source={require('../images/discoveread.png')} />
        <Text style={styles.disco}>DISCOVEREAD</Text>
        <Text style={styles.text}>An app that allows you to expand your book knowledge. Discover new genres, authors, characters, stories and maybe your new favorite book with discoveread.</Text>
        <TouchableOpacity activeOpacity={0.95} style={styles.start} onPress={this.Next}>
          <ArrowRight style={styles.ArrowRight} stroke="#fff"  width={25} height={25} margin={15}/>

        </TouchableOpacity>

      </View>
      
    );
    
    
}

  
}
const styles = StyleSheet.create({
  startContainer: {
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: "white",
    height: "100%",
    
  },
  logo: {
    width: 150,
    height: 90,
    resizeMode: 'stretch',
    marginBottom: 100,
    marginTop:0
  },
  start: {
    height: 55, 
    width: 55,
    backgroundColor: '#3E71FF',
    alignItems: 'center',
    justifyContent: 'center',
    elevation:3,
    borderRadius:100,
    marginTop: 60,
  },
  arrow: {
    color: "#fff",
    fontSize: 15,
    
  },
  disco: {
    color: "black",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold"
  },
  text: {
    color: "black",
    fontSize: 15,
    padding: 30,
    textAlign: "center",

  }
      
})