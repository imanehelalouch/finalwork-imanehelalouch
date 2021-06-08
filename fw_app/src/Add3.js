import React, {Component,useState} from 'react';
import {SafeAreaView, View, Text, ImageComponent, Image, Button,FlatList, StyleSheet, TouchableOpacity} from 'react-native';
//import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';
import RadioButtonRN from 'radio-buttons-react-native';
import { AlignLeft } from "react-native-feather";
import { ArrowLeft } from "react-native-feather";
import { ArrowRight } from "react-native-feather";
import { X } from "react-native-feather";
import { Check } from "react-native-feather";
import GlobalFont from 'react-native-global-font';
import Icon from 'react-native-vector-icons/FontAwesome';

const data = [
{label: '24   25   26', value: "#FF8787", color: "#FF8787" },
// {label: '24   25   26', value: "#FED48A", color: "#FED48A" },
// {label: '24   25   26', value: "#84BDFF", color: "#84BDFF" },
// {label: '24   25   26', value: "#73ECB0", color: "#73ECB0" },
// {label: '24   25   26', value: "#FF9EF9", color: "#FF9EF9" },
// {label: '24   25   26', value: "#C19EFF", color: "#C19EFF" },
];

const colors = ['#FF8787', '#FED48A', '#84BDFF', '#73ECB0', '#FF9EF9', '#C19EFF'];

export default class Add3 extends Component 
{
  componentDidMount() {
    let fontName = 'Poppins'
    GlobalFont.applyGlobal(fontName)   //<------- Added font family golbally 
 }
  Back=()=>
  {
    this.props.navigation.navigate('Add2');
  }
  Next=()=>
  {
    this.props.navigation.navigate('Home');
  }
  render() {

    return(
      
      <View style={styles.profilepage}>
        <View style={styles.navbar}>
        <TouchableOpacity activeOpacity={0.95}  onPress={this.Back} style={styles.to}>
          <ArrowLeft style={styles.menu} stroke="white"  width={25} height={25} margin={15}/>
{/* <Bell style={styles.notif} stroke="white"  width={25} height={25} margin={15}/> */}
          <Text style={styles.title}>3/3 CHOOSE A COLOR</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.div2}>
        {colors.map(color =>(
<RadioButtonRN
style={styles.radio}
  data={data}
  selectedBtn={(e) => console.log(e)}
  textStyle={{backgroundColor: color, padding: 3, paddingLeft: 15, paddingRight: 15, borderRadius: 50, color: "white", textAlign: "right"}}
/>
        ))}


        <TouchableOpacity activeOpacity={0.95} style={styles.start} onPress={this.Next}>
          <Check stroke="#fff"  width={25} height={25} margin={15}/>

        </TouchableOpacity>
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
    height: 55, 
    width: 55,
    backgroundColor: '#3E71FF',
    alignItems: 'center',
    justifyContent: 'center',
    elevation:3,
    borderRadius:100,
    marginTop: 60,
    alignSelf: "center",
  },
  to: {
    height: 50
  },
  div2: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5, 
    backgroundColor: "white",
    paddingTop: 10
  },
  radio: {
    borderColor: "white",
    marginRight: 25,
    marginLeft: 25,
    marginTop: 0,
    backgroundColor: "white"
  }

})