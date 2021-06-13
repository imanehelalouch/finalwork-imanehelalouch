import React, {Component,useState} from 'react';
import {SafeAreaView, View, Text, ImageComponent,TextInput, Image,FlatList, StyleSheet, TouchableOpacity} from 'react-native';
//import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';
import {Container, Header, Content, Form, Input, Item, Button, Label} from 'native-base';

import { AlignLeft } from "react-native-feather";
import { ArrowLeft } from "react-native-feather";
import { ArrowRight } from "react-native-feather";
import { X } from "react-native-feather";
import GlobalFont from 'react-native-global-font';

export default class Add1 extends Component 
{
  componentDidMount() {
    let fontName = 'Inter'
    GlobalFont.applyGlobal(fontName)   //<------- Added font family golbally 
 }
  Back=()=>
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
        <TouchableOpacity activeOpacity={0.95}  onPress={this.Back} style={styles.to}>
          <X style={styles.menu} stroke="white"  width={25} height={25} margin={15}/>
{/* <Bell style={styles.notif} stroke="white"  width={25} height={25} margin={15}/> */}
          <Text style={styles.title}>1/3 TELL  US MORE</Text>
        </TouchableOpacity>
          
        </View>
        <View style={styles.div2}>
        <Form style={styles.form}>
          <TextInput
          style={styles.input}
          placeholder="title"
          onChangeText={(title)=> this.setState({title})}/>

          <TextInput
          style={styles.textarea}
          placeholder="description"
          numberOfLines={5}
          multiline={true}
          onChangeText={(description)=> this.setState({description})}/>

          <TextInput
          style={styles.input}
          placeholder="start"
          onChangeText={(start)=> this.setState({start})}/>

          <TextInput
          style={styles.input}
          placeholder="end"
          onChangeText={(end)=> this.setState({end})}/>


          
        </Form>
        <TouchableOpacity activeOpacity={0.95} style={styles.start} onPress={this.Next}>
          <ArrowRight stroke="#fff"  width={25} height={25} margin={15}/>

        </TouchableOpacity>
        </View>
        
        
        <View style={styles.broll}>
            </View>
      </View>
      
    );
    
    
}

  
}
const styles = StyleSheet.create({
  profilepage: {

    backgroundColor: '#3E71FF',
    alignContent: "center",
    justifyContent: "center",

  },
  navbar: {
    backgroundColor: "#3E71FF",
    height: "7%",
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
    zIndex: 0,
    elevation: 0,
    bottom: -152,
  },
  to: {
    height: 50
  },
  form: {
    margin:20
  },
  input: {
    borderWidth: .7,
    borderColor: "#e2e2e2",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20
  },
  textarea: {
    borderWidth: .7,
    borderColor: "#e2e2e2",
    padding: 10,
    borderRadius: 5,
    textAlignVertical: "top",
    marginBottom: 20
  },
  div2: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5, 
    backgroundColor: "white",
    height:"94%"
  },


})