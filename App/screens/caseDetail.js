import React, { Component } from 'react';
import { Container, Content, Button,Footer, FooterTab,Icon, List,Form, Item, Input, Label, ListItem, Left, Thumbnail,Accordion, Body, } from 'native-base';
import { AppRegistry, FlatList, StyleSheet,ScrollView, Alert,Text,TextInput, View,TouchableOpacity,Image,  } from 'react-native';
import {NavigationActions} from 'react-navigation';
import HeaderDemo from '../components/headerDemo';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import Signature from 'react-native-signature-canvas';
import commonStyles from '../assets/commonStyle.js';

const buttonTextStyle = {
    color: '#393939'
};
const dataArray = [
    { title: "Case Detail", content: "Abdul" },
    { title: "Activities", content: "Go To Activities" },
    { title: "Attachments", content: "Go To Attachments" },
    { title: "Document Status", content: "Lorem ipsum dolor sit amet" },
    
  ];
 

export default class CaseDetail extends Component {
  constructor(props) {
    super(props);
    console.log('inside screen 1');
    console.log("props are --> ",JSON.stringify(props));
    this.state = {
        currentPosition: 0,
        isValid: true,
        errors: false,
        caseHeader: "",
        isNewCase : this.props.navigation.state.params.newCase,
         signature: null ,
         name:"",
         caseSource2:"",
         caseType2:"",
         comments:"",
         caseBranch:"",
         caseSource:"",
         caseType:"",
         caseID:"",
          
    }
   
  }
  componentDidMount() {
    
        if (this.state.isNewCase == true) {
            this.setState({ name:"",
            caseSource2:"",
            caseType2:"",
            comments:"",
            caseBranch:"",
            caseSource:"",
            caseType:"",
            caseID:"",
            caseHeader: "New Case",
            signature : null})
           
        } else {
            this.setState({ name:"Raj",
            caseHeader : "Case Detail",
            caseSource2:"Business",
            caseType2:"Query For Case",
            comments:"No Comments",
            caseBranch:"Mumbai",
            caseSource:"Client",
            caseType:"Query",
            caseID:"1233455",
            signature:"data:image/png;base64,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"})
        }
    
      }
  onPageChange(position){
    this.setState({currentPosition: position});
}
handleSignature = signature => {
    console.log("Sign is",signature);
    this.setState({ signature });
  };
_renderHeader(item, expanded) {
    return (
      <View style={{
        flexDirection: "row",
        padding: 10,
        margin:5,
        justifyContent: "space-between",
        alignItems: "center" ,
        backgroundColor: "#1470C4" }}>
      <Text style={{ fontWeight: "600",color: "white" }}> 
          {" "}{item.title}
        </Text>
        {expanded
          ? <Icon style={{ fontSize: 18, color: "#FFF" }} name="arrow-dropup-circle" />
          : <Icon style={{ fontSize: 18, color: "#FFF" }} name="arrow-dropdown-circle" />}
      </View>
    );
  }
  GoToScreen = (screenName) => {
    console.log("screen Name is",screenName);
    this.props.navigation.navigate('CaseList')
  }
  _renderContent(item) {
    this.navigate = this.props.navigation.navigate;
    
    return (
      <View
        style={{
          backgroundColor: "#022060",
          padding: 10,
          marginLeft : 5,
          marginTop:-5,
          marginBottom:1,
          marginRight : 5,
          fontStyle: "italic",
        }}
      >
      
      {item.content == "Abdul" ? (
      <View  style={commonStyles.FlexDirectionRow }>
        
       
        <View  style={{
          flexDirection:"column",
        //   backgroundColor: "green",
          width:"80%"
        }}>
        <Text style={{ color: "white"}} > Abdul Naif</Text>
        <Text style={{ color: "white"}}> --- </Text>
        <Text style={{ color: "white"}}> Contact</Text>
        <Text style={{ color: "white"}}> 1223434343</Text> 
        </View>
        <View  style={{
          flexDirection:"column",
        //   backgroundColor: "red",
          width:"20%"
        }}>
          
        <Icon style={{ color: "white" , paddingLeft:15}} name="mail" />
       
        <Icon style={{ color: "white" , paddingLeft:15,paddingTop:5}} name="call" />
        </View>
        </View>
      ) : (
          <TouchableOpacity onPress ={ this.navigate('CaseList') }>
        <Text style={{ color: "white"}}>
        {item.content}
        </Text>
       </TouchableOpacity>
      )
      }
      </View>
    );
  }
onNextStep = () => {
    // alert("hi");
    if (!this.state.isValid) {
      this.setState({ errors: true });
    } else {
      this.setState({ errors: false });
    }
};
onSubmitClick = () =>{
    this.props.navigation.navigate('Dashboard');
}
  render() {
    const style = `.m-signature-pad--footer
    .button {
      background-color: "#2D953D";
      color: #FFF;
    }`;
    return (
      <Container>
    <HeaderDemo
                title={this.state.caseHeader}
                back={() => {
                this
                  .props
                  .navigation
                  .goBack(null)
                  
              }}
              goToDashboard = {() =>{
                this.props.navigation.navigate('Dashboard')
              }}
              />
     <View style={{ flex: 1 }}>
        <ProgressSteps>
          <ProgressStep label="Stage 1" onNext={this.onNextStep} onSubmit={this.onSubmitClick} errors={this.state.errors}>
         
            {/* <Accordion 
            dataArray={dataArray}
            expanded={true}
            animation={true}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
          /> */}
          <View  style={commonStyles.FlexDirectionColumn }>
                <View  style={styles.caseDetailCard} >
                     <View  style={commonStyles.FlexDirectionRow }>
                            <View  style={{
                            flexDirection:"column",
                            width:"80%"
                            }}>
                                    <Text style={{ color: "white"}} > Abdul Naif</Text>
                                    <Text style={{ color: "white"}}> --- </Text>
                                    <Text style={{ color: "white"}}> Contact</Text>
                                    <Text style={{ color: "white"}}> 1223434343</Text> 
                            </View>
                            <View  style={{
                            flexDirection:"column",
                            width:"20%"
                            }}>
                                    <Icon style={{ color: "white" , paddingLeft:15}} name="mail" />
                                    <Icon style={{ color: "white" , paddingLeft:15,paddingTop:5}} name="call" />
                            </View>
                    </View>
      
     
                </View>
                <TouchableOpacity  style={styles.caseDetailCard} onPress={() => this.props.navigation.navigate('Activities')}>
                <Text style={{ color: "white"}} > Activities</Text>
                <Text style={{ color: "white"}}> --- </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.caseDetailCard} onPress={() => this.props.navigation.navigate('Attachments')} >
                <Text style={{ color: "white"}} > Attachments</Text>
                <Text style={{ color: "white"}}> --- </Text>
                </TouchableOpacity>
              
      </View>
          </ProgressStep>
          <ProgressStep label="Stage 2">
          <View style={styles.container}>
            <Form>
            <Item stackedLabel>
              <Label  color="blue">Name Of Complaint</Label> 
              <Input  value={this.state.name}  onChangeText={(text) => {
                this.setState({name: text})  }}/>
            </Item>
            <Item stackedLabel >
              <Label>Case ID</Label>
              <Input  value={this.state.caseID}  onChangeText={(text) => {
                this.setState({caseID: text})  }}/>
            </Item>
            <Item stackedLabel>
              <Label>Case Type</Label>
              <Input  value={this.state.caseType}  onChangeText={(text) => {
                this.setState({caseType: text}) }}/>
            </Item>
            <Item stackedLabel >
              <Label>Source</Label>
              <Input  value={this.state.caseSource}  onChangeText={(text) => {
                this.setState({caseSource: text}) }}/>
            </Item> 
            <Item stackedLabel>
              <Label>Branch</Label>
              <Input  value={this.state.caseBranch}  onChangeText={(text) => {
                this.setState({caseBranch: text}) }}/>
            </Item>
            <Item stackedLabel >
              <Label>Comments</Label>
              <Input  value={this.state.comments}  onChangeText={(text) => {
                this.setState({comments: text}) }}/>
            </Item>
            <Item stackedLabel>
              <Label>Case Type</Label>
              <Input  value={this.state.caseType2}  onChangeText={(text) => {
                this.setState({caseType2: text}) }}/>
            </Item> 
            <Item stackedLabel >
              <Label>Source</Label>
              <Input  value={this.state.caseSource2}  onChangeText={(text) => {
                this.setState({caseSource2: text}) }}/>
            </Item>
            </Form>
            </View>
          </ProgressStep>
          <ProgressStep label="Stage 3">
            <View style={styles.container}>
            <Form>
            <Item stackedLabel>
              <Input  placeholder="Name Of Complaint" value={this.state.name}  onChangeText={(text) => {
                this.setState({name: text})  }}/>
            </Item>
            <Item stackedLabel >
              <Input placeholder="Case ID" value={this.state.caseID}  onChangeText={(text) => {
                this.setState({caseID: text})  }}/>
            </Item>
            <Item stackedLabel>
              <Input  placeholder="Case Type"value={this.state.caseType}  onChangeText={(text) => {
                this.setState({caseType: text}) }}/>
            </Item>
            <Item stackedLabel >
              <Input placeholder="Source"value={this.state.caseSource}  onChangeText={(text) => {
                this.setState({caseSource: text}) }}/>
            </Item>
            <Item stackedLabel>
              <Input  placeholder="Branch" value={this.state.caseBranch}  onChangeText={(text) => {
                this.setState({caseBranch: text}) }}/>
            </Item>
            <Item stackedLabel >
              <Input placeholder="Comments" value={this.state.comments}  onChangeText={(text) => {
                this.setState({comments: text}) }}/>
            </Item>
            <Item stackedLabel>
              <Input  placeholder="Case Type" value={this.state.caseType2}  onChangeText={(text) => {
                this.setState({caseType2: text}) }}/>
            </Item>
            <Item stackedLabel >
              <Input placeholder="Source" value={this.state.caseSource2}  onChangeText={(text) => {
                this.setState({caseSource2: text}) }}/>
            </Item>
            </Form>
            </View>
          </ProgressStep>
          <ProgressStep label="Stage 4">
          <View style={styles.container}>
          <Label>Customer signature</Label>
          {this.state.signature ? (
          <View style={styles.preview}>
          
            <Image
              resizeMode={"contain"}
              style={{ width: 280, height: 180 }}
              source={{ uri: this.state.signature }}
            />
         
        </View>
    ) : 
          ( <View style={{ height:200,width:300 }}>
                <Signature
                onOK={this.handleSignature}
                descriptionText="Sign"
                clearText="Clear"
                confirmText="Save"
                webStyle={style}
                />
            </View>
          )
            }
            </View>
          </ProgressStep>
          
        </ProgressSteps>
      </View>
    
      
       
      </Container>
     
    );
  }
}

