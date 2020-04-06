import React from "react";

const Joke = (props) => {
  return (
    props.question !== undefined && props.punchline !== '' ?
    <React.Fragment>
      <p>Question: {props.question}</p>
      <p>Punchline: {props.punchline}</p>
    </React.Fragment> :
    <React.Fragment>
      <p>Punchline: {props.punchline}</p>
    </React.Fragment>
  );
};

export default Joke;
