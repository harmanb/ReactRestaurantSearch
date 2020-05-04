
import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { restaurantSearch } from '../actions';
import axios from 'axios';




class Search extends Component{
  
     
    render(){
        return(  

            <Navbar bg="dark" variant="dark" className="d-flex justify-content-center">
            <Navbar.Brand href="#home">Restaurant Search</Navbar.Brand>
            
            <Form inline>
              <FormControl type="text" placeholder="City" className="mr-sm-2" id="city" />
              <FormControl type="text" placeholder="Additional criteria" className="mr-sm-2" id="extra-info"/>

              <Button variant="outline-info" id="searchSubmit" onClick={() => {
    
                    var city = document.getElementById('city').value;
                    var extraInfo = document.getElementById('extra-info').value
                    axios.get(`https://opentable.herokuapp.com/api/restaurants?city=${city}`)
                    .then(res => {
                    this.props.restaurantSearch(res.data.restaurants);
                    });
                }}>
                Search</Button>
            </Form>
          </Navbar>
         
          
        );
        
    }
}

const mapStateToProps = (state) => {
    if(state != null){
        return {restaurants: state.restaurants};
    }
    return {restaurants: null};
}
export default connect(mapStateToProps, {restaurantSearch})(Search);


