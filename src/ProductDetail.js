import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import Title from './Title';
import QuantityBtn from './QuantityBtn';

const ProductDetail = () => {
  let params = useParams();

  let [productDetail, setProductDetail] = useState(null);
  // let productDetail = null;

  // const setProductDetail = (p) => {
  //   productDetail = p
  // }

  console.log("fetch now")
  // fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
  // .then(response => response.json())
  // .then(data => {
  //   let productInfo = data.find((element) => {
  //     return element.id = parseInt(params.id)
  //   })
  //   setProductDetail(productInfo);
  //   console.log("match now")
  // });

  useEffect(() => {
    fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
    .then(response => response.json())
    .then(data => {
      let productInfo = data.find((element) => {
        return element.id = parseInt(params.id)
      })
      setProductDetail(productInfo);
    });
  }, []);
  
  return (
    <div>
      { productDetail && 
        <div>
          <Title text="Product Detail" />
          <img src={process.env.PUBLIC_URL + '/logo192.png'} alt={productDetail.name} width="400"/>
          <p>Name : {productDetail.name}</p> 
          <p>Price : ${productDetail.price.toFixed(2)}</p>      
          <p>Description : {productDetail.description}</p>      
          <QuantityBtn productInfo={productDetail} />
          <Link to="/">Home</Link>
        </div>
      }
    </div>
  );
};

export default ProductDetail;
