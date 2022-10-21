import React from 'react';
import './BrowseByCategory.scss';
import { Card, CardHeading } from '../../components';
import { images } from '../../constants'


const BrowseByCategory = () => {
  return (
    <section className='category__section'>
        <div className="container">
            <CardHeading text='Browse by category' />

            <div className="section__grid-templates">
                <div className="grid__templates">

                    <div className='grid__template-item'>
                        <Card
                            className='template-item' 
                            text='Art' 
                            src={images.artWallpaper}
                            alt='Art' 
                            href='/category/art' 
                        />
                        <Card
                            className='template-item' 
                            text='Music' 
                            src={images.musicWallpaper} 
                            alt='Music' 
                            href='/category/music' 
                        />
                        <Card
                            className='template-item' 
                            text='Trading Cards' 
                            src={images.tradingCardsWallpaper} 
                            alt='Trading Cards' 
                            href='/category/trading-cards' 
                        />
                    </div>

                    <div className='grid__template-item'>
                        <Card 
                            text='Collectibles' 
                            src={images.collectiblesWallpaper}
                            alt='Collectibles' 
                            href='/category/collectibles' 
                        />
                        <Card 
                            text='Photography' 
                            src={images.photographyWallpaper} 
                            alt='Photography' 
                            href='/category/photography' 
                        />
                        <Card 
                            text='Utility' 
                            src={images.utilityWallpaper}
                            alt='Utility' 
                            href='/category/utility' 
                        />
                    </div>

                    <div className='grid__template-item'>
                        <Card 
                            text='Domain Names' 
                            src={images.domainNames}
                            alt='Domain names' 
                            href='/category/domain-names' 
                        />
                        <Card 
                            text='Sports' 
                            src={images.sportsWallpaper} 
                            alt='Sports' 
                            href='/category/sports' 
                        />
                        <Card 
                            text='Virtual Worlds' 
                            src={images.virtualWorldsWallpaper} 
                            alt='Virtual Worlds' 
                            href='/category/virtual-worlds' 
                        />
                    </div>

                </div>
            </div>
        </div>
    </section>
  );
}

export default BrowseByCategory;
