import React from 'react';
import { StyleSheet,View ,ScrollView,Text, TouchableHighlight} from 'react-native';
import { Container, Header, Content, Button, Label,Icon } from 'native-base';
import SegmentedControlTab from 'react-native-segmented-control-tab'
import Test3 from '../pages/Timer'
export default class Hours extends React.Component {
    constructor(props){
        super(props)
        
     this.state =  {
       Hours: ['8:00am - 9:00am', '9:00am - 10:00am','10:00am - 11:00am',
      '11:00am - 12:00am','1:00am - 2:00am','2:00am - 3:00am','3:00am - 4:00am'],
       newData:[],
       selectedIndex: 0,
       
    } 
    
  }
  handleIndexChange = (index,text) => {
    this.setState({
      ...this.state,
      selectedIndex: index,
    });
  this.props.DaysSelected(text)
  }
  SampleFunction(data2){
  
  
    
  }
  render() {
    
    return (
        
        <ScrollView style={styles.containers} 
        showsHorizontalScrollIndicator={false}    // Hide horizontal scroll indicators
        automaticallyAdjustContentInsets={false}  // Do not adjust content automatically
        scrollEventThrottle={100}
        onScroll={this.onScroll}
        horizontal={true}>
        
        <Test3
                    values={this.state.Hours}
                    selectedIndex={this.state.selectedIndex}
                    onTabPress={this.handleIndexChange}
                    />

        

      </ScrollView>
      
      );
  }
}

const styles = StyleSheet.create({
    containers: {
  
      flex: 1, 
      flexDirection: 'row',
      backgroundColor: 'rgba(255, 255, 255, 1.0)',
  
    },
    innercontainers:{
    
    },
    TextStyle:{
      
     textAlign: 'center',
      fontWeight: 'bold',
      padding: 10,
      fontSize: 16,
      color: "rgba(71, 83, 98, 1.0)"
    
    
  },
   textActive: {
    color: 'rgba(97, 193, 103, 1.0)',
  },
  

  });