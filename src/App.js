import React, { Component } from 'react';

class App extends Component {
 
  state = { 
    isLoggedIn: true
   }

  render() { 
    let wordDisplay = this.state.isLoggedIn ? 'in' : 'out'
    return ( 
      <div>
        <h1>You are currently logged {wordDisplay}</h1>
      </div>
     );
  }
}
 
export default App;
