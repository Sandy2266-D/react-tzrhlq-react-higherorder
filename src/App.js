import React from 'react';
import './style.css';
import WithBorders from './WithBorders';

function App(props) {
  return (
    <div>
      <h1>Hello {props.name}</h1>
    </div>
  );
}

export default WithBorders(App);
