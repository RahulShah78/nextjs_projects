"use client";
import React, { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

import Header from "../components/header/Header";
import Navbar1 from "../components/navbar/Navbar1";
import store from "../store/Store";
import Footer from "../components/footer/Footer";
import Link from "next/link";
import MakePaymentComponent from "../components/MakePaymentComponent";


const Cartpage = () => {
  const { userData } = useSelector((state) => state.auth);
  // console.log("chexkout--", userData.data.id)
  const userId = userData && userData.data ? userData.data.id : '';
  console.log()
  const [cartitems, setCartitems] = useState([]);

  const totalPrice = (cartitems || []).reduce((total, item) => total + item.price, 0);

  const handleremove = async (id) => {
    const productId = id;
    console.log("productId and userID for remove ---->", productId, userId);
    const response = await fetch('http://localhost:4000/products/removecheckoutProduct', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ productId, userId })
    })
    if (response.ok) {
      console.log('Product removed from Checkout list');
      checkoutList();
    } else {
      console.log('Failed to remove product from the Checkout list!!!');
    }
  };



  // Get user checkout list
  const checkoutList = async () => {
    console.log("the checkouts user id     --", userId)
    const response = await fetch(`http://localhost:4000/products/getCheckoutslist/${userId}`)
    const checkoutProducts = await response.json();
    setCartitems(checkoutProducts.checkouts);
    console.log("cartItems--- >>>>>", checkoutProducts);
  }

  useEffect(() => {
    checkoutList();
  }, []);

  return (
    <Provider store={store}>
      <Header />
      <Navbar1 />
      {cartitems.length > 0 ? (
        <div className="px-16 pb-5">
          <h3 className="mt-5 font-black text-center text-4xl">Your Order</h3>
          <div className="flex gap-5">
            <div className="col-lg-9 col-md-7">
              <div className="cartWrapper">
                {cartitems.map((item) => (
                  <div className="Card flex justify-between border-4 p-2 items-center" key={item.id}>
                    <img
                      src={item.image}
                      alt="img"
                      className="h-[200px] w-[200px]"
                    />
                    <h6 className="text-center">{item.title}</h6>
                    <h5 className="text-center font-bold">
                      Rs:{item.price}
                    </h5>
                    <button
                      className="btn !bg-red-500 !font-bold"
                      onClick={() => handleremove(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-3">
            <div className="w-[22rem] bg-[#95a5a6] p-4 rounded-md mt-2">
              <div className="flex justify-center items-center flex-col">
                <h1 className="text-2xl font-bold my-4 text-center">
                  Payment details
                </h1>
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <h4 className="font-black text-xl"> Total-items :- {cartitems.length} </h4>
                    <h4 className="font-black text-xl">Total-Price :- {totalPrice}</h4>
                  </div>
                </div>
                <MakePaymentComponent className="btn btn-primary" /> 
              </div>
            </div></div>
          </div>
        </div>
      ) : (
        <div className="m-8 flex justify-center items-center flex-col">
          <h1 className="font-bold text-red-500">OOPS Your Cart Is empty!</h1>
          <span className="text-4xl text-green-500 font-bold">Please add some products You Like.</span>
        </div>
      )}
      <Footer />
    </Provider>
  );
};

export default Cartpage;
