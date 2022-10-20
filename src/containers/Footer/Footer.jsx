import React from 'react';
import './Footer.scss';
import { BsTwitter } from 'react-icons/bs';
import { FaInstagram, FaDiscord, FaRedditAlien, FaYoutube, FaTiktok, FaRegEnvelope } from 'react-icons/fa';
import { images } from '../../constants';


const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__container">

            {/*  footer row  */}
            <div className="footer__row">
                <div className="footer__column footer__half">
                    <div className="footer__section-header">Stay in the loop</div>
                    <div className="footer__text">Join our mailing list to stay in the 
                        loop with our newest feature releases, NFT drops, and tips and 
                        tricks for navigating OpenSea.
                    </div>
                    <form>
                        <div className="mailingSignupForm__input-container">
                            <div className="mailingSignupForm__input-main">
                                <div className="mailingSignupForm__input">
                                    <input placeholder="Your email address" name="email" value="" />   
                                </div>
                            </div>
                            <button className="mailingSignupForm__button" type='button'>Sign up</button>
                        </div>
                    </form>
                </div>
                
                <div className="footer__column footer__half">
                    <div className="footer__section-header">Join the community</div>
                    <div className="footer__social-container">
                        <a href="/twitter.com" className='footer__social-link'>
                            <button className="footer__social-button" type='button'>
                                <div>
                                    <BsTwitter className='social-icon' />
                                </div>
                            </button>
                        </a>
                        <a href="/instagram.com" className='footer__social-link'>
                            <button className="footer__social-button" type='button'>
                                <div>
                                    <FaInstagram className='social-icon' />
                                </div>
                            </button>
                        </a>
                        <a href="/discord.gg" className='footer__social-link'>
                            <button className="footer__social-button" type='button'>
                                <div>
                                    <FaDiscord className='social-icon' />
                                </div>
                            </button>
                        </a>
                        <a href="/reddit.com" className='footer__social-link'>
                            <button className="footer__social-button" type='button'>
                                <div>
                                    <FaRedditAlien className='social-icon' />
                                </div>
                            </button>
                        </a>
                        <a href="/www.youtube.com" className='footer__social-link'>
                            <button className="footer__social-button" type='button'>
                                <div>
                                    <FaYoutube className='social-icon' />
                                </div>
                            </button>
                        </a>
                        <a href="/www.tiktok.com" className='footer__social-link'>
                            <button className="footer__social-button" type='button'>
                                <div>
                                    <FaTiktok className='social-icon' />
                                </div>
                            </button>
                        </a>
                        <a href="/blog/newsletter" className='footer__social-link'>
                            <button className="footer__social-button" type='button'>
                                <div>
                                    <FaRegEnvelope className='social-icon' />
                                </div>
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            
            {/*  footer row  */}
            <div className="footer__row">
                <div className="footer__column footer__quarter">
                    <span>
                        <img src={images.openSeaWhite} alt="Logo" className='openSea-logo' />
                    </span>

                    <a href="/openSea.io" className='footer__section-header'>OpenSea</a>

                    <div className="footer__text">The world’s first and largest digital marketplace 
                        for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover 
                        exclusive digital items.
                    </div>
                </div>
                
                <div className="footer__three-quarters">

                    {/*  link column  */}
                    <div className='footer__link-column'>

                        <h3 className="footer__link-header">Marketplace</h3>
                        <ul className="footer__link-list">
                            <li className="footer__link-wrapper">
                                <a href="/assets" className="footer__link">All NFTs</a>
                            </li>
                            <li className="footer__link-wrapper">
                                <a href="/solana-collections" className="footer__link">Solana NFTs</a>
                            </li>
                            <li className="footer__link-wrapper">
                                <a href="/category/art" className="footer__link">Art</a>
                            </li>
                            <li className="footer__link-wrapper">
                                <a href="/category/collectibles" className="footer__link">Collectibles</a>
                            </li>
                            <li className="footer__link-wrapper">
                                <a href="/category/domain-names" className="footer__link">Domain names</a>
                            </li>
                            <li className="footer__link-wrapper">
                                <a href="/category/music" className="footer__link">Music</a>
                            </li>
                            <li className="footer__link-wrapper">
                                <a href="/category/photography" className="footer__link">Photography</a>
                            </li>
                            <li className="footer__link-wrapper">
                                <a href="/category/sports" className="footer__link">Sports</a>
                            </li>
                            <li className="footer__link-wrapper">
                                <a href="/category/tarding-cards" className="footer__link">Trading Cards</a>
                            </li>
                            <li className="footer__link-wrapper">
                                <a href="/category/utilities" className="footer__link">Utilities</a>
                            </li>
                            <li className="footer__link-wrapper">
                                <a href="/category/virtual-worlds" className="footer__link">Virtual Worlds</a>
                            </li>
                        </ul>
                    </div>

                    {/*  link column  */}
                    <div className='footer__link-column'>

                        <h3 className="footer__link-header">My Account</h3>
                        <ul className="footer__link-list">
                            <li className="footer__link-wrapper">
                                <a href="/profile" className="footer__link">Profile</a>
                            </li>
                            <li className="footer__link-wrapper">
                                <a href="/favourite" className="footer__link">Favourite</a>
                            </li>
                            <li className="footer__link-wrapper">
                                <a href="/" className="footer__link">Watchlist</a>
                            </li>
                            <li className="footer__link-wrapper">
                                <a href="/" className="footer__link">My Collections</a>
                            </li>
                            <li className="footer__link-wrapper">
                                <a href="/" className="footer__link">Settings</a>
                            </li>
                        </ul>

                        <h3 className="footer__link-header header-top">Stats</h3>
                        <ul className="footer__link-list">
                            <li className="footer__link-wrapper">
                                <a href="/rankings" className="footer__link">Ranking</a>
                            </li>
                            <li className="footer__link-wrapper">
                                <a href="/activity" className="footer__link">Activity</a>
                            </li>
                        </ul>
                    </div>

                    {/*  link column  */}
                    <div className='footer__link-column'>
                        <h3 className="footer__link-header">Resources</h3>
                        <ul className="footer__link-list">
                            <li className="footer__link-wrapper">
                                <a href="/learn" className="footer__link">Learn</a>
                            </li>
                            <li className="footer__link-wrapper">
                                <a href="/help-center" className="footer__link">Help Center</a>
                            </li>
                            <li className="footer__link-wrapper">
                                <a href="/platform-status" className="footer__link">Platform Status</a>
                            </li>
                            <li className="footer__link-wrapper">
                                <a href="/partners" className="footer__link">Partners</a>
                            </li>
                            <li className="footer__link-wrapper">
                                <a href="/taxes" className="footer__link">Taxes</a>
                            </li>
                            <li className="footer__link-wrapper">
                                <a href="/blog" className="footer__link">Blog</a>
                            </li>
                            <li className="footer__link-wrapper">
                                <a href="/docs" className="footer__link">Docs</a>
                            </li>
                            <li className="footer__link-wrapper">
                                <a href="/newsletter" className="footer__link">Newsletter</a>
                            </li>
                        </ul>
                    </div>

                    {/*  link column  */}
                    <div className='footer__link-column'>
                        <h3 className="footer__link-header">Company</h3>
                        <ul className="footer__link-list">
                            <li className="footer__link-wrapper">
                                <a href="/about" className="footer__link">About</a>
                            </li>
                            <li className="footer__link-wrapper">
                                <a href="/careers" className="footer__link">Careers</a>
                            </li>
                            <li className="footer__link-wrapper">
                                <a href="/ventures" className="footer__link">Ventures</a>
                            </li>
                            <li className="footer__link-wrapper">
                                <a href="/grants" className="footer__link">Grants</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            {/*  footer bottom  */}
            <div className="footer__bottom">
                <div className="footer__bottom-section">
                    <p>© 2018 - 2022 Ozone Networks, Inc</p>
                </div>
                <div className="footer__bottom-section">
                    <a className="footer__link" href="/privacy">Privacy Policy</a>
                    <a className="footer__link" href="/tos">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;