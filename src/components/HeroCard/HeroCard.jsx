import React from 'react';
import './HeroCard.scss';
import { MdVerified } from 'react-icons/md';


const HeroCard = ({ src, text, floor, href }) => {
  return (
    <div className='hero__card'>
        <div className="hero__card-container">

            <a href={href} className="hero__card-link">
                <div className="hero__card-link-wrapper">
                    <span>
                        <img src={src} alt="" />
                    </span>

                    <div className="hero__card-text-cont">
                        <div className="hero__text-flex">
                            <div>
                                <h5 className="hero__h5-text">
                                    {text}
                                    <div className="hero__verifiedIcon">
                                        <MdVerified className='verifiedIcon-icon' />
                                    </div>
                                </h5>
                            </div>
                        </div>

                        <span>
                            <span className='hero__floor-numeric'>Floor: {floor}</span>
                        </span>
                    </div>
                </div>
            </a>
        </div>
    </div>
  );
}

export default HeroCard;