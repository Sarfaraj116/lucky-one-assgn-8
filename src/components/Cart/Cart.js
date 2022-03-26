import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    let total = 0;
    let Image;
    for (const product of cart) {
        total = total + product.price;
        Image = product.img;
    }
    const tax = parseFloat((total * 0.05).toFixed(2));
    const finalTotalPrice = total + tax;
    return (
        <div className='fixed-cart'>
            <h3>Showing selected Products :</h3>
            <img src={Image} alt="" srcset="" />
            <h3>Selected Item: {cart.length}</h3>
            <h3>Total price : $ {total}</h3>
            <h3>Tax : $ {tax}</h3>
            <h3>Final price : $ {finalTotalPrice.toFixed(2)}</h3>
            <button>Choose one Product</button><br></br>
            <button>Choose Again</button>
        </div>


    );
};

export default Cart;