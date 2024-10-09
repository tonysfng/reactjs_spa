import React from 'react';

const Title = (props) => {
  return (
    <h1 style={{ color: 'white', backgroundColor: 'blue', padding: '10px' }}>{props.text}</h1>
  );
};

export default Title;
