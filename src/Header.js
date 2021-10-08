import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>

            <Link to="/">
                <img className='header_logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>



            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav">
                <div className='header_option'>

                    <span className="header_optionLineOne">Hello Guest</span>
                    <span className="header_optionLineTwo">Sign In</span>

                </div>

                <div className='header_option'>

                    <span className="header_optionLineOne">Retruns</span>
                    <span className="header_optionLineTwo">& Order</span>

                </div>

                <div className='header_option'>
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
            </div>

            <Link to="/Checkout">
                <div className="header_optionBasket">
                    <ShoppingCartIcon />
                    <span className="header_optionLineTwo header-basketCount">0</span>
                </div>
            </Link>

        </div>


    )
}

export default Header
