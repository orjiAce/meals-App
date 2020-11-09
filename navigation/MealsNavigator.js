import React from "react";
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from "react-navigation-tabs";
//for drawer navigation
import {createDrawerNavigator} from "react-navigation-drawer";
import {createAppContainer} from "react-navigation";
//import the pages/screen to be mapped in navigators
import CategoriesScreen from "../screens/Categories";
import CategoriesMeal from "../screens/CategoryMeal";
import MealDetailScreen from "../screens/MealDetail";
import {Platform, Text} from "react-native";
import Colors from "../constants/Colors";
import FavouriteMeal from "../screens/Favorites";
import {Ionicons} from "@expo/vector-icons";

//this package is what you use to create material bottoms tabs specific to the android platform
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import FilterScreen from "../screens/FilterScreen";


const defaultConfig = {
    headerStyle: {
        //here we can even use the Platform API available to us to switch the style across OS
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ''
    },
    headerTitleStyle:{
        fontFamily: 'open-sans-bold'
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor

}

//here we register the screens/pages we want to navigate between using stacked navigation
const MealsNavigator = createStackNavigator({
        Categories: {
            screen: CategoriesScreen,
            //here we can even use the Platform API available to us to switch the style across OS

        },

        CategoryMeal: {
            screen: CategoriesMeal,


        },
        MealDetail: MealDetailScreen,

    },
    //here we set up default configuration option for all screens
    {
        defaultNavigationOptions: defaultConfig
    })


//here we set up navigation for our favourite stack navigation
const FavNavigator = createStackNavigator({
        Favourites: FavouriteMeal,
        MealDetail: MealDetailScreen
    }, {
        defaultNavigationOptions: defaultConfig
    }
)


//create a constant reusable navigation config
const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (<Ionicons name={'ios-restaurant'} size={23} color={tabInfo.tintColor}/>
                );

            },
            //here we customize each tab bar color when they are selected
            tabBarColor: Colors.primaryColor,
            tabBarLabel: Platform.OS === 'android' ?  <Text style={{fontFamily: 'open-sans-bold'}}>Meals</Text>: ''
        }
    },
    //this is for the favourite screen
    Favourites: {
        screen: FavNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (<Ionicons name={'ios-star'} size={23} color={tabInfo.tintColor}/>);

            },
            tabBarColor: "#07038d"
        }
    }
}

//here we create our bottom tab navigation
//we included the MealsNavigator so it can take on the first screen as the default screen
//as we have wrapped the MealsNavigator inside MealsFavTabNavigation and exported it

//!IMPORTANT! also here we are going to use the ternary operator to check and render the navigation according what platform the use is on

const MealsFavTabNavigation = Platform.OS === 'android' ? createMaterialBottomTabNavigator(tabScreenConfig,
    {
        activeColor: Colors.accentColor,
        shifting: true
    }
) : createBottomTabNavigator(
    //you can also configure it further to add icons
    tabScreenConfig,
    {
        tabBarOptions: {
            labelStyle:{
fontFamily:'open-sans-bold'
            },
            activeTintColor: Colors.accentColor,

        }

    }
)

//StackNavigator for the filter screen
const filterNav = createStackNavigator({
    Filters: FilterScreen

}, {
    //here you can customise the drawer
    navigationOptions: {
        drawerLabel: 'Filter'
    },

    defaultNavigationOptions: defaultConfig

})

//here lies our drawer navigation which is our main navigation

const mainNavigation = createDrawerNavigator({
MealsFavs: {screen:MealsFavTabNavigation, navigationOptions:{
    drawerLabel:'Meals'
    }},
    Filters:filterNav
},{
    contentOptions:{
        activeTintColor: Colors.accentColor,
        labelStyle:{
            fontFamily:'open-sans-bold'
        }
    }
})

//at the end always wrap your component with createAppContainer
export default createAppContainer(mainNavigation)