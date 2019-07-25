import React, { Component } from 'react';
import { Container, Content, Button,Footer, FooterTab,Icon, List, ListItem, Left, Thumbnail, Body, Text, } from 'native-base';
import { AppRegistry, FlatList, StyleSheet,ScrollView, Alert, View,TouchableOpacity,Image,  } from 'react-native';
import {NavigationActions} from 'react-navigation';
import HeaderDemo from '../components/headerDemo';
const starIcon =  <Icon style={{ color: "white" , paddingLeft:15}} name="star" />
const LocateIcon =  <Icon style={{ color: "white" , paddingLeft:15}} name="locate" />
const AddIcon =  <Icon style={{ color: "white" , paddingLeft:15}} name="add" />
const SearchIcon =  <Icon style={{ color: "white", paddingLeft:15 }} name="search" />
const SettingsIcon =  <Icon style={{ color: "white", paddingLeft:15 }} name="settings" />

export default class CaseList extends Component {
  constructor(props) {
    super(props);
    console.log('inside screen 1');
    this.state = {
    
      StoreData : [{caseTitle:"Not Processing Copies of property documents",caseNo:"CO-2323455556", caseType:"Complaint"},
      {caseTitle:"Other-Query-manish@gmail.com",caseNo:"CO-34562345", caseType:"Query"},
      {caseTitle:"Other-Complaint-manish jadhav",caseNo:"CO-4599656695", caseType:"Complaint"},
      {caseTitle:"Lorem Ipsum is simply text of the printing and typesetting ",caseNo:"CO-5968596859", caseType:"Accepted"},
      {caseTitle:"It is a long established fact that a reader will be distracted by the ",caseNo:"CO-5388438394", caseType:"Complaint"},
      {caseTitle:"Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been the industry's",caseNo:"CO-4384483993", caseType:"Complaint"},
      {caseTitle:"Other-Query-manish@gmail.com",caseNo:"CO-3849389480", caseType:"Accepted"},
      {caseTitle:"Not Procession Copies of property documents",caseNo:"CO-3784783793", caseType:"Complaint"},
      {caseTitle:"It is a long established fact that a reader will be distracted by the",caseNo:"CO-3493849883", caseType:"Query"},
      {caseTitle:"Other-Query-manish@gmail.com",caseNo:"CO-3489384993", caseType:"Complaint"},
      {caseTitle:"Not Procession Copies of property documents",caseNo:"CO-2329388383", caseType:"Complaint"},
    ]
    }
    console.log("props are --> ",JSON.stringify(props));
    
  }
  renderItem=({item})=>{
    return(
     
        <TouchableOpacity style={{ flex:1,flexDirection:'column',marginBottom:3}} 
        onPress ={() =>{ this.props.navigation.navigate('CaseDetail', {newCase : false } ) }}
         >
            <View style={styles.card_outer}>
            <View style={{ backgroundColor:"#772395",padding:5 }} >
            <Icon style={{ color: "#FFFFFF" ,fontSize:25}} name="paper" />
            </View>
            <View style={{flexDirection:'column',padding:5 ,paddingLeft:10}} >
            <Text style={styles.ListTitleText} >{item.caseTitle} </Text>
            <Text style={styles.ListContaintText}>{item.caseNo} </Text>
            <Text style={styles.ListContaintText}>{item.caseType} </Text>
            
            </View>
           
            </View> 
        </TouchableOpacity>
        )
}
  render() {
    return (
      <Container>
            <HeaderDemo  title={'My Active Cases'}  back={() => { this.props.navigation.goBack(null)}}
                  goToDashboard = {() =>{ this.props.navigation.navigate('Dashboard') } } />
            <Content style={styles.Contentcontainer} >
                    <View style={styles.container}>
                            <FlatList data={this.state.StoreData} renderItem={this.renderItem} />
                    </View>
             </Content>
      </Container>
     
    );
  }
}

const styles = StyleSheet.create({
  Contentcontainer: {
         backgroundColor: '#FFFFFF'
  },
  container: {
    flex: 1,
    padding: "5%",
   
   },
  ListTitleText: {
    alignItems: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black'
  },
  ListContaintText: {
    alignItems: 'center',
    fontSize: 11,
    color: 'gray'
  },
  card_outer: {
      flex: 1,
      paddingRight: 15,
      paddingTop: 13,
      paddingBottom: 13,
      borderBottomWidth: 0.5,
      borderColor: '#c9c9c9',
      flexDirection: 'row',
      alignItems: 'center',
},


});