const styles = StyleSheet.create({
    preview: {
        width: 300,
        height: 200,
        backgroundColor: "#F8F8F8",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15
      },
      previewText: {
        color: "#FFF",
        fontSize: 14,
        height: 40,
        lineHeight: 40,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "#69B2FF",
        width: 120,
        textAlign: "center",
        marginTop: 10
      },
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
  Txtbox: {
    marginTop: 10,
    borderRadius : 5,
    borderColor :'#AFAFAF',
    borderWidth : 1,
    height: 40,
    width: '100%',
   // justifyContent: 'center',
    //alignSelf: 'center'
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
    padding: "2%",
  justifyContent: 'center',
   },
  ListTitleText: {
    alignItems: 'center',
    fontSize: 14,
    // marginTop: 5,
    fontWeight: 'bold',
    color: 'black'
    // color: '#0094d8'
    
  },
  ListContaintText: {
    alignItems: 'center',
    fontSize: 11,
    // marginTop: 5,
   
    color: 'gray'
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
      // flex: 1,        
      // flexDirection:'row',
      // height: '80%', 
      flex: 1,
      paddingRight: 15,
      paddingTop: 13,
      paddingBottom: 13,
      borderBottomWidth: 0.5,
      borderColor: '#c9c9c9',
    //   flexDirection: 'row',
      alignItems: 'center',
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

caseDetailCard:{
    backgroundColor: "#022060",
    padding: 10,
    margin:5,
    fontStyle: "italic",
    }

});