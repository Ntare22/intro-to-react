import React, { Component } from 'react';
import Conditional from './components/Conditional'

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = { 
  //     isLoading: true
  //    }
  // }
  state = {
    isLoading: true,
    unreadMessages: [
      'Call your Mom!',
      'New Spam email available. All links are definitely safe to clicke'
    ]
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1500)
  }

  render() { 
    return ( 
      <div>
        {
          this.state.isLoading ? 
          <h1>Loading...</h1> : 
          <Conditional />
        }

        {
          this.state.unreadMessages.length > 0 && 
          <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
        }
        
      </div>
     );
  }
}
 
export default App;
