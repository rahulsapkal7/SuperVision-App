import React, { Component } from 'react';
import { Container, Content, Button,Footer, FooterTab,Icon, Text } from 'native-base';
import { AppRegistry, FlatList, StyleSheet,ScrollView, Alert, View,TouchableOpacity } from 'react-native';

import HeaderDemo from '../components/headerDemo';

import MapView from 'react-native-maps';

export default class Screen3 extends Component {
  constructor(props) {
    super(props);
    console.log('inside screen 2');
    this.state = {
    
      StoreData : [{CategoryName:"Destination1"},{CategoryName:"Destination2"},{CategoryName:"Destination3"},{CategoryName:"Destination4"}]
    }
   
  }
  renderItem=({item})=>{
    return(
    <TouchableOpacity style={{ flex:1,flexDirection:'column',marginBottom:3}} onPress ={() =>{ this.props.navigation.navigate('BuyProductsSubCategoryList', {BrandCategoryTableID : item.BrandCategoryTableID } ) 
     }}
    >
       
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
        <Text style={styles.logo}>Name of Location</Text>
        <View style={styles.icons}>
        <Icon style={{ color: "white" , flex:1, fontSize: 40}} name="locate" />
        <View style={styles.coloumnDir}>
        <Text style={styles.text14}>Address 01</Text>
        <Text style={styles.text14}>Address 02</Text>
        <Text style={styles.text14}>City</Text>
        
        </View>
        <TouchableOpacity
                                style={styles.plusText}
                                onPress={() => this.props.navigation.navigate('Register')}>
                                <Text
                                    style={{
                                    color: 'white',
                                    fontSize: 30
                                }}>+</Text>
                            </TouchableOpacity>
        </View>
        
     </View>
        </Content>
        <MapView style={styles.map}
                    initialRegion={{
                        latitude:19.0760,
                        longitude:72.8777,
                        latitudeDelta: 1,
                        longitudeDelta: 1
                    }}
                    showsUserLocation={true} showsMyLocationButton={true} followUserLocation={true}>
                    {/* <MapView.Marker draggable
                                    coordinate={this.state.x}
                                    onDragEnd={this.onMapMarkerChange}
                                    title={this.state.markerTitle}
                                    description={this.state.markerDescription} /> */}

                </MapView>
        <Footer style={styles.footerContainer}>
          <FooterTab style={styles.footerTabContainer}>
            <Button >
              <Icon style={{ color: "white" }} name="star" />
              <Text style={styles.text} >Travel Favourites</Text>
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
  text14 : 
  {
    alignItems: 'center',
    fontSize: 12,
    // marginTop: 5,
    // fontWeight: 'bold',
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
icons : {
  flexDirection: 'row', 
  flex : 4,
  borderColor: 'white',
top:10,
// height: 50
},
map:{
  // borderColor: 'white',
// top:50,
height: "40%"
},
coloumnDir : {
  
  flexDirection: 'column', 
  flex:2,
   width : 100
}, plusText: {
  left: 20,
  alignItems: 'center',
  height: 40,
  width: 40,
  flex:1,
  // borderWidth: 1, borderColor: 'white',
  backgroundColor: '#434544'
},
});