import React from 'react';
import './CardHeading.scss';


const CardHeading = ({ text }) => {
  return (
    <header>
        <div className="header__text">
            <span >{text}</span>
        </div>
    </header>
  );
}

export default CardHeading;