
import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/Formcontrol';
import Button from 'react-bootstrap/Button';





class Search extends Component{
  
     
    render(){
        return(  

            <Navbar bg="dark" variant="dark" className="d-flex justify-content-center">
            <Navbar.Brand href="#home">Restaurant Search</Navbar.Brand>
            
            <Form inline>
              <FormControl type="text" placeholder="City" className="mr-sm-2" id="city" />
              <FormControl type="text" placeholder="Additional criteria" className="mr-sm-2" id="extra-info"/>

              <Button variant="outline-info" id="searchSubmit" >Search</Button>
            </Form>
          </Navbar>
         
          
        );
        
    }
}

export default Search;


