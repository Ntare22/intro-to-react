import React, { Component } from 'react';

class App extends Component {
  state = {
    loggedIn: false
  }

  handleLogin = () => {
    return (
      this.state.loggedIn ? this.setState({ loggedIn: false }) : this.setState({ loggedIn: true })
    )
  }

  render() { 
    return ( 
      <div>
        <h1>{this.state.loggedIn ? 'User is logged in' : 'User is logged out'}</h1>
        <button onClick={this.handleLogin}>{this.state.loggedIn ? 'Logout' : 'Login'}</button>
      </div>
     );
  }
}
 
export default App;

