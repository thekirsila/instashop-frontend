import React from 'react';

const ColorPicker = ({ setColor }) => {
  return (
    <input
      type="color"
      className="color-picker"
      onChange={(e) => setColor(e.target.value)}
    />
  );
};

export default ColorPicker;
