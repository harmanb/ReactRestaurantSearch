import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Restaurant extends Component{
    render(){
        var price = "";
        for (var i = 0; i < this.props.restaurant.price; i++){
            price += "$";
        }
        return(
            
<Card className="text-center mt-3" style={{ width: '18rem' }}>
  <Card.Header>{this.props.restaurant.name}</Card.Header>
  <Card.Body>
    <Card.Text>
      Address: {this.props.restaurant.address}
      <br></br>
      Price: {price}
    </Card.Text>
    <Button variant="primary" onClick={() => {window.open(this.props.restaurant.reserve_url, "_blank")}}>Order</Button>
  </Card.Body>
</Card>
        );
        
    }
}
export default Restaurant;
