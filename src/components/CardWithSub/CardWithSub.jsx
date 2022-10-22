import React from 'react';
import './CardWithSub.scss';
import { MdVerified } from 'react-icons/md';

const CardWithSub = ({ text, alt, href, src }) => {
  return (
    <div className='carousel__card'>
        <a href={href} className="carousel__card-main">
            <div className="carousel__card-img">
                <span>
                    <img src={src} alt={alt} />
                </span>
            </div>

            <div className="carousel__card-content">
                <div className="carousel__card-small-img">
                    <span>
                        <img src={src} alt={alt} />
                    </span>
                </div>

                <div className="carousel__card-content-text">
                    <div className="text-top">
                        <div className="text-main">{text}</div>

                        <div className="verificationIcon-icon-wrap">
                            <div className="verificationIcon-icon">
                                <MdVerified className='icon-main' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
  );
}

export default CardWithSub;