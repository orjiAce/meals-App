import React, {Component, useCallback, useEffect, useState} from 'react';
import {Text, View, StyleSheet, Switch} from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButtons from "../components/HeaderButton";
import Colors from "../constants/Colors";


//here i will create an inner reusable component for my Switch
const FilterSwitch = props => {
    return <View style={FilterStyle.filterContainer}>
        <Text>{props.label}</Text>
        {/*
                    this is a react default Switch Component,
                    the Switch is fully customizable as you can see
                    */}
        <Switch thumbColor={Colors.accentColor} trackColor={{true: Colors.primaryColor, false: "#ccc"}}
                value={props.state} onValueChange={props.onChange}/>
    </View>
}



const FilterScreen = (props) => {

    //u can use useState to manage the state ofb the Switch Component
    const [isGluttonFree, setGluttonFree] = useState(false)
    const [isLactoseFree, setLactoseFree] = useState(false)
    const [isVegan, setVegan] = useState(false)
    const [isVegetarian, setVegetarian] = useState(false)





    //here we save our filter states
    const SaveFilters = useCallback(() =>{
        //save the filter states in an array

        const appliedFilters = {
            gluttonFree: isGluttonFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        }
        console.log(appliedFilters)
        //these are the dependencies for this function to update
    },[isGluttonFree, isLactoseFree, isVegan, isVegetarian])


    useEffect(()=>{
        props.navigation.setParams({save: SaveFilters})
        //so this useEffect depends on 'SaveFilters' function to
        //so whenever the functions is triggered it sets values from 'SaveFilters' functions to save Params
    },[SaveFilters])

    return (
        <View style={FilterStyle.filterScreen}>
            <Text style={FilterStyle.title}>
                Available Filter / Restrictions
            </Text>
            {/*
a reusable Switch Component
*/}
            <FilterSwitch label='Glutton free' state={isGluttonFree} onChange={newValue => setGluttonFree(newValue)}/>
            <FilterSwitch label='Lactose free' state={isLactoseFree} onChange={newValue => setLactoseFree(newValue)}/>
            <FilterSwitch label='Vegan' state={isVegan} onChange={newValue => setVegan(newValue)}/>
            <FilterSwitch label='Vegetarian' state={isVegetarian} onChange={newValue => setVegetarian(newValue)}/>
        </View>

    );

}


//hear we can properties to our Category screen as objects
//we will add and style our header here

FilterScreen.navigationOptions = navData => ({
    headerTitle: "Filter screen",
    //here we add the hamburger menu icon for then navigation drawer
    //reason is we have to manually add it on the page that we want the navigation drawer to work
    headerLeft: () => (<HeaderButtons HeaderButtonComponent={CustomHeaderButtons}>
        <Item title='Menu' iconName='ios-menu' onPress={() => {
            navData.navigation.toggleDrawer()
        }}/>
    </HeaderButtons>),
    headerRight: () =>(
        //this is the header button that saves the filters
        //
        <HeaderButtons HeaderButtonComponent={CustomHeaderButtons}>
            <Item title='Save button' iconName='ios-save' onPress={
                navData.navigation.getParam('save')
            }/>
        </HeaderButtons>
    )

})

const FilterStyle = StyleSheet.create({
    filterScreen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    }
})

export default FilterScreen;
