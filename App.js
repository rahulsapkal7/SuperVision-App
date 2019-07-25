import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Screen1 from './App/screens/screen1';
import Screen2 from './App/screens/screen2';
import Screen3 from './App/screens/screen3';
import Screen4 from './App/screens/screen4';
import Login from './App/screens/login';
import CaseList from './App/screens/caseList';
import Dashboard from './App/screens/dashboard';
import CaseDetail from './App/screens/caseDetail';
import Activities from './App/screens/activities';
import Attachments from './App/screens/attachments';



export const HomeStack = createStackNavigator({
  Screen1:{
    screen : Screen1,
    navigationOptions: {
      header: null
    }
    
  },
  Screen2:{
    screen : Screen2,
    navigationOptions: {
      header: null
    }
  },
  Screen3:{
    screen : Screen3,
    navigationOptions: {
      header: null
    }
  },
  Screen4:{
    screen : Screen4,
    navigationOptions: {
      header: null
    }
  },
  Login:{
    screen : Login,
    navigationOptions: {
      header: null
    }
  },
  CaseList:{
    screen : CaseList,
    navigationOptions: {
      header: null
    }
  },
  Dashboard:{
    screen : Dashboard,
    navigationOptions: {
      header: null
    }
  },
  CaseDetail:{
    screen : CaseDetail,
    navigationOptions: {
      header: null
    }
  },
  Activities : {
    screen : Activities,
    navigationOptions:{
      header:null
    }
  },
  Attachments : {
    screen : Attachments,
    navigationOptions:{
      header:null
    }
  },
  },{ initialRouteName: 'Login' })

  





export default createAppContainer(HomeStack);