'use client'
import Footer from "@/app/components/footer/Footer";

import Header from "@/app/components/header/Header";
import Navbar1 from "@/app/components/navbar/Navbar1";
import Image from "next/image";
import ban from "../../(route)/Shop/Shop.png";

import { FaAngleDown } from "react-icons/fa";
import Sliders from "../Shop/Slider/page";
import Three from  "../Shop/three/page"
import { useEffect, useState } from "react";
import { CiGrid41 } from "react-icons/ci";
import { TfiMenuAlt } from "react-icons/tfi";

import { IoIosArrowRoundForward } from "react-icons/io";
import { Provider } from "react-redux";
import store from "@/app/store/Store";

import { add } from '@/app/store/CartSlice'
import { useDispatch } from 'react-redux'



  function  page() {


  
  
    const [isOpen, setIsOpen] = useState(false);

    const [products ,setproducts]=useState([])
    const dispatch =useDispatch();
  
    const getproducts =async()=>{
      const res =await fetch("https://fakestoreapi.com/products?skip=5&limit=6");
      const data =await res.json();
      setproducts(data);
    }
  
    const handleadd =(product)=>{
       dispatch(add(product));
       console.log(product);
    }
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    useEffect(()=>{
      getproducts();
     },[])

  return (
    <Provider store={store}>
    <div>
      <Header />
      <Navbar1 />
      <Image src={ban} alt="" />

      <div className="mt-5">
        <div className="flex px-[200px] gap-5 py-10">
          <div className="col-lg-3 col-md-5">
            <div >
              <h4 className="font-bold mb-4">Department</h4>

              <div className="flex flex-col gap-2">
                <a className="no-underline text-black " href="Fresh Meat">
                  Fresh Meat
                </a>

                <a className="no-underline text-black  " href="Fresh Meat">
                  Vegetables
                </a>

                <a className="no-underline text-black   " href="Fresh Meat">
                  Fruits & Nut Gifts
                </a>

                <a className="no-underline text-black   " href="Fresh Meat">
                  Frsha Barries
                </a>

                <a className="no-underline text-black  " href="Fresh Meat">
                  Ocean Foods
                </a>

                <a className="no-underline text-black  " href="Fresh Meat">
                  Butter & Eggs
                </a>

                <a className="no-underline  text-black  " href="Fresh Meat">
                  Fastfood
                </a>

                <a className="no-underline text-black  " href="Fresh Meat">
                  Fresh Onion
                </a>

                <a className="no-underline text-black  " href="Fresh Meat">
                  Papaya & Crisps
                </a>

                <a className="no-underline text-black  " href="Fresh Meat">
                  Oatmeal
                </a>

                <a className="no-underline text-black  " href="Fresh Meat">
                  Fresh Banana
                </a>
              </div>
            </div>

            <div className="flex flex-col">
              <label for="customRange1" class="form-label">
                <h4 className="font-bold mt-4">Price</h4>
              </label>
              <input
                type="range"
                class="form-range"
                min="0"
                max="100"
                id="customRange1"
              />
            </div>
            <div className="mt-3">
            <h4 className="font-bold">Colors</h4>
            <div className="grid grid-cols-2 mt-3">
             
            <div className="flex ">
              <div className="w-3 h-3 mt-2 bg-gray-500 rounded-full flex items-center justify-center"></div>
              <span className="ml-2 ">Gray</span>
            </div>
            <div className="flex ">
              <div className="w-3 h-3 mt-2 bg-red-500 rounded-full flex items-center justify-center"></div>
              <span className="ml-2 ">Red</span>
            </div>
            <div className="flex ">
              <div className="w-3 h-3 mt-2 bg-blue-500 rounded-full flex items-center justify-center"></div>
              <span className="ml-2 ">Blue</span>
            </div>
            <div className="flex ">
              <div className="w-3 h-3 mt-2 bg-yellow-500 rounded-full flex items-center justify-center"></div>
              <span className="ml-2 ">Yellow</span>
            </div>
            <div className="flex ">
              <div className="w-3 h-3 mt-2 bg-black rounded-full flex items-center justify-center"></div>
              <span className="ml-2 ">Green</span>
            </div>
            <div className="flex ">
              <div className="w-3 h-3 mt-2 bg-green-500 rounded-full flex items-center justify-center"></div>
              <span className="ml-2 ">Green</span>
            </div>
            </div>
          </div>

          <div className="mt-3">
            <h4 className="font-bold">Popular Size</h4>
            <div className=" gap-2 mt-3">
            <div>
                <span className="px-4 py-2 text-gray-500 bg-gray-300 mr-2">
                  Large
                </span>
                <span className="px-4 py-2 text-gray-500 bg-gray-300 mr-2 ">
                  Medium
                </span>
               
              </div>
              <div className="mt-4">
                <span className="px-4 py-2 text-gray-500 bg-gray-300 mr-2">
                  Small
                </span>
                <span className="px-4 py-2 text-gray-500 bg-gray-300 mr-2 ">
                  Tiny
                </span>
                
              </div>

              <Three />
               
              </div>
          </div>
          </div>

          <div className="col-lg-9 col-md-7">
            <div>
              <h2 className="text-[#1C1C1C] font-black">Sale Off</h2>
              <div className='h-[4px] w-[130px] bg-[#45a745] rounded-full'></div>
               
               <div className="pb-[100px] border-b-2"><Sliders/> </div>  
               <div className="mt-5">
                <div className="gap-7 flex justify-between">
                  <div className="flex"> 
                <span className="mt-1">Sort By</span>
                 <div> <div className="relative inline-block text-left">
      <div>
        <button onClick={toggleDropdown} type="button" className="inline-flex justify-center w-full  px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2">
          Default <FaAngleDown className="ml-3 mt-1" />
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg ring-black ring-opacity-5">
          <div className="py-1">
            <span className="block px-4 py-2 text-sm font-black ml-[60px] hover:bg-gray-100">Default</span>
            <a href="#" className="block px-4 py-2 text-sm  ml-[60px] font-black">Option 2</a>
          </div>
        </div>
      )}
    </div></div> 
    </div>        
               
                <div>
                  <span className="font-bold flex">16 <p className="text-gray-500 ml-3">Products</p></span>
                </div>
                <div>
                  <div className="flex"><CiGrid41 />
                  <TfiMenuAlt />
                  </div>
                  </div>


                
                </div>

                
               </div>

             
               <div className='productsWrapper  py-5  grid grid-cols-3 gap-3'>
          {
            products.map((product)=>(
              <div key={product.id} className='card px-5 py-3'>
                  <img src={product.image} alt='img' className="h-[200px]"/>
                  
                  <h6 className="mt-3 text-center">{product.title}</h6>
                  <h5 className="mt-3 text-center font-black">Rs:{product.price}</h5>
                  <button className='btn bg-green-900 hover:bg-green-300' onClick={()=>handleadd(product)}>Add to cart</button>
              </div>
            ))
          }
    </div>










               <div className="flex gap-3 mt-5">
                <a href="/Badmass/Shop" className="border-2 no-underline text-gray-300 px-2 py-1 hover:bg-[#84cc16]">1</a>
                <a href="/Badmass/Shop" className="border-2 no-underline text-gray-300  px-2 py-1 hover:bg-[#84cc16]">2</a>
                <a href="/Badmass/Shop" className="border-2 no-underline text-gray-300  px-2 py-1 hover:bg-[#84cc16]">3</a>
                
                <a href="/Badmass/Shop" className="border-2 no-underline text-gray-300  px-2 py-1 hover:bg-[#84cc16]">4</a>
                <a href="/Badmass/Shop" className="border-2 no-underline text-gray-300  px-2 py-2 hover:bg-[#84cc16]"><IoIosArrowRoundForward/></a>
                
              </div>
            </div>
          </div>
        </div>

      
        
        
      </div>
      <Footer />
    </div>
    </Provider>
  );
}

export default page;
