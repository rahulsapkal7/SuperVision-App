import React, { Component } from 'react';
import { Container, Content, Button,Footer, FooterTab,Icon, Text } from 'native-base';
import { AppRegistry, FlatList, StyleSheet,ScrollView, Alert, View,TouchableOpacity,Image } from 'react-native';
import {NavigationActions} from 'react-navigation';
import { Col, Row, Grid } from "react-native-easy-grid";
import Dash from 'react-native-dash';

const starIcon =  <Icon style={{ color: "white" , paddingLeft:15}} name="star" />
const LocateIcon =  <Icon style={{ color: "white" , paddingLeft:15}} name="locate" />
const SearchIcon =  <Icon style={{ color: "white", paddingLeft:15 }} name="search" />
const SettingsIcon =  <Icon style={{ color: "white", paddingLeft:15 }} name="settings" />

export default class Screen4 extends Component {
  constructor(props) {
    super(props);
    console.log('inside screen 4');
    this.state = {
    
      StoreData : [{CategoryName:"Complaint Initiation",logo:starIcon},{CategoryName:"Review",logo:LocateIcon},{CategoryName:"Site Visit",logo:SearchIcon},{CategoryName:"Activity",logo:SettingsIcon}]
    }
    console.log("props are --> ",JSON.stringify(props));
    
  }
  renderItem=({item})=>{
    return(
   
      
      <Grid style={{ height: 100 }}>
      <Col style={{ width: "20%",
            alignItems:'center', }}>
             <TouchableOpacity
              style={{
                  borderWidth:1,
                  top:1,
                  borderColor:'rgba(0,0,0,0.2)',
                  alignItems:'center',
                  justifyContent: "center",
                  width:40,
                  height:40,
                  backgroundColor:'#FBFBFB',
                  borderRadius:20,
                }}
            >
   <Icon name={"walk"} style={{fontSize: 20, color: '#585858'}}  />
 </TouchableOpacity>
      <Dash dashColor="#FBFBFB" dashStyle={{borderRadius: 100, overflow: 'hidden'}} style={{width:1,height: 60,flexDirection:'column',}}/>
     
      
      </Col>
      <Col style={{ width: "80%",flexDirection:'column' }}>
              <Text  style={{ fontSize: 13,fontWeight: 'bold',color: '#fff',paddingTop:10}}>Walk to lorem ipsum dolar team station</Text>
              <Text   style={{ fontSize: 13,fontWeight: 'bold',color: '#fff',paddingTop:5}}>4 minutes</Text>
              <View style={{ flexDirection:'row' ,paddingTop:5}}>
              <TouchableOpacity>
              <Text  style={{ fontSize: 13,fontWeight: 'bold',color: '#B4DAB5',}}>Directions</Text>
              </TouchableOpacity>
              <Text   style={{ fontSize: 13,fontWeight: 'bold',color: '#fff',paddingLeft:5}}>|</Text>
             
              <TouchableOpacity>
              <Text  style={{ fontSize: 13,fontWeight: 'bold',color: '#B4DAB5',paddingLeft:5}}>Map View</Text>
              </TouchableOpacity>
                </View>
                <View
                style={{
                  borderBottomColor: '#555253',
                  paddingTop:15,
                  borderBottomWidth: 2,
                }}
              />
      </Col>
  </Grid>
        )
}
  render() {
    return (
      <Container>
          <View style={styles.Headercontainer}>
        <Text style={styles.HeaderTitle}>
         Your Logo
        </Text>
    </View>
        <Content style={styles.Contentcontainer} >
        <View style={styles.container}>
        <Text style={styles.lable}>Journey to ...</Text>
        <Text style={styles.logo}>Your Destination</Text>
        <FlatList
          data={this.state.StoreData}
          renderItem={this.renderItem}
        />
        
     </View>
        </Content>
       
      </Container>
     
    );
  }
}

const styles = StyleSheet.create({
  Headercontainer: {
    flexDirection: 'row',
    
    height: 100,
    width: '100%',
    backgroundColor: '#B4DAB5',
    alignItems: 'center',
  justifyContent: 'center',
    // borderColor : "yellow",     borderWidth : 1,
  },
  Titlecontainer: {
    width: '70%',
   // marginLeft: '15%',
    alignItems: 'center'
  },
  footerContainer: {
    height: 100,
   
  },
  footerTabContainer: {
   
    backgroundColor: '#434544',
  },
  Titlecontainer: {
    width: '70%',
   // marginLeft: '15%',
    alignItems: 'center'
  },
  Contentcontainer: {
   
    backgroundColor: '#6D6D6D'
    // backgroundColor: '#5011B7'
    
    
    // alignItems: 'center'
  },
  container: {
    flex: 1,
    padding: "5%",
    // height: '90%',  
   },
  text: {
    alignItems: 'center',
    fontSize: 15,
    // marginTop: 5,
    fontWeight: 'bold',
    color: 'white'
    // color: '#0094d8'
    
  },
  HeaderTitle: {
    alignItems: 'center',
    fontSize: 30,
    marginTop: 5,
    fontWeight: 'bold',
    color: 'white'
    // color: '#0094d8'
  },
  card_outer: {
    borderWidth:1,
      borderRadius:2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor:'#000', 
      shadowOpacity: 0.5,
      shadowRadius: 5,
       padding: 10,
      elevation: 5,
      marginBottom:15,
      marginLeft: 5,
      backgroundColor:'#434544',
      flex: 1,        
      marginRight: 5, 
      marginTop: 15,
      flexDirection:'column',
      // height: '80%', 
},
horizontal_view: { 
  flexDirection: 'row', 
  alignItems: 'center',


},
txtStyle_Thirty: {  
  fontSize: 20,
  color:'white',
  fontWeight:'300',
  paddingLeft:15
},
logo: {
  fontSize: 20,
  // textAlign: 'center',
  fontWeight: 'bold',
  color: '#fff',
  paddingBottom:20
},
lable : {
  fontSize: 10,
  fontWeight: 'bold',
  color: '#fff',
},
box : {
  flex:1,
    backgroundColor: '#450A9D',
    // margin:10,
    // padding:10,
    width:150,
    alignItems: 'center',
    // alignItems: 'center',
  justifyContent: 'center',
  height : 150
},
box1 : {
  flex:1,
    backgroundColor: '#450A9D',
    // margin:10,
    marginLeft:20,
    width:150,
    alignItems: 'center',
    // alignItems: 'center',
  justifyContent: 'center',
  height : 150
},
ProfileBorder: {
  borderColor: 'honeydew',
  borderWidth: 1,
  borderRadius: 50,
  height: 100,
  width: 100,
  margin: 10
},
dotedLine : {
  borderStyle: 'dashed',
  borderWidth: 1,
  borderRadius: 1,
  width:1,

  height:100,
  flexDirection:"row"
}

});