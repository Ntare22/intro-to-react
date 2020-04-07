import React from 'react';

function handleClick() {
  console.log('I was clicked');
}


const App = () => {
  return (
    <div>
      <img src='https://www.fillmurray.com/200/100' alt='' onMouseOver={() => {console.log('Hovered over image!')}} />
      <br />
      <br />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;


