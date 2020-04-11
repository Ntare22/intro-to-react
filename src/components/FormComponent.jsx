import React from 'react';

const FormComponent = (props) => {
  return (
    <div>
        <form onSubmit={props.handleSubmit}>
          <input type='text' name='firstName' placeholder='First Name' onChange={props.handleChange} />
          <br />
          <input type='tex' name='lastName' placeholder='Last Name' onChange={props.handleChange} />
          <br />
          <input type='number' name='age' placeholder='Age' onChange={props.handleChange} />
          <div>
            <p>Gender</p>
            <label>
              <input name='gender' type='radio' value='male' onChange={props.handleChange} />
              Male
            </label>
            <br />
            <label>
              <input name='gender' type='radio' value='female' onChange={props.handleChange} />
              Female
            </label>
            <br />
            <label>
              <input name='gender' type='radio' value='not-specified' onChange={props.handleChange} />
              Prefer not to say
            </label>
          </div>
          <div>
            <p>Destination</p>
            <select onChange={props.handleChange} name='destination' value={props.data.value} >
              <option value='kigali'>Kigali</option>
              <option value='nairobi'>Nairobi</option>
              <option value='kampala'>Kampala</option>
            </select>
          </div>
          <div name='diet'>
            <p>Dietary Restrictions</p>
            <label>
              <input type='checkbox' value='kosher' name='diet' onChange={props.handleChange} />
              Kosher
            </label>
            <label>
              <input type='checkbox' value='vegetarian' name='diet' onChange={props.handleChange} />
              Vegetarian
            </label>
            <label>
              <input type='checkbox' value='Lactose Free' name='diet' onChange={props.handleChange} />
              Lactose Free
            </label>
          </div>
          <br />
          <button>Submit</button>
        </form>
      </div>
  );
}

export default FormComponent;

