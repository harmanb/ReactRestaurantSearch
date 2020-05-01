export const restaurantSearch = restaurants => {
    console.log(restaurants);
    return {
        type: 'RESTAURANT_SEARCH',
        payload: restaurants
    };
};