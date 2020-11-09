import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MealsList from "../components/MealsList";
import Meal from "../model/Meal";
import {MEALS} from "../Data/meal-data";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButtons from "../components/HeaderButton";
import CategoriesScreen from "./Categories";

const FavouriteMeal = (props) => {
    //for now we create a dummy favorite meal
    const favMeal = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
    return (
        //then supply the fav meaL as the data to listData prop
        <MealsList listData={favMeal} navigation={props.navigation}/>
    )

}



//hear we can properties to our Category screen as objects
//we will add and style our header here

FavouriteMeal.navigationOptions = navData => ({
    headerTitle: "Favourite screen",
    //here we add the hamburger menu icon for then navigation drawer
    //reason is we have to manually add it on the page that we want the navigation drawer to work
    headerLeft: () => (<HeaderButtons  HeaderButtonComponent={CustomHeaderButtons}>
        <Item title='Menu' iconName='ios-menu' onPress={() => {
            navData.navigation.toggleDrawer()
        }}/>
    </HeaderButtons>)

})


export default FavouriteMeal;
