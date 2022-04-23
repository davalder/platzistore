import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import iconClose from "@icons/icon_close.png";
import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({ product }) => {
    const { removeFromCart, state } = useContext(AppContext);

    const handleRemove = item => {
        console.log(state);
        console.log(item);
        removeFromCart(item);
    };

    return (
        <div className={styles.OrderItem}>
            <figure>
                <Image src={product?.images[0]} alt={product?.title} width="100%" height="100%" layout="responsive" />
            </figure>
            <p>{product?.title}</p>
            <p>${product?.price}</p>
            <Image src={iconClose} alt="close" onClick={() => handleRemove(product)} />
        </div>
    );
}

export default OrderItem;