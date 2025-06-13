
import React from 'react';
import './Greet.css';

function Greet(props) {
  return (
    <div className="greet-card">
      <p><strong>Hello {props.name}</strong></p>
      <p>I'm {props.age} years old.</p>
      <p>I study at {props.school}.</p>
      <p>Located in {props.address}.</p>
    </div>
  );
}

export default Greet;
