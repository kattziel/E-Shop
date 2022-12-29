import React from 'react';
import './Checkout.css';
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from './Subtotal';
import {useStateValue} from './StateProvider';

const Checkout = () => {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://blog.hubspot.com/hubfs/How%20to%20Explain%20Banner%20Ads%20to%20Anyone-5.png"
                alt="add"
                className="checkout__ad" />
                <div>
                    <h2 className="checkout__title">Your shopping basket</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                        id = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                        />
                    ))}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal/>
            </div>

        </div>
    );
}

export default Checkout;
