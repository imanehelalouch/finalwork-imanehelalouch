import React, {Component,useState} from 'react';
import {SafeAreaView, View, Text, ImageComponent, Image, Button,FlatList, StyleSheet, TouchableOpacity} from 'react-native';
//import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';
import { AlignLeft } from "react-native-feather";
import { Bell } from "react-native-feather";
import { Circle } from "react-native-feather";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import GlobalFont from 'react-native-global-font';

export default class Home extends Component 
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
const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
const workout = {key:'workout', color: 'green'};
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
    '2021-06-23': {selected: true, endingDay: true, color: '#FF9EF9', textColor: 'white'},
    '2021-06-04': {disabled: true, startingDay: true, color: '#84BDFF', endingDay: true, textColor: 'white'}
  }}
  // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
  markingType={'period'}
/>
        <View style={styles.div2}>
          <View >
          <Circle style={styles.dot} fill="#84BDFF" width={25} height={25} margin={15}/>
          <Text style={styles.title}>Buzzword-a-thon</Text>
          </View>
          <View >
          <Circle style={styles.dot} fill="#FF9EF9" width={25} height={25} margin={15}/>
          <Text style={styles.title}>Buzzword-a-thon</Text>
        </View>
        </View>
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
div2: {
    backgroundColor: "white",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    paddingTop: 20,
    paddingLeft: 10
  },
  title: {
    position: "absolute",
    fontSize: 16,
    top: 15,
    left: 60
  },
  broll: {
    backgroundColor: "white",
    height: "29%"
  },
  calendar: {
    marginTop: -5,
    marginBottom: 10
  }
      
})