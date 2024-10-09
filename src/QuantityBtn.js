import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';

const QuantityBtn = ({ productInfo }) => {
    const {cartItems, setCartItems} = useContext(CartContext);

    console.log("length : ", cartItems.length)

     let productIndexCart = cartItems.findIndex((element) => {
          return element.id === productInfo.id
      });

     const [numInCart, setNumInCart] = useState(
        (productIndexCart === -1 ? 0 : cartItems[productIndexCart].quantity
    ));

    const handleAddToCart = () => {
        if (productIndexCart === -1) {
            setCartItems([{
                id : productInfo.id,
                name : productInfo.name,
                image : productInfo.image,
                price : productInfo.price,
                description : productInfo.description,
                quantity : 1
            }, ...cartItems]
            )
        }
        else {
            let newCartItems = [...cartItems]
            newCartItems[productIndexCart].quantity++
            setCartItems(newCartItems)
        }
        setNumInCart(numInCart + 1);
        console.log(numInCart);
    };

    const handleSubtractFromCart = () => {
        if (cartItems[productIndexCart].quantity === 1) {
            let newCartItems = [...cartItems]            
            newCartItems.splice(productIndexCart, 1)
            setCartItems(newCartItems)
        }
        else {
            let newCartItems = [...cartItems]
            newCartItems[productIndexCart].quantity--
            setCartItems(newCartItems)
        }

        setNumInCart(numInCart - 1);
        console.log(numInCart);
    };

    return (
        <div>
            {(numInCart == 0) ? 
                <div onClick={handleAddToCart}>Add to cart</div> :
                <div>
                    <span onClick={handleAddToCart}>+</span>
                    {numInCart}
                    <span onClick={handleSubtractFromCart}>-</span>                    
                </div>
            } 
         </div>
    )
}

export default QuantityBtn;