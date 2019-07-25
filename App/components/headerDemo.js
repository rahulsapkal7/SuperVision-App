import React, { Component } from 'react';
import {Platform, View,Text, StyleSheet,Image, TouchableOpacity,ToolbarAndroid} from 'react-native';
import {  Button, Icon, Badge } from 'native-base';


// const MoreIcon =;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: (Platform.OS === 'ios')
      ? 100
      : 60,
    width: '100%',
    // backgroundColor: '#B4DAB5',
    backgroundColor: '#166F3C',
    
    alignItems: 'center',
    // borderColor : "yellow",     borderWidth : 1,
  },
  Titlecontainer: {
    width: '70%',
   // marginLeft: '15%',
    alignItems: 'center'
  },
  Menucontainer:{
    width: '15%',
    alignItems: 'center',
    // marginTop: 5,
    
    // backgroundColor:'blue' 
  },
  Backcontainer: {
    width: '15%',
    alignItems: 'center'
    
  },
  SearchContainer :{
    width: '10%',
    alignItems: 'center'
    
  },
  text: {
    alignItems: 'center',
    fontSize: 22,
    marginTop: 5,
    fontWeight: 'bold',
    color: 'white'
    // color: '#0094d8'
  },
  TxtIP: {
    fontSize: 20,
    marginTop: 5,
    //top : 3,
    alignItems: 'center',
    // fontWeight: 'bold', top:10,
    color: '#818285'
  },
  image_style:{
    width:30,
    height:30
  }
});

class headerDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
     

  };
  console.log("props are ",props);
  }
  
  render() {
  return (

    <View style={styles.container}>
        <TouchableOpacity style={styles.Backcontainer} onPress={this.props.back}>
      <Icon name='arrow-back' style={{ color: "white" }} />
      </TouchableOpacity>
      <View style={styles.Titlecontainer}>
        <Text style={styles.text}>
          {this.props.title}
        </Text>
        
      </View>    
      <TouchableOpacity style={styles.Menucontainer}  onPress ={this.props.goToDashboard } >
      <Icon name='home' style={{ color: "white" }} />
     
     
    </TouchableOpacity>
   
    
    </View>
 

    
  );
}
}


export default (headerDemo);