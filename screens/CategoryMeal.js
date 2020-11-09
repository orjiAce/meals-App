import React from 'react';

import CATEGORIES from "../Data/dummy-data";
import {MEALS} from "../Data/meal-data";
import Colors from "../constants/Colors";
import MealItem from "../components/MealItem";
import MealsList from "../components/MealsList";

const CategoriesMeal = (props) => {
    //THIS IS HOW YOU EXTRACT parameters supplied to any page
    const catId = props.navigation.getParam("categoryId")


    //Here we use the catId parameter we got to find the item related to it in the categories list
//so basically we saying get item that matches this category ID in the category list
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    //we run a filter function on the meals data where we have to return true where the category id
    //matches with any data in our MEALS object
    const filteredMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)
    return (
        //since the mealsList is a component not a screen it doesn't have access to Navigation so what we do is
        //we forward the navigation as prop
<MealsList listData={filteredMeals} navigation={props.navigation}/>
    )

}

CategoriesMeal.navigationOptions = (navigationData) => {
    //this gets the parameter passed from a previous page
    const catId = navigationData.navigation.getParam("categoryId");
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
    return {
        headerTitle: selectedCategory.title,

    }

}

//custom style for this component


export default CategoriesMeal;
