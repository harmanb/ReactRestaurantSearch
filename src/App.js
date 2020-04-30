import React, { Component } from 'react';

import RestaurantList from './components/RestaurantList';
import Search from './components/Search';
import axios from 'axios';



class App extends Component{
  state = {
    restaurants: [
      {name: "Burger King"},
      {name: "Burrito Boyz"},
      {name: "Pizza Hut"}
    ] 
  }
  
  componentDidMount() {
    const self = this;

    document.getElementById('searchSubmit').addEventListener("click", function(){
      loadRestaurantResults(self);
    });
}
  render() {
    return (
      <div>
        <Search />

          <RestaurantList restaurants={this.state.restaurants} />
       </div>
    );
  }
}

function loadRestaurantResults(self){
    
  var city = document.getElementById('city').value;
  var extraInfo = document.getElementById('extra-info').value
  axios.get(`https://opentable.herokuapp.com/api/restaurants?city=${city}`)
  .then(res => {
  
      self.state.restaurants = res.data.restaurants;
      self.forceUpdate();
  });
}
export default App;
