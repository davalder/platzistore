import React from 'react';
import '@styles/MenuMobile.scss';
import iconClose from "@icons/icon_close.png";

const MenuMobile = ({ handleToggleMenuMobile }) => {
    return (
        <div className="mobile-menu">
            <div className="mobile-menu-up">
                <ul className="categories">
                    <p>CATEGORIES</p>
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
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
                <img src={iconClose} alt="close" onClick={handleToggleMenuMobile} />
            </div>
            <div className="mobile-menu-down">
                <ul className="my">
                    <li>
                        <a href="/">My orders</a>
                    </li>
                    <li>
                        <a href="/">My account</a>
                    </li>
                </ul>

                <ul className="user">
                    <li>
                        <a href="/" className="email">camilayokoo@gmail.com</a>
                    </li>
                    <li>
                        <a href="/" className="sign-out">Sign out</a>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default MenuMobile;