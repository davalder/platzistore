import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import MenuMobile from '@components/MenuMobile';
import AppContext from '@context/AppContext';
import logo from "@logos/logo_yard_sale.svg";
import iconMenu from "@icons/icon_menu.svg";
import arrowDown from "@icons/arrow_down.svg";
import iconShoppingCart from "@icons/icon_shopping_cart.svg";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const [toggleMenuMobile, setToggleMenuMobile] = useState(false);
    const { state } = useContext(AppContext);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    const handleToggleMenuMobile = () => {
        setToggleMenuMobile(!toggleMenuMobile);
    }

    return (
        <nav>
            <img
                src={iconMenu}
                alt="menu"
                className="menu"
                onClick={handleToggleMenuMobile}
            />
            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo" />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furniture</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" >
                        camilayokoo@gmail.com
                    </li>
                    <li>
                        <img src={arrowDown} alt="arrow_down" className="arrow-down" onClick={handleToggle} />
                    </li>
                    <li
                        className="navbar-shopping-cart"
                        onClick={() => setToggleOrders(!toggleOrders)}
                    >
                        <img src={iconShoppingCart} alt="shopping card" />
                        {state.cart.length > 0 ? <div>{state.cart.length}</div> : null }
                    </li>
                </ul>
            </div>
            <div className="container-menu">
                {toggle && <Menu />}
                {toggleOrders && <MyOrder toggleOrders={toggleOrders} setToggleOrders={setToggleOrders} />}
            </div>
            {toggleMenuMobile && <MenuMobile handleToggleMenuMobile={handleToggleMenuMobile} />}
        </nav>
    );
}

export default Header;