import React from 'react';
import './style.css';
const user = {
  name: 'Sandy',
  age: 26
};
function WithUser(WrappedComponent) {
  return props => {
    return (
      <div style={{ border: '1px solid' }}>
        <WrappedComponent {...props} user={user} />
      </div>
    );
  };
}

export default WithUser;
