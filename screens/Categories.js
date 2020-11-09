import React from 'react';
import { View, StyleSheet, FlatList} from 'react-native';
import CategoryList from "../Data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
//this package is use to add to add buttons to the header
import { HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButtons from "../components/HeaderButton";


const CategoriesScreen = ({navigation}, props) => {


    //this will render our grid item
    const renderGridItem = (itemData) => {
        return (
            //using the Navigation props here with the onPress event we can navigate to another page
            //as you can see we can also add parameters for the navigated page to use
            <CategoryGridTile itemData={itemData} color={itemData.item.color} title={itemData.item.title}
                              onSelect={() => navigation.navigate({routeName: "CategoryMeal", params: {
                    categoryId: itemData.item.id
                }})}/>
        )
    }


    return (
        <View>
            {/*using a flatlist to render our category items*/}
            <FlatList data={CategoryList} renderItem={renderGridItem} numColumns={2}/>
        </View>
    )

}


//hear we can properties to our Category screen as objects
//we will add and style our header here

CategoriesScreen.navigationOptions = navData => ({
    headerTitle: "Meal Categories",
    //here we add the hamburger menu icon for then navigation drawer
    //reason is we have to manually add it on the page that we want the navigation drawer to work
headerLeft: () => (<HeaderButtons  HeaderButtonComponent={CustomHeaderButtons}>
    <Item title='Menu' iconName='ios-menu' onPress={() => {
        navData.navigation.toggleDrawer()
    }}/>
</HeaderButtons>)

})

//here is our style object
const CategoryStyles = StyleSheet.create(
    {
        screen: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },

        buttonStyle: {
            backgroundColor: "#d3d",
            color: "#d3d"
        },
        gridItemStyle: {
            flex: 1,
            margin: 15,
            height: 150
        }

    }
)

export default CategoriesScreen;
