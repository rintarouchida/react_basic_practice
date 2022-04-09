import React from 'react';

const ColorfulMessage = (props) => {
  const {color, children} = props;
  const contentStyle = {
    color: color,
    fontSize: '18px'
  };
  return (
  <h1 style={contentStyle}>{children}</h1>
  );
}

export default ColorfulMessage;
