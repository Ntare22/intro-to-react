import React, { Component } from 'react';
import FormComponent from '../FormComponent';

class Form extends Component {
  state = { 
    firstName: '',
    lastName: '',
    age: '',
    destination: '',
    gender: '',
   }

  handleChange = (event) => {
    const { name, value, checked, type } = event.target
    console.log(name, value)
    type === 'checkbox' ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    const checkedBoxes = Object.values(event.target.diet).filter(input => input.checked === true)
    const diet = checkedBoxes.map(input => input.value)
    
    const info = {
      firstname: event.target.firstName.value,
      lastname: event.target.lastName.value,
      age: event.target.age.value,
      gender: event.target.gender.value,
      destination: event.target.destination.value,
      diet
    }
  
    alert(`
      Name: ${info.firstname} ${info.lastname}
      Age: ${info.age}
      Gender: ${info.gender}
      Destination: ${info.destination},
      Dietary Restrictions: ${info.diet}
      ` )
    
    event.preventDefault();
  }

  render() { 
    return ( 
      <FormComponent 
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        data={this.state}
      />
    );
  }
}
 
export default Form;
