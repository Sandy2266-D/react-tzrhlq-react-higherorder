import React from 'react';
import './style.css';
function WithBorders(WrappedComponent) {
  return props => {
    const data = { ...props, name: props.name.toUpperCase() };
    console.log(data);
    return (
      <div style={{ border: '1px solid' }}>
        <WrappedComponent {...data} />
      </div>
    );
  };
}

export default WithBorders;
