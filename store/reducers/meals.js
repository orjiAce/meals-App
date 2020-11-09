import MEALS from 'Data/meal-data'


const initialState = {
    meals: MEALS,
    favouriteMeals: {},
    filteredMeals:MEALS,
}

const mealsReducer = (state = initialState, action) =>{
   return state;
}

export default mealsReducer;