import React from 'react';
import './Nft101.scss';
import { HeadingText, Card } from '../../components';
// import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { images } from '../../constants';


const Nft101 = () => {

  return (
    <section className='nft__section'>
        <div className='container'>
    
            <div>
                <div className="nft__head-container">
                    <div className="head__item">
                        <HeadingText text='NFT 101' />
                        <span className="head-text">Get comfortable with the basics.</span>
                    </div>

                    <a href="/learn" className='head__item'>
                        <button className='head-btn' type='button'>
                            <span>Learn More</span>
                        </button>
                    </a>
                </div>


                <div className="nft__flex-container">
                    <div className='nft__carousel'>
                        {/* <button aria-label='Previous slide' type='button' className='carousel__btn btn-left'>
                            <FiChevronLeft className='chevron-left' />
                        </button> */}
                        
                        <div className="section__grid-templates">
                            <div className="grid__templates">
                                <div className='grid__template-item'>
                                    <Card 
                                        text='Who is OpenSea?' 
                                        src={images.whoIsOpenseaNft}
                                        href='/learn/who-is-opensea' 
                                    />
                                    <Card 
                                        text='What is an NFT?' 
                                        src={images.whatIsNft}
                                        href='/learn/what-are-nfts' 
                                    />
                                    <Card 
                                        text='What is a crypto wallet?'  
                                        src={images.whatIsCryptoWallet}
                                        href='/learn/what-is-crypto-wallet'
                                    />
                                    {/* <Card text='What are blockchain gas fees?' src={images.whatAreGasFees} />
                                    <Card text='How buy an NFT?' src={images.howToBuy} />
                                    <Card text='How to create an NFT on OpenSea' src={images.howToCreate} />
                                    <Card text='How to sell an NFT using OpenSea' src={images.howToSell} />
                                    <Card text='What is minting?' src={images.whatIsMinting} /> */}
                                </div>
                            </div>
                        </div>
                        
                        {/* <button aria-label='Next slide' type='button' className='carousel__btn btn-right'>
                            <FiChevronRight className='chevron-right' />
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Nft101;