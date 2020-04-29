import React, { Component } from 'react';

import RestaurantList from './components/RestaurantList';
import Search from './components/Search';


class App extends Component{
  state = {
    restaurants: [
      {name: "Burger King"},
      {name: "Burrito Boyz"},
      {name: "Pizza Hut"}
    ] 
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
export default App;
