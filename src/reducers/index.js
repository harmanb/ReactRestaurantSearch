
export const restaurantsReducer = (restaurantList = null, action) =>{
    if (action.type === 'RESTAURANT_SEARCH'){
        return action.payload;
    }

     return restaurantList;
    
}