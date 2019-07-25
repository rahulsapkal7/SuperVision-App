import React, { Component } from 'react';
import { Container, Content, Button,Footer, FooterTab,Icon, Text, Tab, Tabs, TabHeading,Header  } from 'native-base';
import { AppRegistry, FlatList, StyleSheet,ScrollView, Alert, View,TouchableOpacity,Image } from 'react-native';
import {NavigationActions} from 'react-navigation';
import HeaderDemo from '../components/headerDemo';
// import NotesList from './notesList';
// import EmailList from './emailList';


export default class Activities extends Component {
  constructor(props) {
    super(props);
    console.log("props are --> ",JSON.stringify(props));
  }

  render() {
    return (
      <Container>
                <HeaderDemo  title={'Activities'}  back={() => { this.props.navigation.goBack(null)}}
                            goToDashboard = {() =>{ this.props.navigation.navigate('Dashboard') } } />
                <Content style={styles.Contentcontainer} >
                           
                                    <Tabs>
                                    <Tab heading={ <TabHeading style={{backgroundColor:"green"}}><Icon name="calendar" /><Text>Notes</Text></TabHeading>}>
                                    <View style={styles.container}>
                                    <View style={{height:25,width:"100%",flexDirection:"row"}}>
                                    <TouchableOpacity style={{marginLeft:"85%"}} >
                                    <Icon style={{ color: "blue" ,fontSize:20}} name="arrow-down" />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{marginLeft:10}} >
                                    <Icon style={{ color: "blue" ,fontSize:20}} name="options" />
                                    </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity style={{ flex:1,flexDirection:'column',marginTop:3}}  >
                                                <View style={styles.card_outer}>
                                                <View style={{ backgroundColor:"#772395",padding:5 }} >
                                                <Icon style={{ color: "#FFFFFF" ,fontSize:25}} name="calendar" />
                                                </View>
                                                <View style={{flexDirection:'column',padding:5 ,paddingLeft:10}} >
                                                <Text style={styles.ListTitleText} >23/05/2019 </Text>
                                                <Text style={styles.ListContaintText}>Sample Note </Text>
                                                <Text style={styles.ListContaintText}>Inside Notes there is dummy data present </Text>
                                                </View>
                                                </View> 
                                      </TouchableOpacity>
                                      <TouchableOpacity style={{ flex:1,flexDirection:'column',marginBottom:3}}  >
                                                <View style={styles.card_outer}>
                                                <View style={{ backgroundColor:"#772395",padding:5 }} >
                                                <Icon style={{ color: "#FFFFFF" ,fontSize:25}} name="calendar" />
                                                </View>
                                                <View style={{flexDirection:'column',padding:5 ,paddingLeft:10}} >
                                                <Text style={styles.ListTitleText} >23/05/2019 </Text>
                                                <Text style={styles.ListContaintText}>Sample Note </Text>
                                                <Text style={styles.ListContaintText}>Inside Notes there is dummy data present </Text>
                                                </View>
                                                </View> 
                                      </TouchableOpacity>
                                      <TouchableOpacity style={{ flex:1,flexDirection:'column',marginBottom:3}}  >
                                                <View style={styles.card_outer}>
                                                <View style={{ backgroundColor:"#772395",padding:5 }} >
                                                <Icon style={{ color: "#FFFFFF" ,fontSize:25}} name="calendar" />
                                                </View>
                                                <View style={{flexDirection:'column',padding:5 ,paddingLeft:10}} >
                                                <Text style={styles.ListTitleText} >23/05/2019 </Text>
                                                <Text style={styles.ListContaintText}>Sample Note </Text>
                                                <Text style={styles.ListContaintText}>Inside Notes there is dummy data present </Text>
                                                </View>
                                                </View> 
                                      </TouchableOpacity>
                                      <View style={{alignItems: 'center'}}>
                                    <TouchableOpacity style={{height:50,width:50,borderRadius:25,backgroundColor:"green",alignItems: 'center',marginTop:50}} >
                                    <Icon style={{ color: "#FFF" ,fontSize:50}} name="add" />
                                    </TouchableOpacity>
                                  </View>
                                    </View>
                                 
                                    </Tab>
                                    <Tab  heading={ <TabHeading style={{backgroundColor:"green"}}><Icon name="mail" /><Text>Emails</Text></TabHeading>}>
                                    <View style={styles.container}>
                                    <View style={{height:25,width:"100%",flexDirection:"row"}}>
                                    <TouchableOpacity style={{marginLeft:"85%"}} >
                                    <Icon style={{ color: "blue" ,fontSize:20}} name="arrow-down" />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{marginLeft:10}} >
                                    <Icon style={{ color: "blue" ,fontSize:20}} name="options" />
                                    </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity style={{ flex:1,flexDirection:'column',marginTop:3}}  >
                                                <View style={styles.card_outer}>
                                                <View style={{ backgroundColor:"#772395",padding:5 }} >
                                                <Icon style={{ color: "#FFFFFF" ,fontSize:25}} name="text" />
                                                </View>
                                                <View style={{flexDirection:'column',padding:5 ,paddingLeft:10}} >
                                                <Text style={styles.ListTitleText} >Subject : Dummy Mail</Text>
                                                <Text style={styles.ListContaintText}>To : dummy@gmail.com </Text>
                                                <Text style={styles.ListContaintText}>Today</Text>
                                                </View>
                                                </View> 
                                      </TouchableOpacity>
                                      <TouchableOpacity style={{ flex:1,flexDirection:'column',marginBottom:3}}  >
                                                <View style={styles.card_outer}>
                                                <View style={{ backgroundColor:"#772395",padding:5 }} >
                                                <Icon style={{ color: "#FFFFFF" ,fontSize:25}} name="text" />
                                                </View>
                                                <View style={{flexDirection:'column',padding:5 ,paddingLeft:10}} >
                                                <Text style={styles.ListTitleText} >Subject : Dummy Mail</Text>
                                                <Text style={styles.ListContaintText}>To : dummy@gmail.com </Text>
                                                <Text style={styles.ListContaintText}>12/05/2019</Text> 
                                                </View>
                                                </View> 
                                      </TouchableOpacity>
                                      <TouchableOpacity style={{ flex:1,flexDirection:'column',marginBottom:3}}  >
                                                <View style={styles.card_outer}>
                                                <View style={{ backgroundColor:"#772395",padding:5 }} >
                                                <Icon style={{ color: "#FFFFFF" ,fontSize:25}} name="text" />
                                                </View>
                                                <View style={{flexDirection:'column',padding:5 ,paddingLeft:10}} >
                                                <Text style={styles.ListTitleText} >Subject : Dummy Mail</Text>
                                                <Text style={styles.ListContaintText}>To : dummy@gmail.com </Text>
                                                <Text style={styles.ListContaintText}>11/05/2019</Text>
                                                </View>
                                                </View> 
                                      </TouchableOpacity>
                                    </View>
                                    <View style={{alignItems: 'center'}}>
                                    <TouchableOpacity style={{height:50,width:50,borderRadius:25,backgroundColor:"green",alignItems: 'center',bottom:0}}>
                                    <Icon style={{ color: "#FFF" ,fontSize:50}} name="add" />
                                    </TouchableOpacity>
                                  </View>
                                    
                                    </Tab>
                                    </Tabs>
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
      padding: "3%",
     
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
        paddingTop: 5,
        paddingBottom: 5,
        borderBottomWidth: 0.5,
        borderColor: '#c9c9c9',
        flexDirection: 'row',
        alignItems: 'center',
  },
  caseDetailCard:{
    backgroundColor: "#022060",
    padding: 10,
    margin:5,
    fontStyle: "italic",
    }
  
  });