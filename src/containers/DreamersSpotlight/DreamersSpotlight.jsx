import React from 'react';
import './DreamersSpotlight.scss';
import { CardWithSub, HeadingText } from '../../components';
import { images } from '../../constants';


const DreamersSpotlight = () => {
  return (
    <section className='dreamer__spotlight'>
      <div className="container">
        <HeadingText text='Dreamers spotlight' />

        <div className="section__grid-templates">
          <div className="grid__templates">
            <div className="grid__template-item">
              <CardWithSub 
                text='Dreams by Joshua Bagley'
                src={images.dreamByJoshua}
                href='/collection/dreams-by-joshua-bagley'
              />

              <CardWithSub 
                text='Aotearoa Dreaming - New Zealand'
                src={images.aotearoaDreaming}
                href='/collection/aotearoa-dreaming'
              />

              <CardWithSub 
                text='Synthetic Dreams by Refik Anadol'
                src={images.syntheticDreams}
                href='/collection/synthetic-dreams'
              />

              {/* <CardWithSub 
                text='Tinted Dreams Collection'
                src={images.tintedDreamsCollection}
                href='/collection/tinted-dreams-collection'
              />

              <CardWithSub 
                text='Dreamers by Yugal'
                src={images.dreamersByYugal}
                href='/collection/dreamers-by-yugal'
              />

              <CardWithSub 
                text='Beauty in Dreamland'
                src={images.beautyInDreamland}
                href='/collection/dreamers-by-yugal'
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DreamersSpotlight;