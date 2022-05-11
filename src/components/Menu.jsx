import React from 'react';
import Link from 'next/link';
import styles from '@styles/Menu.module.scss';

const Menu = () => {
    return (
        <div className={styles.Menu}>
            <ul>
                <li>
                    <Link href="/" passHref>
                        <a href='replace' className={styles.title}>My orders</a>
                    </Link>
                </li>
                <li>
                    <Link href="/" passHref>
                        <a href='replace' >My account</a>
                    </Link>
                </li>
                <li>
                    <Link href="/" passHref>
                        <a href='replace' >Sign out</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;