import React, { Component } from 'react';

class App extends Component {
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='firstName' placeholder='First Name' onChange={this.handleChange} />
          <br />
          <input type='tex' name='lastName' placeholder='Last Name' onChange={this.handleChange} />
          <br />
          <input type='number' name='age' placeholder='Age' onChange={this.handleChange} />
          <div>
            <p>Gender</p>
            <label>
              <input name='gender' type='radio' value='male' onChange={this.handleChange} />
              Male
            </label>
            <br />
            <label>
              <input name='gender' type='radio' value='female' onChange={this.handleChange} />
              Female
            </label>
            <br />
            <label>
              <input name='gender' type='radio' value='not-specified' onChange={this.handleChange} />
              Prefer not to say
            </label>
          </div>
          <div>
            <p>Destination</p>
            <select onChange={this.handleChange} name='destination' value={this.state.value} >
              <option value='kigali'>Kigali</option>
              <option value='nairobi'>Nairobi</option>
              <option value='kampala'>Kampala</option>
            </select>
          </div>
          <div name='diet'>
            <p>Dietary Restrictions</p>
            <label>
              <input type='checkbox' value='kosher' name='diet' onChange={this.handleChange} />
              Kosher
            </label>
            <label>
              <input type='checkbox' value='vegetarian' name='diet' onChange={this.handleChange} />
              Vegetarian
            </label>
            <label>
              <input type='checkbox' value='Lactose Free' name='diet' onChange={this.handleChange} />
              Lactose Free
            </label>
          </div>
          <br />
          <button>Submit</button>
        </form>
      </div>
     );
  }
}
 
export default App;
