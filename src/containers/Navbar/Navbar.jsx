import React from 'react';
import './Navbar.scss';
import { MdSearch, MdOutlineAccountBalanceWallet, MdOutlineShoppingCart } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { images } from '../../constants';

const Navbar = () => {
  return (
    <nav>
      <div className='container'>
        <div className='navbar'>

          {/*  logo section  */}
          <div className="navbar__logo">
            <a href="/" className='navbar__logo-link'>
              <div>
                <span className='openSea-logo' >
                  <img src={images.openSea} alt="OpenSea Logo" />
                </span>
              </div>

              <h2 className="navbar__logo-text">OpenSea</h2>
            </a>
          </div>
          
          {/*  input-search section  */}
          <div className="navbar__input-search">
            <div className=""></div>

            <div className="navbar__input-serach-container">
              <div className='nav__input'>
                <div className="nav__input-flex">
                  <div className='search__icon'>
                    <MdSearch />
                  </div>
                  <input type="search" className='search__box' placeholder='Search items, collections, and accounts' />
                </div>
              </div>
            </div>
          </div>
          
          {/*  link-list section  */}
          <ul>
            <div className="ul__flex-item">
              <div className='list__container'>
                <li className='nav__link-list'>
                  <a href="/explore-collections">Explore</a>
                </li>
                
                <li className='nav__link-list'>
                  <a href="/rankings">Stats</a>
                </li>
                
                <li className='nav__link-list'>
                  <a href="/learn">Resources</a>
                </li>
                
                <li className='nav__link-list'>
                  <a href="/assets/create">Create</a>
                </li>
              </div>
            </div>

            <div className="ul__flex-item">
              <div className="list__container">
                <div>
                  <li className="nav__link-list">
                    <a href="/">
                      <CgProfile className='account__profile' />
                    </a>
                  </li>
                </div>

                <div>
                  <li className="nav__link-list">
                    <div className="withButton">
                      <button type='button'>
                        <MdOutlineAccountBalanceWallet className='account__balance-wallet' />
                      </button>
                    </div>
                  </li>
                </div>

                <div>
                  <li className="nav__link-list">
                    <div className="withButton">
                      <button type='button'>
                        <MdOutlineShoppingCart className='shopping__cart' />
                      </button>
                    </div>
                  </li>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;