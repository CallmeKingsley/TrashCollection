import React from 'react';
import {StyleSheet,StatusBar,FlatList,View, ActivityIndicator,Alert} from 'react-native';
import moment from 'moment';
import Calendar from '../Calender/Calendar';
import { Container,Form,Left, Right, Icon, Header,Body,Toast,Item,Label,Input, Content,Text,Title,Button,Footer } from 'native-base';
import Hour from "../Calender/Hours";
import Minutes from "../Calender/Minutes";
import {config} from '../FireBase/constants';
import PaymentOption from './PaymentOption';
import CreditCard from './PaymentPlan'
import SignUp from './SignUp';
import Login from './Login'
import LoadingScreen from './LoadScreen'
import { isNull } from 'util';
import UserInfo from './UserInfo'



export default class home extends React.Component {
  static navigationOptions = {
    header: null,

  };


  _clearForm() {
    <Text style={styles.DisplaySelected}> {this.state.SelectedFullDate}</Text>
    // Clear form code...
  }


    constructor(props){
      super(props)

      this.state = {
      showToast: false,
      SelectedFullDate :"",
      SelectedDay :"",
      todayDay:"",
      index: 0,
      cost: 0.00,
      SelectedHours :"8:00am - 9:00am" ,
      SelectedMinutes:"",
      showHours: false,
      Readdate: moment(),
      SelectedMinutes :"8:00am - 8:00am" ,
      MemberInstruction: '',
      Loading: false,



        UserName: '',
        UserRoomNumber: '',
        UserphoneNumber: ' ',
        CardNumber: 0,
        SecurityCode: 0,
        Name: ' ',
        Exp1:0,
        Exp2:0,
      }

     this.ShowBookButton = this.ShowBookButton.bind(this),
     this._clearForm = this._clearForm.bind(this)
     this.UserphoneNumber = this.UserphoneNumber.bind(this)
     

    }

    onSelectDate = (date) => {

      this.setState({ showHours:true});
      this.setState({ SelectedDay: date._d.getDate().toString()});
      this.setState({ SelectedFullDate:date._d.toDateString()});
    };

    componentWillMount(){
      this.setState({ SelectedFullDate:moment().format('dddd MMMM Do YYYY')});
      this.setState({ todayDay:moment().format('DD')});
      this.setState({ SelectedDay:moment().format('DD')});
    }
    UserphoneNumber =(name)=>{

    //  this.setState({ UserphoneNumber:name});
      //console.log(name)
    }
    UserRoomNumber(name){
      console.log(name)
     // this.setState({ UserRoomNumber:name});

    }
    UserName(name){
      //console.log("name and name ")
      //this.setState({ UserName:name});

    }
    GetName(name){
    //  console.log(name)
      //this.setState({ Name:name});

    }
    GetCardNumber(name){
      //console.log(name)
     // this.setState({ CardNumber:name});

    }
    GetSSCode(name){
      //console.log(name)
      //this.setState({ SecurityCode:name});

    }
    GetExp1(name){
      //console.log(name)
      //this.setState({ Exp1:name});

    }
    GetExp2(name){
      //console.log(name)
      //this.setState({ Exp2:name});

    }
    //set the hours selected
    onSelectHours = (date) => {

       this.setState({ SelectedHours:date});
    }
    SelectedMinutes = (date, index) => {

      this.setState({ SelectedMinutes:date,
        index: index
      });
   }
   //**** */
    onSelectMins = (date) => {

     this.setState({ SelectedHours:date});

   }
   MemberInstructions =(data)=>{

    this.setState({ MemberInstruction:data});
   }


   Display() {

       return( <View >

        <Text style={styles.DisplaySelected}> {this.state.SelectedFullDate}</Text>
        <Text style={styles.DisplaySelected}> {this.state.SelectedMinutes }</Text>
        <Text style={styles.DisplaySelected}> {"$" +this.state.cost+".00" }</Text>
        </View>)
   }

   showError(){

    Alert.alert(
      'Error Warning',
      'Select a Valid Date',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )

   }


