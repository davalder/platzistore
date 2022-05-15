import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import MenuMobile from '@components/MenuMobile';
import AppContext from '@context/AppContext';
import logo from '@logos/logo_yard_sale.svg';
import iconMenu from '@icons/icon_menu.svg';
import arrowDown from '@icons/arrow_down.svg';
import iconShoppingCart from '@icons/icon_shopping_cart.svg';
import styles from '@styles/Header.module.scss';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const [toggleMenuMobile, setToggleMenuMobile] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleToggleMenuMobile = () => {
    setToggleMenuMobile(!toggleMenuMobile);
  };

  return (
    <nav className={styles.Nav}>
      <Image src={iconMenu.src} alt="menu" className={styles.menu} onClick={handleToggleMenuMobile} />
      <div className={styles['navbar-left']}>
        <Link href="/" passHref>
          <Image src={logo} alt="logo" className={styles['nav-logo']} />
        </Link>
        <ul>
          <li>
            <Link href="/" passHref>
              <a href='replace'>All</a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a href='replace'>Clothes</a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a href='replace'>Electronics</a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a href='replace'>Furniture</a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a href='replace'>Toys</a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a href='replace'>Others</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles['navbar-right']}>
        <ul>
          <li className={styles['navbar-email']}>camilayokoo@gmail.com</li>
          <li>
            <Image src={arrowDown} alt="arrow_down" className={styles['arrow-down']} onClick={handleToggle} />
          </li>
          <li className={styles['navbar-shopping-cart']} >
            <Image src={iconShoppingCart} alt="shopping card" onClick={() => setToggleOrders(!toggleOrders)} />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      <div className={styles['container-menu']}>
        {toggle && <Menu />}
        {toggleOrders && <MyOrder toggleOrders={toggleOrders} setToggleOrders={setToggleOrders} />}
      </div>
      {toggleMenuMobile && <MenuMobile handleToggleMenuMobile={handleToggleMenuMobile} />}
    </nav>
  );
};

export default Header;
