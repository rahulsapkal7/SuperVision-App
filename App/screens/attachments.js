import React, { Component } from 'react';
import { Container, Content, Button,Footer, FooterTab,Icon, Text } from 'native-base';
import { AppRegistry, FlatList, StyleSheet,ScrollView, Alert, View,TouchableOpacity,Image } from 'react-native';
import {NavigationActions} from 'react-navigation';
import HeaderDemo from '../components/headerDemo';



export default class Attachments extends Component {
  constructor(props) {
    super(props);
    console.log("props are --> ",JSON.stringify(props));
  }

  render() {
    return (
      <Container>
                <HeaderDemo  title={'Attachments'}  back={() => { this.props.navigation.goBack(null)}}
                            goToDashboard = {() =>{ this.props.navigation.navigate('Dashboard') } } />
                <Content style={styles.Contentcontainer} >
                            <View style={styles.container}>
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