import React, { Component } from 'react';

import RestaurantList from './RestaurantList';
import Search from './Search';



class App extends Component{
 
  
//   componentDidMount() {
//     const self = this;

//     document.getElementById('searchSubmit').addEventListener("click", function(){
//       loadRestaurantResults(self);
//     });
// }
  render() {
    return (
      <div>
        <Search />

          <RestaurantList />
       </div>
    );
  }
}

// function loadRestaurantResults(self){
    
//   var city = document.getElementById('city').value;
//   var extraInfo = document.getElementById('extra-info').value
//   axios.get(`https://opentable.herokuapp.com/api/restaurants?city=${city}`)
//   .then(res => {
  
//       self.state.restaurants = res.data.restaurants;
//       self.forceUpdate();
//   });
// }
export default App;
