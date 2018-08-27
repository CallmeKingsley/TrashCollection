import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Segment, Content, Text } from 'native-base';
import {StyleSheet,View ,ScrollView, TouchableHighlight} from 'react-native';
import TimerCountdown from 'react-native-timer-countdown';

 export default class WaitScreen extends Component {
    static navigationOptions = {


        title: 'TRASH COLLECTION',
        headerTintColor: '#fff',
        headerRight:<Text>'kings'</Text>,
        headerStyle: {
          backgroundColor: 'rgba(97, 193, 103, 1.0)',

        },
        header: null,

      };
  constructor(){
    super();
    state = {

      laoding: false
    }
   
  }

    render() {
    const {params} = this.props.navigation.state;
      return (
        <View style={styles.container}>
        <Text>{params.Day}</Text>
        <Text>{params.Hour}</Text>
        <Text>{params.Minutes}</Text>
         <TimerCountdown
            initialSecondsRemaining={10000*60}
            onTick={secondsRemaining => console.log('tick', secondsRemaining)}
            onTimeElapsed={() => console.log('complete')}
            allowFontScaling={true}
            style={{ fontSize: 40 }}
        />
       </View>
      )
    }
  }

  const styles = StyleSheet.create({
    flatlist:{
        backgroundColor: 'yellow',
           height: 30,

    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
         alignItems: 'center',
        justifyContent: 'center',
      },


  });
