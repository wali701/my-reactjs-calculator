import React from 'react';
import './ClearButton.css';

const ClearButton = ({ onClick }) => {
  return <button className="clear-btn" onClick={onClick}>Clear</button>;
};

export default ClearButton;
