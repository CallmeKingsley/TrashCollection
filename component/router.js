import React from 'react';
import {createStackNavigator,} from 'react-navigation';
import Welcome from "./pages/Welcome";
import SignUp from "./pages/SignUp"
import Home  from "./pages/Home"

import waitScreen from './pages/WaitScreen'
import Profile from './pages/UserProfile'
const Routers = createStackNavigator({
   
    Home:{screen: Home},
    waitScreen: {screen:waitScreen},
 
    Profile : {screen: Profile }
  },

);

  export default Routers