import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';
import QuantityBtn from './QuantityBtn';
import { CartContext } from './CartContext';

const Checkout = () => {

  let {cartItems} = useContext(CartContext);

  // let caritem = {
  //   caritems : [
  //     { id: 1, name: 'Apple', description: 'Apple',  price: 10, quantity: 2 },
  //     { id: 2, name: 'Banana', description: 'Banana', price: 20, quantity: 1 },
  //     { id: 3, name: 'Orange', description: 'Orange', price: 30, quantity: 3 },
  //   ]
  // }

  //let {caritems} = caritem;
  let cartEmpty = cartItems.length <= 0 ? true : false;
  let grandTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);  

  //console.log(caritems);

  return (
    <>
      <Title text="Your Checkout Items" />
      {
        cartEmpty ? (
          <div>
            <p>Your cart is empty</p>
            <Link to="/">Home</Link>
          </div>
        ) : (
          <div>
            <div id="cart-section">
              <table >
                  <thead>
                    <tr>
                      <th style={{ width: '25%' }}>Product</th>
                      <th style={{ width: '25%' }}>Details</th>
                      <th style={{ width: '25%' }}>Unit Price</th>
                      <th style={{ width: '25%' }}>Amount</th>
                    </tr>
                  </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <div key={item.id}>
                      <tr>
                        <td>
                            <Link to={`/product/${product.id}`}>
                                <img src={process.env.PUBLIC_URL + '/img/' + item.image} alt={item.name} />
                            </Link>
                        </td>
                        <td style={{ width: '20000px', textAlign: 'center' }}>{item.name}</td>
                        <td style={{ width: '500px', textAlign: 'center' }}>{item.description}</td>
                        <td style={{ width: '1000px', textAlign: 'right' }}>${item.price.toFixed(2)}</td>
                        <QuantityBtn productInfo={item}/> 

                      </tr>
                    </div>
                  ))}
                </tbody>
              </table>
            </div>	

            <div id="checkout-section">
              <div>
                <p>Grand Total: {grandTotal}</p>
                <div>
                  {grandTotal > 200 ? <p>You are eligible for free shipping</p> : <p>You are not eligible for free shipping. Diff : {200 - grandTotal}</p>}
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
};

export default Checkout;
