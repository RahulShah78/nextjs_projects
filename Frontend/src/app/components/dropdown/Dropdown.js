import { FaAngleDown } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import sabzi from "../slider/sabzi.png";

import { useEffect, useState } from "react";
import Link from "next/link";

import { add } from '@/app/store/CartSlice'
import { useDispatch } from 'react-redux'

function Dropdown({ setResults }) {
  const [showDiv1, setShowDiv1] = useState(false);
  const [change, setChange] = useState([]);
  const [showDiv2, setShowDiv2] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const [products, setproducts] = useState([]);

  const dispatch =useDispatch();

  const getproducts = async () => {
    const res = await fetch("http://localhost:4000/products/getProducts");
    const data = await res.json();
    setproducts(data.products);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDiv1Click = () => {
    setShowDiv1(true);
    setShowDiv2(false);
  };

  const handleDiv2Click = () => {
    setShowDiv1(false);
    setShowDiv2(true);
  };

  const handlefetch = async () => {
    const res = await fetch("http://localhost:4000/products/getProducts");
    const data = await res.json();
    console.log(data);
    setChange(data.products);
  };

  const handleadd =(product)=>{
    dispatch(add(product));
   //  console.log(product);
 }


  const [input, setInput] = useState("");
  const fetchData = (value) => {
    fetch("http://localhost:4000/products/getProducts")
      .then((response) => response.json())
      .then((json) => {
        const results = json.products.filter((user) => {
          return (
            value &&
            user &&
            user.title &&
            user.title.toLowerCase().includes(value)
          );
        });
        console.log(results);
        setResults(results);
      });
  };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  const uniqueCategories = new Set();

  products.forEach((product) => {
    if (product && product.category) {
        uniqueCategories.add(product.category);
    }
    console.log(products);
});

  // Convert the Set back to an array to use map() function
  const uniqueCategoriesArray = [...uniqueCategories];

  useEffect(() => {
    getproducts();
  }, []);

  return (
    <div className="pl-[200px] pr-[200px] mt-4 pb-5 sm:pl-[0px] sm:pr-[0px]">
      <div className="flex gap-8  sm:flex-wrap sm:justify-center ">
        <div className="col-lg-3">
          <details className="dropdown" open={isOpen}>
            <summary className="px-[25px] py-[10px]  bg-[#84cc16] flex gap-10 hover:bg-[#84cc16]  text-black font-bold  sm:hover:bg-[#84cc16] sm:px-[90px]">
              <GiHamburgerMenu />
              All Department <FaAngleDown className="pt-1" />
            </summary>

            <ul className="px-[30px] py-[10px] shadow menu dropdown-content z-[1] bg-base-100 rounded-box ">
              <div onClick={handleDiv1Click}>
                <li
                  onClick={handlefetch}
                  className="mb-[1px] mt-3 sm:mb-[5px] font-bold "
                >
                  Fresh Meat
                </li>
              </div>

              <div onClick={handleDiv1Click}>
                <li
                  onClick={handlefetch}
                  className="mb-[1px] mt-3 sm:mb-[5px] font-bold "
                >
                  Fresh Vegetable
                </li>
              </div>
              <div onClick={handleDiv1Click}>
                <li
                  onClick={handlefetch}
                  className="mb-[1px] mt-3 sm:mb-[5px] font-bold "
                >
                  Fruit & nut gifts
                </li>
              </div>

              <div onClick={handleDiv1Click}>
                <li
                  onClick={handlefetch}
                  className="mb-[1px] mt-3 sm:mb-[5px] font-bold "
                >
                  Fresh Berries
                </li>
              </div>
              <div onClick={handleDiv1Click}>
                <li
                  onClick={handlefetch}
                  className="mb-[1px] mt-3 sm:mb-[5px] font-bold "
                >
                  ocean foods
                </li>
              </div>
              <div onClick={handleDiv1Click}>
                <li
                  onClick={handlefetch}
                  className="mb-[1px] mt-3 sm:mb-[5px] font-bold "
                >
                  Butter
                </li>
              </div>
              <div onClick={handleDiv1Click}>
                <li
                  onClick={handlefetch}
                  className="mb-[1px] mt-3 sm:mb-[5px] font-bold "
                >
                  Fast food
                </li>
              </div>
              <div onClick={handleDiv1Click}>
                <li
                  onClick={handlefetch}
                  className="mb-[1px] mt-3 sm:mb-[5px] font-bold "
                >
                  Fresh onion
                </li>
              </div>
              <div onClick={handleDiv1Click}>
                <li
                  onClick={handlefetch}
                  className="mb-[1px] mt-3 sm:mb-[5px] font-bold "
                >
                  Papaya
                </li>
              </div>
              <div onClick={handleDiv1Click}>
                <li
                  onClick={handlefetch}
                  className="mb-[1px] mt-3 sm:mb-[5px] font-bold "
                >
                  Oatmeal
                </li>
              </div>
              <div onClick={handleDiv1Click}>
                <li
                  onClick={handlefetch}
                  className="mb-[1px] mt-3 sm:mb-[5px] font-bold "
                >
                  Fresh banana
                </li>
              </div>
            </ul>
          </details>
          <div className="flex justify-between mt-3 ">
            <button
              onClick={handleDiv2Click}
              className={`bg-[#84CC16] px-2 py-1 rounded-md ${
                showDiv1 ? "" : "opacity-20 cursor-not-allowed"
              }`}
            >
              Show Banner
            </button>
          </div>
        </div>
        <div className="col-lg-9   ">
          <div className="sm:flex-wrap">
            <div className="flex  sm:hidden">
              <div className="px-[20px] py-[9px]  border-solid border-[1px] border-gray-300 flex divide-x-2  divide-gray-300 sm:px-0 sm:py-0 ">
                <a
                  onMouseOver={() => {
                    setDropdown(true);
                  }}
                  onMouseLeave={() => {
                    setDropdown(false);
                  }}
                >
                  <div className="flex gap-5   ">
                    <span className="font-bold">All Categories </span>
                    <FaAngleDown className="pt-1" />

                    {dropdown && (
                      <div className="absolute text-center bg-slate-200 px-4  w-22 top-[25%] left-[33.75%] z-10">
                        <ul>
                          {
                            // Assuming products is an array of products fetched from the API
                            // Initialize an empty Set to store unique categories

                            // Loop through the products array to populate the uniqueCategories Set

                            // Render the unique categories
                            uniqueCategoriesArray.map((category) => (
                              <div key={category} className="card px-3 py-3">
                                <h6 className="mt-3 text-center cursor-pointer"  >{category}</h6>
                              </div>
                            ))
                          }
                        </ul>
                      </div>
                    )}
                  </div>
                </a>

                <div className="pl-[10px] flex">
                  <input
                    type=" text"
                    placeholder="What do you needs?"
                    className=" w-[300px] outline-none"
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                  ></input>
                </div>
              </div>
              <button class="bg-[#84cc16]  text-white font-bold px-3 ">
                SUBSCRIBE
              </button>

              <div className="bg-gray-300 py-3 px-3 rounded-full text-[#84cc16] ml-[10px] ">
                <IoCallSharp />
              </div>
              {
                <div className="flex flex-col ml-1 sm:ml-5">
                  <span className="font-bold   sm:text-xs ">
                    +65 11.188.888
                  </span>
                  <span className="text-xs  text-gray-500 mt-2">
                    support 24/7 time
                  </span>
                </div>
              }
            </div>
            {showDiv2 && (
              <div id="div2">
                <div className="mt-8 sm:mt-5 ">
                  <Image
                    src={sabzi}
                    width={850}
                    height={400}
                    className="sm:max-w-[370px] "
                    alt="img"
                  />
                </div>
              </div>
            )}
          </div>

          {showDiv1 && (
            <div id="div1">
              {
                <div className="productsWrapper  py-5 gap-3  grid grid-cols-3 ">
                  {change.map((product) => (
                    <div key={product.id} className="card px-5 py-3">
                      <img src={ product.image} alt='img' className="h-[200px]"/>
                  
                  <h6 className="mt-3 text-center">{product.title}</h6>
                  <h5 className="mt-3 text-center font-black">Rs:{product.price}</h5>
                  <button className='btn bg-green-900 hover:bg-green-300' onClick={()=>handleadd(product)}>Add to cart</button>
              </div>
                  
                  ))}
                </div>
              }
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
Dropdown.defaultProps = {
  setResults: () => {},
};
export default Dropdown;
