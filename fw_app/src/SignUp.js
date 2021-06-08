import React, {Component} from 'react';
import {View, Text, ImageComponent, StatusBar, TextInput, Image, StyleSheet, TouchableOpacity} from 'react-native';
import GlobalFont from 'react-native-global-font';

import * as firebase from 'firebase';


import {Container, Header, Content, Form, Input, Item, Button, Label} from 'native-base';

export default class SignUp extends Component
{

  componentDidMount() {
    let fontName = 'Poppins'
    GlobalFont.applyGlobal(fontName)   //<------- Added font family golbally 
 }

  Landing=()=>
  {
    this.props.navigation.navigate('Home');
  }
 constructor(props) {
   super(props);

   this.state = ({
     email:'',
     password:''
   })
   signUp = (email, password)=>{
     try{
       if(this.state.password.length<6) {
         alert("Password must exceed 6 characters.");
         return;
       }
       firebase.auth().createUserWithEmailAndPassword(email,password);
       console.log("New User Made: " + email);
       this.Landing();
     }
     catch (error) {
       console.log(error.toString())
     }
   }

 }

  render() {

    return(
      <Container style={styles.suContainer}>
      <StatusBar backgroundColor='white' barStyle="dark-content" />
        <Image style={styles.logo} source={require('../images/discoveread.png')} />
        <Text style={styles.title}>SIGN UP</Text>
        <Form style={styles.form}>
          

          <TextInput
          style={styles.input}
          placeholder="email"
          autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(email)=> this.setState({email})}/>
            

        <TextInput
          style={styles.input}
          placeholder="password"
          autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={(password)=> this.setState({password})}/>

          
          
          <Button
          style={styles.signUp}
          full
          rounded
          success
          onPress= {()=> signUp(this.state.email, this.state.password)}>
            <Text style={styles.signUpText}>Get Started</Text>
          </Button>
        </Form>
        {/* <Button>
          <Text>I already have an account</Text>
        </Button> */}
      </Container>
      
    );

}
  
}
const styles = StyleSheet.create({
  suContainer: {
    justifyContent: "center",
    backgroundColor: "white",
    height: "100%"
  },
  logo: {
    width: 150,
    height: 90,
    justifyContent: "center",
    marginBottom: 80,
    marginTop:0,
    alignSelf: "center"
  },
  title: {
    color: "black",
    fontSize: 20,
fontWeight: "bold",
    textAlign: "center"
    
  },
  text: {
    color: "black",
    fontSize: 15,
    padding: 30,
    textAlign: "center"
    
  },
  signUp : {
    marginTop: 0,
    backgroundColor: "#3E71FF",
    color: 'white',
    borderRadius: 5
  },
  signInText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold"
  },
  signUpText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold"
  },
  form: {
    margin: 30
  },
  item : {
    marginBottom: 10,
  },
  input: {
    borderWidth: .7,
    borderColor: "#e2e2e2",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
})