import React from "react";
import {Text, StyleSheet} from "react-native";

//here is our customizable text component
const DefaultText = (props) => {
    return(
        <Text style={Styles.textStyle}>
            {props.children}
        </Text>
    )

}

const Styles = StyleSheet.create({
    textStyle:{
        fontFamily:'open-sans-bold'
    }
})

export default DefaultText