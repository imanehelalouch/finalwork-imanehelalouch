import React, {Component,useState} from 'react';
import {StatusBar,SafeAreaView, View, Text,List, ImageComponent, Image, Button,FlatList, StyleSheet, TouchableOpacity} from 'react-native';
//import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';

import { Square } from "react-native-feather";
import { Circle } from "react-native-feather";
import { Grid } from "react-native-feather";
import Swiper from "react-native-web-swiper";
import { AlignLeft } from "react-native-feather";
import { Bell } from "react-native-feather";
import { Search } from "react-native-feather";
import { Plus } from "react-native-feather";
import { Sliders } from "react-native-feather";
import { PlusCircle } from "react-native-feather";
import { CheckCircle } from "react-native-feather";
import GlobalFont from 'react-native-global-font';
import { BrowserRouter } from 'react-router-dom';
import RadioButtonRN from 'radio-buttons-react-native';
import "firebase/firestore";
import * as firebase from 'firebase';
import firestore from '@firebase/firestore';




export default class Home extends Component 
{

  state = {
        club: {
            name: ""
        }
    }
  constructor(props) {
    super(props);
    this.getClub();
    this.subscriber = firebase().collection('clubs').doc('WJ2kAa9E5zNjFwmdIOJ1').onSnapshot(doc =>{
        this.setState({
            club: {
                name: doc.data().name
            }
        })
    })
  }

  getClub = async () => {
    const clubDocument = firebase().collection('clubs').doc('WJ2kAa9E5zNjFwmdIOJ1').get()
    console.log(clubDocument);
  }

  // state = {
  //   clubs: [],
  // };

  // ReadClubsRef() {
    
  //   ClubsRef.onSnapshot(querySnapShot => {
  //     let clubss = [];
  //     querySnapShot.forEach((doc)=> {
  //       clubss.push(doc.data());
  //     });
  //     this.setState({clubs: clubss})
  //   });
  // }
  // componentDidMount(){
  //   this.ReadClubsRef();
  // }

