import React from 'react';
import './Card.scss';

const Card = () => {
  return (
    <section>
        <a href={`/`} className="carousel__card-main">
            <div className="carousel__card-img">
                <span>
                    <img src='' alt="" />
                </span>
            </div>

            <div className="carousel__card-content">
                <div className="carousel__card-text">
                    <span>{}</span>
                </div>
            </div>
        </a>
    </section>
  );
}

export default Card;