'use client'
import React , {useState ,useEffect} from "react";

import { add } from '@/app/store/CartSlice'
import { useDispatch } from 'react-redux'
import SearchResult from "../SearchResult/SearchResult";


// import Image from 'next/image'
// import blog1 from '../blogs/blog-1.jpg'
// import blog2 from '../blogs/blog-2.jpg'
// import blog3 from '../blogs/blog-3.jpg'
// import { SlCalender } from "react-icons/sl";
// import { BiMessageRounded } from "react-icons/bi";
// import { Provider } from 'react-redux';


function Blogs() {

  const [products ,setproducts]=useState([])
  // const [totalPrice, setTotalPrice] = useState(0);
  const dispatch =useDispatch();

  const getproducts =async()=>{
    // try {
    const res =await fetch("https://fakestoreapi.com/products?skip=5&limit=4");
    // if (!res.ok) {
    //   throw new Error(`API request failed with status ${res.status}`);
    // }
    const data =await res.json();

  // } catch (error) {
  //   console.error('Error fetching price data:', error);
  //   // Handle error gracefully, e.g., display an error message to the user
  // }
    setproducts(data);
  };

  // const sum = data.prices.reduce((acc, price) => acc + price, 0);
  // setTotalPrice(sum);
  // console.log(sum);

  const handleadd =(product)=>{
     dispatch(add(product));
    //  console.log(product);
  }
 



  useEffect(()=>{
   getproducts();
  },[])


  return (
       


   
    <div className='pr-[200px] pl-[200px]  sm:pl-[50px] sm:pr-[20px]'>
          <div className='    flex justify-center '>
            <h1 className='text-4xl font-bold  sm:text-center  '>From The Blog</h1>
          
          </div>

         

          <div className=' ml-[500px] w-[100px] h-[4px] bg-[#84cc16] mb-10  mt-3 sm:ml-[149px] '>
            
          </div>

          <div className='productsWrapper  py-5  grid grid-cols-4 gap-3'>
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
      
    </div>
   
    
  )
}

export default Blogs
