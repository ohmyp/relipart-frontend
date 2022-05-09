import './Button.scss'
import React from 'react';

const Button = ({ children, lined }) => {
  return (
    !lined ? 
    <button className='button'>
      {children}
    </button>
    : 
    <div className="button__wrapper">
      <button className='button'>
        {children}
      </button>
      <div className="button__line"></div>
    </div>
  );
}

export default Button;
