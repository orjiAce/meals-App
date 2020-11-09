import React from "react";
import {FlatList, View, StyleSheet} from "react-native";
import MealItem from "./MealItem";




//this is a reusable component which we can use to display our meals in a FlatList
const MealsList = (props) =>{

    const {navigation,listData} = props;

//this view will be rendered in the flatlist
//this view is getting its style from the MealItem component
    const renderList = (itemData) => {
        return (


            <MealItem imageUrl={itemData.item.imageUrl} title={itemData.item.title}
                      complexity={itemData.item.complexity} affordability={itemData.item.complexity}
                      duration={itemData.item.duration} onSelectMeal={() => {
                navigation.navigate({
                    routeName: 'MealDetail',
                    params: {
                        mealId: itemData.item.id
                    }
                })
            }} itemData={itemData}/>
        )
    }



    return (      <View style={MealsListStyle.meal}>
        <FlatList data={listData} renderItem={renderList} style={{width: '95%'}}/>

        {/*
            Manually adding the back button
            <Button title={"Go Back"} onPress={() => {props.navigation.goBack()}}/>
            */}
    </View>)
}


//the style
const MealsListStyle = StyleSheet.create({
    meal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default MealsList