   ShowBookButton(full,hour,mins,day,nav,todayDate){

     if(todayDate < day || todayDate == day ){
      return <Text style={styles.Button} onPress={() =>nav('waitScreen',{Hour:hour, Minutes:mins,Day:full})  }>Book now</Text>
     }else{
       return <Text style={styles.Button} onPress={this.showError }>Book now</Text>
     }


    return
   }
   MemberInstructionD(decision){
      if(decision == 'key1'){

         return  <UserInfo/>

      }else if(decision == 'key0'){

        return  <SignUp GetNameHome = {this.GetName} GetCardNumberHome ={this.GetCardNumber} GetSSCodeHome ={this.GetSSCode} GetExp1Home ={this.GetExp1} GetExp2Home ={this.GetExp2} UserRoomNumber ={this.UserRoomNumber} UserName ={this.UserName} UserphoneNumber ={this.UserphoneNumber}/>
      }
     
      return  <UserInfo/>
   }
   getCost =(val)=>{
    this.setState({ cost: val})
   }

  render() {
    const { navigate } = this.props.navigation;
     const {SelectedHours,SelectedMinutes,SelectedDay,todayDay}  = this.state
    return (


      <View style={styles.container}>
      <Header style={styles.Header}>
      <Right>
      </Right>
          <Body style={styles.HeaderTitlebtn}>
            <Title style={styles.HeaderTitle}>TRASH COLLECTION</Title>
          </Body>
          <Right>
            <Button transparent>

            </Button>
          </Right>
        </Header>
        <Content>

          <View>
          <Text style={styles.topSelector}>Select Payment Plan </Text>
          <View style={styles.PaymentSelector} >
          <PaymentOption MemberInstruction ={this.MemberInstructions}  getCost = {this.getCost}/>
          </View>
          </View>

          <View >
          <Text style={styles.topSelector}>Date </Text>
          <View style={styles.FristSelector}>
          <StatusBar hidden={true} />
          <Calendar onSelectDate={this.onSelectDate} />
          </View>


           <Text style={styles.topSelector}>Hour</Text>
          < View  style={styles.MinutesSelect}>
           <Hour DaysSelected ={this.onSelectHours} />
           <StatusBar hidden={true} />
           </View>

          <Text style={styles.topSelector}>Minutes</Text>
          <View>
         <Minutes onSelectedHour = {this.state.SelectedHours} index = {this.state.index}DaysSelected ={this.SelectedMinutes}/>
          </View>
          </View>

          {this.MemberInstructionD(this.state.MemberInstruction)}

          <View style={styles.buttomSelection}>
          </View>

       </Content>
         <Footer style={styles.ViewBotton}>
           <View>
           {this. Display()}
           </View>
           <View style={styles.BookBotton}>
           {this.ShowBookButton(this.state.SelectedFullDate,SelectedHours,SelectedMinutes,SelectedDay,navigate,todayDay)}

           </View>
           </Footer>

      </View>
    );
  }
}
function LoadScreen(){


 }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(252, 252, 252, 1.0)",

    //paddingTop: 20,
  },
  topSelector:{
    color: "rgba(157, 164, 171, 1.0)",
      marginLeft:10,
  },
  DisplaySelected:{
   //backgroundColor:'sandybrown'
   color :"rgba(252, 252, 252, 1.0)",
  },

  FristSelector:{
    marginRight: 10,
    marginLeft:10,
    marginBottom: 10,

    height: 110,
    borderRadius: 10,
    borderWidth: .5,
    borderColor: 'rgba(231, 236, 237, 1.0)',
  },
  PaymentSelector:{
    marginRight: 10,
    marginLeft:6,
    marginBottom: 50,
    borderRadius: 10,
    borderWidth: .5,
    borderColor: 'rgba(231, 236, 237, 1.0)',
  },
  MinutesSelect:{
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(231, 236, 237, 1.0)',
    marginRight: 10,
    marginLeft:6,
    marginBottom:6,
    padding: 10,
    height: 60,
  },
  ViewBotton:{
   height: 120,
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'space-around',
   backgroundColor: 'rgba(97, 193, 103, 1.0)'

  },

  Button:{

    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    //borderRadius: 10,
    //borderWidth: .5,
    borderColor: 'rgba(231, 236, 237, 1.0)',

     //
  },
  BookBotton:{

     height: 40,
     width: 150,
     borderRadius: 10,
     borderWidth: .5,
     backgroundColor: 'white',

  },
  buttomSelection:{

    height: 30,
    width: 150,

  },
  Header:{
    backgroundColor: 'rgba(97, 193, 103, 1.0)'

  },
  HeaderTitle:{
    color :"rgba(252, 252, 252, 1.0)",
    width: 200
  },
  HeaderTitlebtn:{
    width: 200,

  },
  HeaderTitleUser:{
    color :"rgba(252, 252, 252, 1.0)",
  },
  HeaderTitleUser1:{
    borderWidth: 1,
    borderColor :"rgba(252, 252, 252, 1.0)",
  }

});
