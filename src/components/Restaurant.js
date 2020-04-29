import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Restaurant extends Component{
    render(){
        return(
            
<Card className="text-center mt-3" style={{ width: '18rem' }}>
  <Card.Header>{this.props.restaurant.name}</Card.Header>
  <Card.Body>
    <Card.Text>
      Address:
      <br></br>
      Price:
    </Card.Text>
    <Button variant="primary">Order</Button>
  </Card.Body>
</Card>
        );
        
    }
}
export default Restaurant;
