import React from "react";
import {Text, TouchableOpacity, StyleSheet, View, ImageBackground} from "react-native";
import DefaultText from "./DefaultText";

//this files holds the data of the mealsItem from a selected category

const MealItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onSelectMeal} style={Styles.mealItem}>
            <View >
                <View style={{...Styles.mealRow, ...Styles.mealHeader}}>
                    <ImageBackground source={{uri: props.imageUrl}} style={Styles.bgImage}>
                    <Text numberOfLines={2} style={Styles.title}>{props.title}</Text>
                    </ImageBackground>
                </View>
                <View style={{...Styles.mealRow, ...Styles.mealDetail}}>

                        <DefaultText>{props.duration}m</DefaultText>
                        <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
                        <DefaultText>{props.affordability.toUpperCase()}</DefaultText>

                </View>
            </View>

        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: "#c8c6c6",
        margin:2,
        overflow:'hidden',
        borderRadius:10
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        width:'100%',
        height: '15%',
        paddingHorizontal:10,
        justifyContent:'space-between',
        alignItems:'center',

    },
    mealRow: {
        flexDirection: 'row'
    },
    bgImage:{
        width:'100%',
        height:'100%',
        justifyContent: 'flex-end'
    },
    title:{
        fontFamily:'open-sans-bold',
        padding:8,
        fontSize:18,
        backgroundColor: 'rgba(0,0,0,0.5)',
        color:'white',
        textAlign:'center'
    }
})

export default MealItem;