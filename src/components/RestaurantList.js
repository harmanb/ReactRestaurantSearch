import React, {Component} from 'react';
import Restaurant from './Restaurant';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import { restaurantSearch } from '../actions';

class RestaurantList extends Component{
    render(){

        if(this.props != null && this.props.restaurants != null){
            return(
                this.props.restaurants.map((restaurant) => (
                    <Container className="d-flex justify-content-center">
                    <Restaurant restaurant={restaurant} />
                    </Container>
                ))
            );
        }else{

            return(
                <div></div>
            );
        }
        
    }
}

const mapStateToProps = (state) => {
    
    if(state != null){
        return {restaurants: state};
    }
    return {restaurants: null};
}
export default connect(mapStateToProps)(RestaurantList);
