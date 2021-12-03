import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button';


const Header = ({title}) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={event => console.log(event)}/>
    </header>
  )
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string,
};

export default Header
