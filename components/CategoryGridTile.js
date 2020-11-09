import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, TouchableNativeFeedback, Platform} from 'react-native';
import CategoryList from "../Data/dummy-data";

const CategoryGridTile = ({color, title, onSelect}, props) => {

    //this helps create a ripple effect on the android platform
let TouchableCmp = TouchableOpacity;

    if(Platform.OS === 'android' && Platform.Version >= 21){
        TouchableCmp = TouchableNativeFeedback
    }

    return (
        //this will render our grid item
        <View style={Styles.gridItemStyle}>


        <TouchableCmp style={{flex:1}} onPress={() => onSelect()}>
            <View style={{...Styles.container, ...{backgroundColor: color}}}>
                <Text style={Styles.title}>{title}</Text>
            </View>
        </TouchableCmp>
        </View>
    );

}

const Styles = StyleSheet.create({
    gridItemStyle: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow:'hidden'
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        fontFamily: 'open-sans-bold',
    },
    title:{
        fontFamily: 'open-sans-bold',
        fontSize:20,
        textAlign:'right'
    }
})

export default CategoryGridTile;
