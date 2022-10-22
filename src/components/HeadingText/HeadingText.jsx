import React from 'react';
import './HeadingText.scss';


const HeadingText = ({ text }) => {
  return (
    <header>
        <div className="header__text">
            <span >{text}</span>
        </div>
    </header>
  );
}

export default HeadingText;