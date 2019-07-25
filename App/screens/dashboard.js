import React, { Component } from 'react';
import { Container, Content, Button,Footer, FooterTab,Icon, Text } from 'native-base';
import { AppRegistry, FlatList, StyleSheet,ScrollView, Alert, View,TouchableOpacity,Image } from 'react-native';
import {NavigationActions} from 'react-navigation';



const starIcon =  <Icon style={{ color: "white" , paddingLeft:15}} name="star" />
const LocateIcon =  <Icon style={{ color: "white" , paddingLeft:15}} name="locate" />
const AddIcon =  <Icon style={{ color: "white" , paddingLeft:15}} name="add" />

const SearchIcon =  <Icon style={{ color: "white", paddingLeft:15 }} name="search" />
const SettingsIcon =  <Icon style={{ color: "white", paddingLeft:15 }} name="settings" />

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    console.log('inside Dashboard ');
    this.state = {
    
      StoreData : [{CategoryName:"My Cases",logo:starIcon},{CategoryName:"New Case",logo:AddIcon}]
    }
    console.log("props are --> ",JSON.stringify(props));
    
  }
  renderItem=({item})=>{
    return(
   
      <TouchableOpacity style={{ flex:1,flexDirection:'column'}} onPress ={() => this.props.navigation.navigate('CaseList') } >
        <View style={styles.card_outer}>
            <View style={styles.horizontal_view}>
            {item.logo}
            <Text style={styles.txtStyle_Thirty}>
                {item.CategoryName}
            </Text>
            </View>
        </View> 
        </TouchableOpacity>
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
        <Text style={styles.logo}>Supervision App</Text>
        
        {/* <FlatList
          data={this.state.StoreData}
          renderItem={this.renderItem}
        /> */}
        <TouchableOpacity style={{ flex:1,flexDirection:'column'}} onPress ={() => this.props.navigation.navigate('CaseList') } >
        <View style={styles.card_outer}>
            <View style={styles.horizontal_view}>
            <Icon style={{ color: "white" , paddingLeft:15}} name="star" />
            <Text style={styles.txtStyle_Thirty}>
            My Active Cases
            </Text>
            </View>
        </View> 
        </TouchableOpacity>
        <TouchableOpacity style={{ flex:1,flexDirection:'column'}} 
        onPress ={() =>{ this.props.navigation.navigate('CaseDetail', {newCase : true } ) }}
        >
        <View style={styles.card_outer}>
            <View style={styles.horizontal_view}>
            <Icon style={{ color: "white" , paddingLeft:15}} name="add" />
            <Text style={styles.txtStyle_Thirty}>
            New Case
            </Text>
            </View>
        </View> 
        </TouchableOpacity>
        

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
    // backgroundColor: '#B4DAB5',
    backgroundColor: '#166F3C',
    
    alignItems: 'center',
    // alignItems: 'center',
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
   
    // backgroundColor: '#6D6D6D'
    backgroundColor: '#FFFFFF'
    
    
    // alignItems: 'center'
  },
  container: {
    flex: 1,
    padding: "10%",
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
      // backgroundColor:'#434544',
      backgroundColor:'#2D953D',
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
  fontWeight:'400',
  paddingLeft:15
},
logo: {
  fontSize: 30,
  // textAlign: 'center',
  margin: 10,
  fontWeight: 'bold',
  color: '#fff',
  marginBottom: 30
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


});