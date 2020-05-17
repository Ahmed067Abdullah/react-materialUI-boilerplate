import React from 'react';
import stylesheet from './Sample1.styles';

const Sample1 = () => {
  const classes = stylesheet();

  return (
    <div className={classes.root}>
      Sample1
    </div>
  )
}

export default Sample1;