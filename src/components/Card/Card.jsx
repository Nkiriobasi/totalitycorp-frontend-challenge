import React from 'react';
import './Card.scss';


const Card = ({ text, alt, href, src }) => {
  return (
    <div className='carousel__card'>
        <a href={href} className="carousel__card-main">
            <div className="carousel__card-img">
                <span>
                    <img src={src} alt={alt} />
                </span>
            </div>

            <div className="carousel__card-content">
                <div className="carousel__card-text">
                    <span>{text}</span>
                </div>
            </div>
        </a>
    </div>
  );
}

export default Card;