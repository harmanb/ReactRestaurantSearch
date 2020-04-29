import React, {Component} from 'react';
import Restaurant from './Restaurant';
import Container from 'react-bootstrap/Container';

class RestaurantList extends Component{
    render(){
        return(
            this.props.restaurants.map((restaurant) => (
                <Container className="d-flex justify-content-center">
                <Restaurant restaurant={restaurant} />
                </Container>
            ))
        );
        
    }
}
export default RestaurantList;