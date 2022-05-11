import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import arrow from "@icons/flechita.svg";
import styles from '@styles/MyOrder.module.scss';

const MyOrder = ({ toggleOrders, setToggleOrders }) => {
    const { state } = useContext(AppContext);

    const sumTotal = () => {
        const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    };

    return (
        <aside className={styles.MyOrder}>
            <div className={styles['title-container']}>
                <figure>
                    <Image
                        src={arrow}
                        alt="arrow"
                        onClick={() => setToggleOrders(!toggleOrders)}

                    />
                </figure>
                <p className={styles.title}>My order</p>
            </div>
            <div className={styles['my-order-content']}>
                {state.cart.map(product => (
                    <OrderItem product={product} key={`orderItem-${product.id}`} />
                ))}
            </div>
            <div className={styles.order}>
                <p>
                    <span>Total</span>
                </p>
                <p>${sumTotal()}</p>
            </div>
            <Link  href="/checkout" passHref>
                <div className={styles['primary-button']}>
                    <p>Checkout</p>
                </div>
            </Link>
        </aside>
    );
};

export default MyOrder;