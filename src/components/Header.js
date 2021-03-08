import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathName === '/' ? (
        <Button
          onAdd={onAdd}
          color={showAdd ? 'red' : 'green'}
          text="hello"
          title={showAdd ? 'Close' : 'Add'}
        />
      ) : null}
    </header>
  );
};

Header.defaultProps = {
  title: 'Task track',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
