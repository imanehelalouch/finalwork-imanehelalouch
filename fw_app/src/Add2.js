import React, {Component,useState} from 'react';
import {SafeAreaView, View, Text, ImageComponent,ScrollView,TextInput,Form, Image, Button,FlatList, StyleSheet, TouchableOpacity} from 'react-native';
//import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';
import { AlignLeft } from "react-native-feather";
import { ArrowLeft } from "react-native-feather";
import { ArrowRight } from "react-native-feather";
import { X } from "react-native-feather";
import { PlusCircle } from "react-native-feather";
import { Trash } from "react-native-feather";
import GlobalFont from 'react-native-global-font';
import * as firebase from 'firebase';
//import {GoogleBookSearch} from 'react-native-google-books';

//const [inputs, setInputs] = useState([{key: '', value: ''}]);

export default class Add2 extends Component {
// function Add2() {
//   const [challenge, setChallenge]=useState('');
//   const [clubs, setClubs] = useState('');
//   const ref = firebase.firestore().collection("clubs");
//   console.log(ref)

//   async function Add(){

//     setChallenge('');
    
//   }

//   async function Delete() {
    
//   }

//   function Back()
//   {
//     //this.props.navigation.navigate('Add1');
//   }
//   function Next()
//   {
//     //this.props.navigation.navigate('Add3');
//   }
componentDidMount() {
    let fontName = 'Inter'

    GlobalFont.applyGlobal(fontName)   //<------- Added font family golbally
 }
  Back=()=>
  {
    this.props.navigation.navigate('Add1');
  }
  Next=()=>
  {
    this.props.navigation.navigate('Add3');
  }

constructor(props) {
  super(props)
  this.state = {
    titles: []
  }
  //const [inputs, setInputs] = useState([{key: '', value: ''}]);

}
  // const [inputs, setInputs] = useState([{key: '', value: ''}]);

  addField = () => {
    this.setState({titles: [...this.state.titles, ""]})

  }
  handleChange = (e, index) => {
    this.state.titles[index] = e.target.value
  }

  deleteField = (index)=> {
    this.state.titles.splice(index,1)
    this.setState({titles: this.state.titles})
  }



  render() {
  //const [inputs, setInputs] = useState([{key: '', value: ''}]);

return(
  <>
      <View style={styles.profilepage}>
        <View style={styles.navbar}>
        <TouchableOpacity activeOpacity={0.95}  onPress={this.Back} style={styles.to}>
          <ArrowLeft style={styles.menu} stroke="white"  width={25} height={25} margin={15}/>
{/* <Bell style={styles.notif} stroke="white"  width={25} height={25} margin={15}/> */}
          <Text style={styles.title}>2/3 ADD CHALLENGES</Text>
        </TouchableOpacity>

        </View>
        <View style={styles.div2}>
          <ScrollView>



{this.state.titles.map((title, index)=>(
        <View>
          <TextInput
          key={index}
          style={styles.input}
          placeholder="challenge"
          value={title}
          onChangeText={(e)=>this.handleChange(e,index)}
          // value={challenge}
          // onChangeText={setChallenge}
          />

          <TouchableOpacity activeOpacity={0.95} style={styles.add} onPress={()=> this.deleteField(index)}>
          <Trash stroke="red"  width={25} height={25} margin={15}/>

        </TouchableOpacity>
        </View>

))}



        <TouchableOpacity onPress={this.addField}>
          <PlusCircle stroke="#3e71ff"  style={styles.plus} width={25} height={25} margin={15}/>
          <Text style={styles.addone}>Add one</Text>
        </TouchableOpacity>
</ScrollView>
        {/* <View style={styles.list}>
          <Text style={styles.listtext}>Read a poetry book</Text>
          <TouchableOpacity activeOpacity={0.95} style={styles.delete} onPress={()=> {Delete()}}>
          <Trash stroke="red"  width={25} height={25} margin={15}/>
          </TouchableOpacity>
        </View> */}

        
        

{/* <GoogleBookSearch
style={styles.search}
     apikey={"AIzaSyCX8RkeesFys46pJLF2BxH2m5dzmJYI4lw"}
     onResultPress={(book)=> console.log(book)}
     searchContainerStyle={{marginTop:32}}
    searchInputStyle={{fontSize:16}}
    resultContainerStyle={{padding:4}}

    interval={300}
    searchResult={(result) => console.log(result)}   
  /> */}


        <TouchableOpacity activeOpacity={0.95} style={styles.start} onPress={this.Next}>
          <ArrowRight stroke="#fff"  width={25} height={25} margin={15}/>

        </TouchableOpacity>
        </View>
        <View style={styles.broll}>
            </View>
      </View>
      </>
)
//}
}
}

//export default Add2;



const styles = StyleSheet.create({
  profilepage: {
    backgroundColor: "#3E71FF",
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
    bottom: 30
  },
  to: {
    height: 50
  },
  div2: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5, 
    backgroundColor: "white",
    justifyContent: "center",
    height: "93%"
  },
  search: {
    zIndex: 22,
    elevation: 22
  },
  add: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: 0,
    margin: 15,
  },
  input: {
    borderWidth: .7,
    borderColor: "#e2e2e2",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    margin: 20,marginRight: 75
  },
  list: {
marginBottom: 15
  },
  listtext: {
    marginLeft: 20,
    
    paddingTop: 19,
    marginRight: 75,
  },
  delete: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: 0,
    marginRight: 15,
  },
 
  addone: {
    color: "#3e71ff",
    fontWeight: "bold",
    position: "absolute",
    top: 17,
    left: 55
  },
  plus: {
    marginLeft: 20
  }

})