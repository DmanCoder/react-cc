import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, color, text, onAdd }) => {
  return (
    <button onClick={onAdd} style={{ backgroundColor: color }} className="btn">
      {title}
    </button>
  );
};

Button.defaultProps = {
  color: 'steelblue',
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
