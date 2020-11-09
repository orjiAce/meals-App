import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from "expo-font";
import {AppLoading} from "expo";
import MealsNavigator from "./navigation/MealsNavigator";
//this import makes sure all your screens/pages runs smoothly
import {enableScreens} from "react-native-screens";

//here we create our store
import {createStore, combineReducers} from 'redux'
import {Provider} from "react-redux";
//import our reducers
import mealsReducer from 'store/reducers/meals'

//connect our reducers
const rootReducers = combineReducers({
    meals: mealsReducer
})

//here is our store
const store = createStore(rootReducers)

//this app is more advanced than the previous one and will further teach us on how to better use
//the navigation api on our React native app
enableScreens()
//lets programmatically add our fonts
const fetchFont = () =>{
 return  Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  //here we make sure our is fully loaded and font loaded before the app starts
  //meaning keep the splash screen open until font is loaded
  if(!fontLoaded){
  return(  <AppLoading startAsync={fetchFont} onFinish={() => setFontLoaded(true)}/>
  )

  }

//wrap our top most screen with the Provider component

  return <Provider store={store}> <MealsNavigator/></Provider>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
