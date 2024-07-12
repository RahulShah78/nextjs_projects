'use client'

import React, { useState, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Product = () => {
  const { userData } = useSelector((state) => state.auth);
  const userid = userData && userData.data ? userData.data.id : '';

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch('http://localhost:4000/products/getProducts');
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  const handleAddToCart = async (product) => {
    const userId = userid;
    const productId = product.id;
    console.log("Add to Checkouts ------", { userId, productId });

    try {
      const response = await fetch('http://localhost:4000/products/addChcekouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, productId }),
      });
      if (response.ok) {
        const result = await response.json();
        console.log('Product added to Checkouts List:', result);
      } else {
        const errorData = await response.json();
        console.error('Error adding to Checkouts:', errorData);
      }
    } catch (error) {
      console.error('Error during add to cart:', error);
    }
  }

  const handleAddFav = async (product) => {
    const userId = userid;
    const productId = product.id;
    console.log("Add to favorites ------", { userId, productId });

    try {
      const response = await fetch('http://localhost:4000/products/addfovourites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, productId }),
      });
      if (response.ok) {
        const result = await response.json();
        console.log('Product added to favorites:', result);
      } else {
        const errorData = await response.json();
        console.error('Error adding to favorites:', errorData);
      }
    } catch (error) {
      console.error('Error during add to favorites:', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1 className="flex text-4xl justify-center items-center font-bold">Featured Product</h1>
      <div className='productsWrapper px-16 py-5 grid grid-cols-4 gap-3'>
        {products.map((product) => (
          <div key={product.id} className='card px-5 py-3 relative '>
            <button
              className="p-1 rounded absolute right-[10%] top-2 hover:text-red-500 top-0"
              onClick={() => handleAddFav(product)}
            >
              <FaRegHeart  className="text-2xl"/>
            </button>
            <img src={product.image} alt='img' className="h-[200px]" />
            <h6 className="mt-3 text-center">{product.title}</h6>
            <h5 className="mt-3 text-center font-black">Rs:{product.price} <strike className="ml-4 text-[#7f8c8d] font-semibold text-base">Rs : {product.price + (product.price) / 2}</strike></h5>
            <button className='btn !bg-green-500 hover:!bg-green-300' onClick={() => handleAddToCart(product)}>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
