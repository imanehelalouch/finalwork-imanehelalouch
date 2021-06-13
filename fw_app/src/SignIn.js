import React, {Component} from 'react';
import {View, Text, ImageComponent,StatusBar, Image,TextInput, StyleSheet, TouchableOpacity,} from 'react-native';
import GlobalFont from 'react-native-global-font';
import * as firebase from 'firebase';
import {Container, Header, Content, Form, Input, Item, Button, Label} from 'native-base';

export default class SignIn extends Component
{
  componentDidMount() {
    let fontName = 'Inter'
    GlobalFont.applyGlobal(fontName)   //<------- Added font family golbally 
 }

  Landing=()=>
  {
    this.props.navigation.navigate('Home');
  }
  SignUp=()=>
  {
    this.props.navigation.navigate('SignUp');
  }

 constructor(props) {
   super(props);

   this.state = ({
     email:'',
     password:''
   })
   signIn = (email, password)=>{
    try{
      
      firebase.auth().signInWithEmailAndPassword(email,password)
      .then(function (userCredential) {
        console.log(userCredential);
        var user = userCredential.user;
      });
      this.Landing();
      console.log("Logged in: " + email);
    }
    catch (error) {
      console.log(error.toString())
    }
   }

 }

 
  render() {

    return(
      
      <Container style={styles.siContainer}>
      <StatusBar backgroundColor='white' barStyle="dark-content" />
        <Image style={styles.logo} source={require('../images/discoveread.png')} />
        <Text style={styles.title}>SIGN IN</Text>
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
          style={styles.signIn}
          full
          rounded
          success
          onPress= {()=> signIn(this.state.email, this.state.password)}>
            <Text style={styles.signInText}>Continue</Text>
          </Button>
          
          <Button
          style={styles.signUp}
          full
          rounded
          success
          onPress= {this.SignUp}>
            <Text style={styles.signUpText}>Create an Account</Text>
          </Button>
          <Button
          style={styles.guest}
          full
          rounded
          success
          onPress= {this.Landing}>
            <Text style={styles.guestText}>Continue as guest</Text>
          </Button>
        </Form>
      </Container>
      
    );

}
  
}
const styles = StyleSheet.create({
  siContainer: {

    justifyContent: "center",
    backgroundColor: "white",
    height: "100%"
  },
  logo: {
    width: 150,
    height: 90,
    justifyContent: "center",
    marginBottom: 80,
    marginTop:70,
    alignSelf: "center"
  },
  title: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",

  },
  text: {
    color: "black",
    fontSize: 15,
    padding: 30,
    textAlign: "center",

  },
  signIn : {

    marginTop: 0,
    marginBottom: 10,
    backgroundColor: "#3E71FF",
    borderRadius: 5
  },
  signUp : {

    backgroundColor: "#2B2B2B",
    color: 'white',
    borderRadius: 5
  },
  signInText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",

  },
  signUpText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",

  },
  form: {
    margin: 30
  },
  input: {
    borderWidth: .7,
    borderColor: "#e2e2e2",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,

  },

guest : {
  marginTop: 10,
  backgroundColor: "transparent",
  borderColor: "black",
  borderWidth: 2,
  borderRadius: 5
},
guestText: {
  color: "black",

}
})