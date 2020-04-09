import React, { Component } from 'react';

class App extends Component {
  state = {  }

  componentDidMount() {
    // This is usually where the api Call goes
  }

  static getDerivedStateFromProps(props, state) {
    // return new and updated state based on props
  }

  getSnapshotBeforeUpdate() {
    // create a backup of the way current things are
  }

  shouldComponentUpdate(nextProps, nextState) {
    // return true if want it to update
    // return false if not
  }

  componentWillUnmount() {
    // this is where you tear down or cleanup your code before your component dissappears
  }

  render() { 
    return ( 
      <div>
        Code goes here!
      </div>
     );
  }
}
 
export default App;
