import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label,Button,Text } from 'native-base';
import { Platform,AppRegistry, FlatList, StyleSheet,ScrollView, View,TouchableOpacity,Picker } from 'react-native';
import commonStyles from '../assets/commonStyle.js';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.loginCall = this
        .loginCall
        .bind(this);
        this.state = {
          
          languageType: "",
          
      } 
    
}
loginCall() {
  this.props.navigation.navigate('Dashboard');
}
  render() {
    
    return (
      // <Container style={{paddingTop: (Platform.OS === 'ios')
      // ? 100
      // : 10}}>
      <Container>
       <Content style={[commonStyles.appBackground]} >
       <ScrollView
                          contentContainerStyle={{
                          width: window.width
                      }}>
        <View style={styles.container}>
        {/* <Text style={[commonStyles.AppName]}>Supervision App</Text> */}
        <Text style={[commonStyles.AppName]}>الإشراف على التطبيقات</Text>
          <Form>
            <Item stackedLabel>
              {/* <Label>Username</Label> */}
              <Label>اسم المستخدم</Label> 
              <Input  />
            </Item>
            
            <Item stackedLabel >
              {/* <Label>Password</Label> */}
              <Label> كلمه السر</Label> 
              
              <Input />
            </Item>
            
            <Picker
  selectedValue={this.state.languageType}
  mode="dropdown"
  style={commonStyles.dropDownBox}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({languageType: itemValue})
  }>
  <Picker.Item label="Please select Language" value="select" />
  <Picker.Item label="English" value="English" />
  <Picker.Item label="Arebic" value="Arebic" />
</Picker>
<TouchableOpacity
                                  style={{
                                  alignItems: 'center',
                                  height: 25
                                     }}>
                                  {/* <Text style={styles.TxtFont}>Forgot Password ?</Text> */}
                                  <Text style={styles.TxtFont}>هل نسيت كلمة المرور ؟</Text>
                                  
                                 
                              </TouchableOpacity>
            <TouchableOpacity onPress= {()=> this.loginCall()} style={commonStyles.btnBackground}>
                                  {/* <Text style={commonStyles.textbtn}>LOGIN</Text> */}
                                  <Text style={commonStyles.textbtn}>تسجيل الدخول</Text>
                                  
                                  
              </TouchableOpacity>
          </Form>
          </View>
          </ScrollView>
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
      // alignItems: 'center',
    justifyContent: 'center',
      // borderColor : "yellow",     borderWidth : 1,
    },
    Titlecontainer: {
      width: '70%',
     // marginLeft: '15%',
      alignItems: 'center'
    },
    paddingTop : {
        paddingTop:20
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
    
    container: {
      flex: 1,
      padding: "10%",
    justifyContent: 'center',
  
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
  TxtFont:{
    color: 'green',
    fontSize: 20,
   
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