import React, { Component } from 'react';
import { Container, Content, Button,Footer, FooterTab,Icon, Text } from 'native-base';
import { AppRegistry, FlatList, StyleSheet,ScrollView, Alert, View,TouchableOpacity } from 'react-native';
import {NavigationActions} from 'react-navigation';

import HeaderDemo from '../components/headerDemo';


export default class Screen2 extends Component {
  constructor(props) {
    super(props);
    console.log('inside screen 2');
    this.state = {
    
      StoreData : [{CategoryName:"Violation1"},{CategoryName:"Violation2"},{CategoryName:"Violation3"},{CategoryName:"Violation4"}]
    }
   
  }
  renderItem=({item})=>{
    return(
    <TouchableOpacity style={{ flex:1,flexDirection:'column',marginBottom:3}}    onPress ={() => this.props.navigation.navigate('Screen3') } >
       
        <View style={styles.card_outer}>
            <View style={styles.horizontal_view}>
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
         <HeaderDemo
                title={'Your Logo'}
                back={() => {
                this
                  .props
                  .navigation
                  .goBack(null)
              }}/>
        <Content style={styles.Contentcontainer} >
        <View style={styles.container}>
        <Text style={styles.logo}>Violation</Text>
        <FlatList
          data={this.state.StoreData}
          renderItem={this.renderItem}
        />
     </View>
        </Content>
        <Footer style={styles.footerContainer}>
          <FooterTab style={styles.footerTabContainer}>
            <Button >
              <Icon style={{ color: "white" }} name="checkmark" />
              <Text style={styles.text} >Confirm</Text>
            </Button>
            <Button >
              <Icon style={{ color: "white" }} name="add" />
              <Text style={styles.text}>Add new favourite</Text>
            </Button>
            
          </FooterTab>
        </Footer>
      </Container>
     
    );
  }
}

const styles = StyleSheet.create({
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
      marginBottom:10,
      marginLeft: 5,
      backgroundColor:'#434544',
      flex: 1,        
      marginRight: 5, 
      marginTop: 10,
      flexDirection:'column',
      height: '80%', 
},
horizontal_view: { 
  flexDirection: 'row', 
  // alignItems: 'center',
  // justifyContent: 'center',
},
txtStyle_Thirty: {  
  fontSize: 20,
  color:'white',
  fontWeight:'300'
},
logo: {
  fontSize: 30,
  // textAlign: 'center',
  margin: 10,
  fontWeight: 'bold',
  color: '#fff',
  marginBottom: 30
},
});