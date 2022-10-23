import React from 'react';
import './Hero.scss';
import { HeroCard } from '../../components';
import { images } from '../../constants';


const Hero = () => {
  return (
    <section className='hero'>
        <div className="container">
            
            <div className="hero__heading">
                <div className='heading-container'>
                    <div className="heading-div">
                        <h1 className="heading-text">Explore, collect, and sell NFTs</h1>
                    </div>
                </div>
            </div>

            <div className="section__grid-templates">
                <div className='grid__templates'>
                    <div className="grid__template-item">
                        <HeroCard 
                            text='Ani Mkhitaryan' 
                            src={images.aniMkhitaryan} 
                            href='/collection/animkhitaryan'
                            floor='0.06 ETH' 
                        />

                        <HeroCard 
                            text='ArtWork by Ollool' 
                            src={images.artWorkByOllool} 
                            href='/collection/artworkbyollool' 
                            floor='0.05 ETH'
                        />

                        <HeroCard 
                            text='Neko Nation' 
                            src={images.nekoNation} 
                            href='/collection/nekonation' 
                            floor='0.04 ETH'
                        />

                        {/* <HeroCard 
                            text='SAN Origin' 
                            src={images.sanOrigin} 
                            href='/collection/sanorigin' 
                            floor='0.06 ETH'
                        />

                        <HeroCard 
                            text='The Ladies' 
                            src={images.theLadies} 
                            href='/collection/theladies'
                            floor='1 ETH' 
                        /> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Hero;