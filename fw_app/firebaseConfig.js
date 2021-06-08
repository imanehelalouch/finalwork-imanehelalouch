import * as firebase from 'firebase';
import "firebase/firestore";
import React, {Component} from 'react';
import {View, Text, ImageComponent,StatusBar, Image,TextInput, StyleSheet, TouchableOpacity,} from 'react-native';


var firebaseConfig = {
    apiKey: "AIzaSyCDZUli-R2q1q8-Cxm1WwhRIRS72Jh2Mbo",
    authDomain: "finalwork-reactnative.firebaseapp.com",
    projectId: "finalwork-reactnative",
    storageBucket: "finalwork-reactnative.appspot.com",
    messagingSenderId: "968399824260",
    appId: "1:968399824260:web:8d72f9da262b9ee17de9d1",
    measurementId: "G-K8KWV5GW71"
};

const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(app);

class FirebaseApp extends Component {
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
}

export const ClubsRef = db.collection("clubs");

export { firebase };

export default FirebaseApp;
