import React, { Component } from 'react';

class App extends Component {
  state = { 
    loading: false,
    character: { }
   }

  componentDidMount() {
    this.setState({ loading: true })
    fetch('https://reqres.in/api/users/1')
      .then(response => response.json())
      .then(data => {
        const user = data.data;
        this.setState({
          loading: false,
          character: user
        })
      })
  }

  render() { 
    return ( 
      <div>
        {this.state.loading ? 'Loading' : `${this.state.character.first_name} ${this.state.character.last_name}`}
      </div>
     );
  }
}
 
export default App;
