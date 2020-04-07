import React, { Component } from 'react';

class App extends Component {
  state = { 
    count: 0
   }

  handleClick = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
    console.log('I\'ve clicked the change button')
  }

  render() { 
    return ( 
      <div style={{paddingLeft: 25}}>
        <h1 style={{paddingLeft: 25}}>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change!</button>
      </div>
     );
  }
}
 
export default App;
