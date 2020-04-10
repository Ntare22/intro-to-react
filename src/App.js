import React, { Component } from 'react';

class App extends Component {
  state = { 
    firstName: '',
    lastName: ''
   }
  
  handleInputChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }
   
   render() { 
    return ( 
      <div>
      <form>
        <input type='text' placeholder='First Name' value={this.state.firstName} name='firstName' onChange={this.handleInputChange}/> 
        <input type='text' placeholder='Last Name' value={this.state.lastName} name='lastName' onChange={this.handleInputChange}/> 
      </form>
      <div>{this.state.firstName} {this.state.lastName}</div>
      </div>
     );
  }
}
 
export default App;
