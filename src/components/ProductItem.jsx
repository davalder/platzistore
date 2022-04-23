import React, { useContext, useState } from 'react';
import Image from 'next/image';
import AppContext from "@context/AppContext";
import iconBtAddCart from "@icons/bt_add_to_cart.svg";
import iconBtAddedCart from "@icons/bt_added_to_cart.svg"
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
    const { state, addToCart, removeFromCart } = useContext(AppContext);
    const [added, setAdded] = useState(false);

    const handleClick = item => {
        added ? removeFromCart(item) : addToCart(item);
        setAdded(!added);
        console.log('in cart: ', state.cart.includes(item));
    }

    return (
        <div className={styles.ProductItem}>
            <Image src={product.images[0]} alt={product.title} width="100%" height="100%" layout="responsive" />
            <div className={styles['product-info']}>
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={() => handleClick(product)} >
                    {added ? <Image src={iconBtAddedCart} alt="" /> : <Image src={iconBtAddCart} alt="" /> }
                </figure>
            </div>
        </div>
    );
}

export default ProductItem;

