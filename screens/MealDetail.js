import React from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import {MEALS} from "../Data/meal-data";

import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import CustomHeaderButtons from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";


//this is a render component for our list item, which is fully customizable
const ListItem = (props) =>{
    return <View style={MealDetailStyles.listItem}>
        <DefaultText>{props.children}</DefaultText>
    </View>
}

const MealDetailScreen = (props) => {
    const mealId = props.navigation.getParam("mealId");
    const mealDetail = MEALS.find(meal => meal.id === mealId)
    return (
        <ScrollView>
            <Image source={{uri: mealDetail.imageUrl}} style={MealDetailStyles.image}/>
            <View style={MealDetailStyles.details}>

                <DefaultText>{mealDetail.duration}m</DefaultText>
                <DefaultText>{mealDetail.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{mealDetail.affordability.toUpperCase()}</DefaultText>

            </View>
            <View style={MealDetailStyles.textWrap}>
                <Text style={MealDetailStyles.textTitle}>Ingredients</Text>


                {/*
                here we use Map to display our data
                */}
                {
                    mealDetail.ingredients.map( (ingredient, index) =>(
                        <ListItem key={index}> {ingredient} </ListItem>
                    ))
                }
                <Text style={MealDetailStyles.textTitle}>Steps</Text>
                {
                    mealDetail.steps.map( (step, index) =>(
                        <ListItem key={index}>({index}): {step} </ListItem>
                    ))
                }
            </View>

            <View style={MealDetailStyles.screen}>

                {/* This takes the user all the way back to tye first page/screen */}

            </View>
        </ScrollView>

    )


}

//here we dynamically set the header title to the Meal Detail Title
MealDetailScreen.navigationOptions = (navigationData) => {
    //this gets the parameter passed from a previous page
    const mealId = navigationData.navigation.getParam("mealId");
    const selectedMeal = MEALS.find(cat => cat.id === mealId)
    return {
        headerTitle: selectedMeal.title,
        headerRight: () => (<HeaderButtons HeaderButtonComponent={CustomHeaderButtons}>

            <Item title='Favorite' iconName='ios-star' onPress={() => console.log('Marked as favorite')}/>
        </HeaderButtons>)
    }

}


const MealDetailStyles = StyleSheet.create(
    {
        screen: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        textWrap:{
          padding: 10
        },
        details: {
            flexDirection: 'row',
            padding: 15,
            justifyContent: 'space-around'
        },
        textTitle: {
            textAlign:'center',
            fontSize:24,
            fontFamily:'open-sans-bold'
        },
        image: {
            width: '100%',
            height: 200
        },
        listItem:{
            marginVertical:10,
            marginHorizontal:20,
            borderColor:"#ccc",
            borderWidth:1,
            padding:10
        }
    }
)

export default MealDetailScreen;
