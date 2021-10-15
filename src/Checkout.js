import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className="checkout">

            <div className="checkout_left">
                <img className="checkout_adv" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter21P1/pay_stripe_desk.png" alt="adv" />

                <div className="checkout_title">
                    <h3>Your Shoping Details</h3>
                </div>
            </div>

            <div className="checkout_right">
                <div>
                    <Subtotal />
                </div>
            </div>

        </div>
    );
}

export default Checkout
