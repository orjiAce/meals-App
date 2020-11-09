import React from "react";
import {Platform} from "react-native";
import {HeaderButton} from 'react-navigation-header-buttons'
import {Ionicons} from '@expo/vector-icons'

import Colors from "../constants/Colors";

//this component holds our headerButton package
const CustomHeaderButtons = props =>{
    return <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} color={Platform.OS === 'android' ? "#ffffff": Colors.primaryColor}/>
}

export default CustomHeaderButtons