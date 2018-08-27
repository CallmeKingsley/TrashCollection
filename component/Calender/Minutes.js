import React from 'react';
import { StyleSheet, FlatList,View,ScrollView,Button } from 'react-native';
import { Container, Header, Content, Text,Label,Icon } from 'native-base';
import * as firebase from "firebase";
import {config} from '../FireBase/constants';
import Test3 from '../pages/Timer'

const config2 = {
  apiKey: "AIzaSyBdd9whjLKqKXMZex8E1noWRIWt8TIFLGo",
  authDomain: "trashappdev.firebaseapp.com",
  databaseURL: "https://trashappdev.firebaseio.com",
  projectId: "trashappdev",
  storageBucket: "trashappdev.appspot.com",
  messagingSenderId: "752821075611"
};
export default class Hours extends React.Component {

  constructor(props){
    super(props)
   
    firebase.initializeApp(config2);
     this.state = {
       SelectedMins:[],
       selectedIndex: 0,
       Minutes:['8:00am - 8:10am','8:10am - 8:20am','8:20am - 8:30am','8:30am - 8:40am','8:50am - 9:00am',],
       Text:'',
       HourValue:''
    }
   

    
  }
  handleIndexChange = (index,text) => {
    this.setState({selectedIndex: index,
      Text:text
    });
     this.props.DaysSelected(text,index)
 
  }


  shouldComponentUpdate(nextProps, nextState) {
    //console.log("should update")
  
    return nextProps.onSelectedHour == nextState.HourValue
  
  }


  componentWillReceiveProps(nextProps){
    this.setState({
 
      HourValue : nextProps.onSelectedHour
       
    });

    var Minute1 = ['8:00am - 8:10am','8:10am - 8:20am','8:20am - 8:30am','8:30am - 8:40am','8:50am - 9:00am',]
    var Minute2 = ['9:00am - 9:10am','9:10am - 9:20am','9:20am - 9:30am','9:30am - 9:40am','9:50am - 10:00am',]
    var Minute3 = ['10:00am - 10:10am','10:10am - 10:20am','10:20am - 10:30am','10:30am - 10:40am','10:50am - 11:00am',]
    var Minute4 = ['11:00am - 11:10am','11:10am - 11:20am','11:20am - 11:30am','11:30am - 11:40am','11:50am - 12:00am',]
    var Minute5 = ['12:00am - 12:10am','12:10am - 12:20am','12:20am - 12:30am','12:30am - 12:40am','12:50am - 1:00am',]
    var Minute6 = ['1:00am - 1:10am','1:10am - 1:20am','1:20am - 1:30am','1:30am - 1:40am','1:50am - 1:00am',]

    switch(nextProps.onSelectedHour){
      case '8:00am - 9:00am':
      this.setState({
 
        Minutes : Minute1
         
      });
          break;
      case '9:00am - 10:00am':
      this.setState({
 
        Minutes : Minute2
         
      });
          break;
      case '10:00am - 11:00am':
      this.setState({
 
        Minutes : Minute3
         
      });
          break;
      case '11:00am - 12:00am':
      this.setState({
 
        Minutes : Minute4
         
      });
          break;
       default:
       this.setState({
 
        Minutes : Minute5
         
      });
          break;
     }

  }
 

  
  render() {
    //console.log(this.state.Minutes)
    //{this.fireBaseSearch(this.state.HourValue)}
    return (
          
     
       
      <ScrollView style={styles.containers} 
      showsHorizontalScrollIndicator={false}    // Hide horizontal scroll indicators
      automaticallyAdjustContentInsets={false}  // Do not adjust content automatically
      scrollEventThrottle={100}
      onScroll={this.onScroll}
      horizontal={true}>
        
        <Test3
                    values={this.state.Minutes}
                    selectedIndex={this.props.index}
                    onTabPress={this.handleIndexChange}
                    
                    />

        
        </ScrollView>
 
    );
  }
}

const styles = StyleSheet.create({
    
    containers: {
      flexDirection:'row',
      borderRadius: 10,
      backgroundColor: "rgba(255, 255, 255, 1.0)",
    
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'rgba(231, 236, 237, 1.0)',
      marginRight: 10,
      marginLeft:6, 
      marginBottom:50, 
      padding: 10,
      height: 60,
    },
    Title: {
   
    },
    flattext:{
      justifyContent: 'space-between',
      padding: 5,
    },
    flatlist:{
     
     textAlign: 'center',
     fontWeight: 'bold',
      color: "rgba(71, 83, 98, 1.0)",
       padding: 5,
    },
    status:{
      color : 'rgba(245, 247, 247, 1.0)',
    },
    StatusCover:{
     padding: 5
    },
    MinutesTitle:{
      color: 'rgba(157, 164, 171, 1.0)',
      fontWeight: 'bold',
    },
    AvaliableTitle:{
      color: 'rgba(157, 164, 171, 1.0)',
    }
  });
