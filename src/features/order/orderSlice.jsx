import { createSlice } from '@reduxjs/toolkit';

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    totalMeals: 0,
    ordersList: []
  },
  reducers: {
   
    addMealToOrder: (state, action) => {
        // state.mealsList = action.payload;
        // state.totalMeals += 1;
    },
    removeMealFromOrder: (state, action) => {
        // state.mealssList = action.payload;
        // state.totalMeals -= 1;
    },
    deleteMealFromOrder: (state, action) => {
        // const mealId = action.payload[0];
        // state.totalMealss -= action.payload[1];
        // state.mealsList = state.mealsList.filter(meal => meal.id != mealId);
    },
    // hydrate:(state, action) => {
    //     return action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { addMealToOrder, removeMealFromOrder, deleteMealFromOrder } = orderSlice.actions

export default orderSlice.reducer;