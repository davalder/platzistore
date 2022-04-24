import React from 'react';
import Image from 'next/image';
import iconClose from "@icons/icon_close.png";
import styles from '@styles/MenuMobile.module.scss';

const MenuMobile = ({ handleToggleMenuMobile }) => {
    return (
        <div className={styles.mobile-menu}>
            <div className={styles['mobile-menu-up']}>
                <ul className={styles.categories}>
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
                <Image src={iconClose} alt="close" onClick={handleToggleMenuMobile} />
            </div>
            <div className={styles['mobile-menu-down']}>
                <ul className={styles.my}>
                    <li>
                        <a href="/">My orders</a>
                    </li>
                    <li>
                        <a href="/">My account</a>
                    </li>
                </ul>

                <ul className={styles.user}>
                    <li>
                        <a href="/" className={styles.email}>camilayokoo@gmail.com</a>
                    </li>
                    <li>
                        <a href="/" className={styles['sign-out']}>Sign out</a>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default MenuMobile;