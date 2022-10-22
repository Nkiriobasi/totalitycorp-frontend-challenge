import React from 'react';
import './NewAndNotable.scss';
import { CardWithSub, HeadingText } from '../../components';
import { images } from '../../constants';


const NewAndNotable = () => {
  return (
    <section className='new__and-notable'>
        <div className="container">
            <HeadingText text='New and notable' />

            <div className="section__grid-templates">
                <div className="grid__templates">
                    <div className="grid__template-item">
                        <CardWithSub 
                            text='CyberBrokers' 
                            src={images.cyberBrokers} 
                            href='/collection/cyberbrokers' 
                        />

                        <CardWithSub 
                            text='Amazonia - Sebastiao Salgado' 
                            src={images.amazoniaSebastiao} 
                            href='/collection/amazonia-sebastiao-salgado' 
                        />

                        <CardWithSub 
                            text='LetsWalk' 
                            src={images.letsWalk} 
                            href='/collection/letswalk' 
                        />

                        {/* <CardWithSub 
                            text='Genuine Undead' 
                            src={images.genuineUndead} 
                            href='/collection/genuine-undead' 
                        />

                        <CardWithSub 
                            text='Murakami.Flowers Official' 
                            src={images.murakamiFlowers} 
                            href='/collection/murakami-flowers-2022-official' 
                        /> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default NewAndNotable;