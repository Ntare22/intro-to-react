import React, { Component } from 'react';

class App extends Component {
  state = { 
    firstName: '',
    lastName: '',
    isFriendly: true,
    gender: '',
    favColor: 'blue'
   }
  
  handleInputChange = (event) => {
    const { name, value, type, checked } = event.target
    type === 'checkbox' ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }
   
   render() { 
    return ( 
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='First Name' value={this.state.firstName} name='firstName' onChange={this.handleInputChange}/> 
          <input type='text' placeholder='Last Name' value={this.state.lastName} name='lastName' onChange={this.handleInputChange}/> 
          
          <div>{this.state.firstName} {this.state.lastName}</div>
          <textarea 
            value={'some default value'}
            onChange={this.handleInputChange}
          />
          <br />
          <label>
            <input 
              type='checkbox' 
              checked={this.state.isFriendly}
              name='isFriendly'
              onChange={this.handleInputChange}
            /> is Friendly?
          </label>
          <br />
          <label>
            <input 
              type='radio' 
              checked={this.state.gender === 'male'}
              name='gender'
              value='male'
              onChange={this.handleInputChange}
            /> Male
          </label>

          <label>
            <input 
              type='radio' 
              checked={this.state.gender === 'female'}
              name='gender'
              value='female'
              onChange={this.handleInputChange}
            /> Female
          </label>
          <h1>You are {this.state.gender}</h1>
          <br />
          <label>Favorite Color:</label>
          <select 
          value={this.state.favColor}
          onChange={this.handleInputChange}
          name='favColor'
          >
            <option value='blue'>blue</option>
            <option value='yellow'>yellow</option>
            <option value='green'>green</option>
            <option value='red'>red</option>
          </select>
          <h1>my favorite color {this.state.favColor}</h1>
          <button>Submit</button>
        </form>
      </div>
     );
  }
}
 
export default App;
