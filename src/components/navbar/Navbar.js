import React from 'react';
import stylesheet from './Navbar.styles';

const Navbar = () => {
  const classes = stylesheet();

  return (
    <div className={classes.container}>
      Navbar
    </div>
  )
}

export default Navbar;