  componentDidMount() {
    let fontName = 'Poppins'
    GlobalFont.applyGlobal(fontName)   //<------- Added font family golbally 
 }
  Menu=()=>
  {
    this.props.navigation.navigate('Menu');
  }
  Add=()=>
  {
    this.props.navigation.navigate('Add1');
  }
  Detail=()=>
  {
    this.props.navigation.navigate('Detail');
  }
  render() {

    return(
      

      <View style={styles.home}>
<StatusBar backgroundColor='#3A6CF3' barStyle="dark-content" />
        <View style={styles.div1}>
          <View style={styles.navbar}>
          <AlignLeft onPress={() => this.Menu()} style={styles.menu} stroke="white" fill="white" width={25} height={25} margin={15}/>
          {/* <Bell style={styles.notif} stroke="white"  width={32} height={32} margin={15}/> */}
          </View>


<View style={styles.container}>
                <Swiper
                  controlsProps={{
                      dotsTouchable: true,
                      dotsTouchable: false,
                      prevPos: 'left',
                      nextPos: 'right',
                      nextTitle: '',
                      prevTitle: '',   
                      dotActiveStyle: { backgroundColor: 'white' }, 
                      dotStyle: { backgroundColor: 'rgba(255, 255, 255, 0.4)' },  
                      
                    }}>
                    <View style={[styles.slideContainer,styles.slide1]}>
                        <View style={styles.slider}>
                          <View style={styles.cover}>
                            <Image style={styles.cover1} source={require('../images/cover0.jpg')} />

                          </View>
                          <Text style={styles.bookTitle}>It Ends With Us</Text>
                          <Text style={styles.bookAuthor}>Colleen Hoover</Text>
                          <View style={styles.subdiv}>
                            <Text style={styles.title}>Read a book with a flower</Text>
                            <Text style={styles.subtitle}>Buzzword-a-thon</Text>
                            <CheckCircle style={styles.CheckCircle} stroke="#efefef"  width={25} height={25} margin={15}/>
                          </View>
                        </View>
                    </View>
                    <View style={[styles.slideContainer,styles.slide2]}>
                        <View style={styles.slider}>
                          <View style={styles.cover}>
                            <Image style={styles.cover1} source={require('../images/cover1.jpg')} />

                          </View>
                          <Text style={styles.bookTitle}>The Invisible Life of A. L.</Text>
                          <Text style={styles.bookAuthor}>V.E. Schwab</Text>
                          <View style={styles.subdiv}>
                            <Text style={styles.title}>Read a book from a new author</Text>
                            <Text style={styles.subtitle}>Buzzword-a-thon</Text>
                            <CheckCircle style={styles.CheckCircle} stroke="#efefef"  width={25} height={25} margin={15}/>
                          </View>
                        </View>
                    </View>
                    <View style={[styles.slideContainer,styles.slide3]}>
                        <View style={styles.slider}>
                          <View style={styles.cover}>
                            <Image style={styles.cover1} source={require('../images/cover2.jpg')} />

                          </View>
                          <Text style={styles.bookTitle}>A Large Expanse of Sea</Text>
                          <Text style={styles.bookAuthor}>Tahereh Mafi</Text>
                          <View style={styles.subdiv}>
                            <Text style={styles.title}>Read a book with a female MC</Text>
                            <Text style={styles.subtitle}>Booksplosiopn</Text>
                            <CheckCircle style={styles.CheckCircle} stroke="#efefef"  width={25} height={25} margin={15}/>
                          </View>
                        </View>
                    </View>
                </Swiper>
            </View>


          
          
        </View>

        <View style={styles.div2}>
        <Search style={styles.search} stroke="black"  width={20} height={20} margin={15}/>
        <Sliders style={styles.sliders} stroke="black"  width={20} height={20} margin={15}/>
        <Plus onPress={() => this.Add()} style={styles.plus} stroke="black"  width={25} height={25} margin={15}/>
        <View
          style={{
            borderBottomColor: '#efefef',
            borderBottomWidth: .2,
            marginTop: 62
          }}
        />

        <TouchableOpacity onPress={this.Detail}>
          <View style={styles.listitem}>
            <PlusCircle style={styles.plusCircle} stroke="#3E71FF"  width={25} height={25} margin={15}/>
            <Text style={styles.listitemtitle}>{this.state.club.name}</Text>
            <Text style={styles.listitemsubtitle}>7 challenges</Text>
          </View>
        </TouchableOpacity>
        
          <View style={styles.listitem}>
            <PlusCircle style={styles.plusCircle} stroke="#3E71FF"  width={25} height={25} margin={15}/>
            <Text style={styles.listitemtitle}>Spook-a-thon</Text>
            <Text style={styles.listitemsubtitle}>5 challenges</Text>
          </View>
        </View>
      </View>
      
    );
    
    
}

  
}
const styles = StyleSheet.create({
  home: {
    backgroundColor: "#3E71FF",
    alignContent: "center",
    justifyContent: "center",

  },
  div1: {
    height: "45%"
  },
  coming :  {
    color: "white",
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  div2: {
    backgroundColor: "white",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: "55%"
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
  slider: {
    width: "90%",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 5,
    alignSelf:"center",
    padding: 0,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 40,
    marginTop: 0
    
  },
  cover: {
    backgroundColor: "white",
    borderRadius: 5, 
    width: 75, 
    height: 100,
    marginTop: 25,
    marginLeft: 25, marginBottom: 20
  },
  cover1: {
backgroundColor: "white",
    borderRadius: 5, 
    width: 75, 
    height: 100,
  },
  bookTitle: {
    fontSize: 17,
    color: "white",
    fontWeight: "bold",
    paddingTop: 10, position: 'absolute', left: 115, top: 30,

  },
  bookAuthor: {
    color: "white",
    paddingTop: 10,position: 'absolute', left: 115, top: 65,

  },
  search: {
    alignSelf:"flex-end",
    position: "absolute",
    top: 5,
    right: 125,
    resizeMode: 'contain',
    flex: 1
  },
  sliders: {
    alignSelf:"flex-end",
    position: "absolute",
    top: 5,
    right: 65,
    resizeMode: 'contain',
    flex: 1
  },
  plus: {
    alignSelf:"flex-end",
    position: "absolute",
    top: 2,
    right: 5,
    resizeMode: 'contain',
    flex: 1
  },
  title: {
fontSize: 16,

 
  },
  subtitle: {

    color: "#B4B4B4"
  },
  subdiv: {
    backgroundColor: "white",
    padding: 20,
    paddingRight: 25,
    paddingLeft: 25,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,

  },
  CheckCircle: {
    alignSelf:"flex-end",
    position: "absolute",
    top: 5,
    right: 5,

  },
  listitemtitle: {
fontSize: 16, position: 'absolute', left: 60, top: 15,
  },
  listitemsubtitle: {

    color: "#B4B4B4",position: 'absolute', left: 60, top: 40
  },
  listitem: {
    marginBottom: 15,
    marginLeft:5
  },






  container: {
        flex: 1
    },
    slideContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    slide1: {
        backgroundColor: "transparent"
    },
    slide2: {
        backgroundColor: "transparent"
    },
    slide3: {
        backgroundColor: "transparent"
    },
      
})