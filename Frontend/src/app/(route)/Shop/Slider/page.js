"use client"
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Provider } from "react-redux";
import store from "@/app/store/Store";


export default function Sliders() {

  const [products ,setproducts]=useState([])
  
  const getproducts =async()=>{
    const res =await fetch("https://fakestoreapi.com/products");
    const data =await res.json();
    setproducts(data);
  }
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
       
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 6
        }
      
      }
    ],
    
  
  };

  useEffect(()=>{
    getproducts();
   },[]) 

  return (
    <Provider store={store}>
    <div >
    <div className="justify-center items-center w-[100%] mt-20  ml-[0%]">
    <Slider {...settings}>
      
    {
        products.map((product)=>{
          return(
            <div key={product.id} className='card px-5 py-3'>
              <img src={product.image} alt='img' width="200" height="200" className="h-[200px]" />
              <div className="mt-3 text-center">{product.title}</div>

            </div>
          )
        })
      }
    </Slider>
    </div>
    </div>
    </Provider>
  );
}
