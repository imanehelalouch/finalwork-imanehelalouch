import React, {Component,useState} from 'react';
import {SafeAreaView, View, Text, ScrollView, ImageComponent, Image, Button,FlatList, StyleSheet, TouchableOpacity} from 'react-native';
//import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';
import { AlignLeft } from "react-native-feather";
import { Bell } from "react-native-feather";
import { Circle } from "react-native-feather";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import GlobalFont from 'react-native-global-font';
import { clubs } from './data/data';
export default class Home extends Component 
{
  componentDidMount() {
    let fontName = 'Inter'
    GlobalFont.applyGlobal(fontName)   //<------- Added font family golbally 
 }
Menu=()=>
  {
    this.props.navigation.navigate('Menu');
  }
  render() {

    return(
      
      <View style={styles.calendarpage}>
        <View style={styles.navbar}>
          <AlignLeft onPress={() => this.Menu()} style={styles.menu} stroke="white" fill="#fff" width={25} height={25} margin={15}/>
          {/* <Bell style={styles.notif} stroke="white"  width={32} height={32} margin={15}/> */}
        </View>
<Calendar style={styles.calendar}
theme={{
    backgroundColor: '#3E71FF',
    calendarBackground: '#3E71FF',
    textSectionTitleColor: 'white',
    textSectionTitleDisabledColor: '#d9e1e8',
    selectedDayBackgroundColor: '#00adf5',
    selectedDayTextColor: '#ffffff',
    todayTextColor: 'white',
    dayTextColor: '#ffffff',
    textDisabledColor: '#B2BBFF',
    dotColor: 'white',
    selectedDotColor: '#ffffff',
    arrowColor: '#B2BBFF',
    disabledArrowColor: '#d9e1e8',
    monthTextColor: 'white',
    indicatorColor: 'white',

    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',

  }}
  markedDates={{
    '2021-06-22': {startingDay: true, color: '#FF9EF9', textColor: 'white'},
    '2021-06-26': {startingDay: true, color: '#73ECB0', textColor: 'white'},
    '2021-06-27': {startingDay: false, color: '#73ECB0', textColor: 'white'},
    '2021-06-28': {selected: true, endingDay: true, color: '#73ECB0', textColor: 'white'},
    '2021-06-23': {selected: true, endingDay: true, color: '#FF9EF9', textColor: 'white'},
    '2021-06-25': {disabled: true, startingDay: true, color: '#FF8787', endingDay: true, textColor: 'white'},
    '2021-07-22': {startingDay: true, color: '#FF8787', textColor: 'white'},
    '2021-07-26': {startingDay: true, color: '#84BDFF', textColor: 'white'},
    '2021-07-27': {startingDay: false, color: '#84BDFF', textColor: 'white'},
    '2021-07-28': {selected: true, endingDay: true, color: '#84BDFF', textColor: 'white'},
    '2021-07-23': {selected: true, endingDay: true, color: '#FF8787', textColor: 'white'},
  }}
  // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
  markingType={'period'}
/>
      <ScrollView>
        <View style={styles.div2}>
          {clubs.map(club =>(
            <TouchableOpacity onPress={()=> {this.props.navigation.navigate('Detail', club)}}>
          <View >
          <Circle style={styles.dot} fill={club.color} width={25} height={25} margin={15}/>
          <Text style={styles.title}>{club.title}</Text>
          <Text style={styles.subtitle}>{club.start} - {club.end}</Text>

          </View>
          </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
        <View style={styles.broll}>
            </View>
      </View>
      
    );
    
    
}

  
}
const styles = StyleSheet.create({
  calendarpage: {
    backgroundColor: "#3E71FF",
    alignContent: "center",
    justifyContent: "center",

  },navbar: {

height: "7%"
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
  },subtitle: {
    color: "grey",
    paddingLeft: 60,
    fontSize: 12,
    top: -10
  },
div2: {
    backgroundColor: "white",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    paddingTop: 20,
    paddingLeft: 10,paddingBottom: 80,
    height: "100%"
  },
  title: {
    position: "absolute",
    fontSize: 16,
    top: 15,
    left: 60
  },
  broll: {
    backgroundColor: "white",
    height: "10%",
    
  },
  calendar: {
    marginTop: -5,
    marginBottom: -35,
    height: "43%"
  }
      
})