"use client"
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



export default function Sliders() {

  const [products ,setproducts]=useState([])

  const getproducts =async()=>{
    const res =await fetch("https://fakestoreapi.com/products");
    const data =await res.json();
    setproducts(data);
  }

  
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",  background: "#ccc",textColor:"black", border:"2px solid",padding:"20px 2px", width:"30px", height:"60px", marginRight:"0px" }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#ccc",textColor:"black", border:"2px solid",padding:"20px 2px", width:"30px", height:"60px", marginLeft:"-10px"}}
        onClick={onClick}
      />
    );
  }
  const settings = {
    infinite: true,
    speed: 500,
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
    
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  useEffect(()=>{
    getproducts();
   },[])
  return (
    <div className="pl-[110px] pr-[160px] sm:pl-[50px] sm:pr-[20px]">
    <div className="productsWrapper  py-5 h-[400px]  ">
    <Slider {...settings}>
      
      {
        products.map((product)=>{
          return(
            <div key={product.id} className='card px-5 py-3 ' >
              <img src={product.image} alt='img' width="200" height="200" className="h-[200px]" />
              <div className="mt-3 text-center">{product.title}</div>

            </div>
          )
        })
      }
    </Slider>
    </div>
    </div>
  );
}
