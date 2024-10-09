import React, { useState, useEffect } from 'react';
import styles from './ProductList.module.css';
import { Link } from 'react-router-dom';
import Title from './Title';
import QuantityBtn from './QuantityBtn';
const ProductList = () => {
  // const products = [
  //   { id: 1, name: 'Apple', price: 9.99 },
  //   { id: 2, name: 'Banana', price: 19.99 },
  //   { id: 3, name: 'Orange', price: 29.99 },
  //   { id: 4, name: 'Mango', price: 24.99 },
  //   { id: 5, name: 'Pineapple', price: 34.99 },
  //   { id: 6, name: 'Grapes', price: 14.99 }
  // ];

  const [products, setProducts] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
    .then(response => response.json())
    .then(data => {
      setProducts(data);
      console.log(data);
    });
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if(input.length > 4){
      console.log("too long");
    }
    else{
      console.log("too short");
    }
  },[input]);

  let title = "Product List";
  // const [title, setTitle] = useState("Product List");

  // const handleClick = () => {
  //   setTitle("Updated Product List");
  //   console.log(title);
  // };
  const [showProducts, setShowProducts] = useState(true);

  return (
    //<div className={styles.productBorder}>
    <div className="productBorderInCSSfile">
      <Title text={title} />
      <text>Please Input : </text>
      <input text="Input" type="text" value={input} onChange={handleInputChange} /><br/>
      <button onClick={() => setShowProducts(!showProducts)}>Show/Hide Product List</button>
      {showProducts && (
      <ul>
        {products.map((product) => (
          <React.Fragment key={product.id}>
            {product.name} - ${product.price.toFixed(2)}
            <Link to={`/product/${product.id}`}>{product.description}
              <img src={process.env.PUBLIC_URL + '/logo192.png'} alt={product.name} />
            </Link>
            <QuantityBtn productInfo={product} />
          </React.Fragment>
        ))}
      </ul>
      )}
    </div>
  );
};

export default ProductList;

