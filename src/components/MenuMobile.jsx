import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import iconClose from "@icons/icon_close.png";
import styles from '@styles/MenuMobile.module.scss';

const MenuMobile = ({ handleToggleMenuMobile }) => {
    return (
        <div className={styles['mobile-menu']}>
            <div className={styles['mobile-menu-up']}>
                <ul className={styles.categories}>
                    <p>CATEGORIES</p>
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
                <Image src={iconClose} alt="close" onClick={handleToggleMenuMobile} />
            </div>
            <div className={styles['mobile-menu-down']}>
                <ul className={styles.my}>
                    <li>
                        <Link href="/" passHref>
                            <a href="replace">My orders</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" passHref>
                            <a href="replace">My account</a>
                        </Link>
                    </li>
                </ul>

                <ul className={styles.user}>
                    <li>
                        <Link href="/" passHref>
                            <a href="replace" className={styles.email}>camilayokoo@gmail.com</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" passHref>
                            <a href="replace" className={styles['sign-out']}>Sign out</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MenuMobile;