import React from 'react';
import '../App.css';

const Square = (props) => {
  return (
    <div onClick={props.onClick} className='square'>
        <h5>{props.value}</h5>
      
    </div>
  )
}

export default Square
