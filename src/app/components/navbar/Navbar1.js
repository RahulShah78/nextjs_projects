'use client'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../navbar/logo.png'
import { FaHeart } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useSelector } from 'react-redux';
import { useEffect ,useState } from 'react';




function Navbar1() {
   
  const [dropdown , setDropdown] = useState(false)
  const [textColor, setTextColor] = useState('black'); // Initial color
  const [products , setProducts] = useState([ ])
  const productsLength = products ? products.length : 0;
  console.log("rahul---?>",productsLength)

  const handlehome = () => {
    setTextColor(textColor === 'black' ? 'green' : 'black'); // Toggle color
  };
  const handleshop = () => {
    setTextColor(textColor === 'black' ? 'green' : 'black'); // Toggle color
  };
  const [menu, setMenu] = useState("/");
  const toggleDropdown =  ()=>{
  setDropdown(!dropdown)
  }
  
  const items = useSelector((state)=>state.allCart.cart1) 
  const {totalPrice} = useSelector(
    (state) => state.allCart
  );

  // get user fav products count or length
    const [productCount, setProductCount] = useState(0);
    const { userData } = useSelector((state) => state.auth);
    const userId = userData && userData.data ? userData.data.id :'';

    const getFavProductCount = async() =>{
        console.log(userId);
        const response = await fetch(`http://localhost:4000/products/getfavourites/${userId}`)
    
        const favproductlist = await response.json();
        setProductCount(favproductlist.favorites.length);
        
        // console.log("Product Count---",favproductlist.favorites.length)
      }

     

    
    useEffect(()=>{
      getFavProductCount();
    },[])
  

  return (
    
    <>
     
    <div className=' sm:pl-[50px] sm:pr-[50px] px-16'>
       <Navbar expand="lg" className=" flex justify-between items-center  ">
      <Container fluid >
        <Navbar.Brand href="#" ><Image src={logo} alt='' className='sm:max-w-[77px]]]] sm:absolute sm:right-[78%] sm:bottom-[10%]' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className='sm:absolute sm:left-[84%]' />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 gap-14"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className='no-underline' href="/"><span className='font-bold text-green-500'  style={{ color: textColor }} onClick={handlehome}>HOME</span>
              </Link>
            <Link  className='no-underline'href="/Shop"><span style={{ color: textColor }} onClick={handleshop}>SHOP</span>
           
            </Link>
               <a onMouseOver={()=>{setDropdown(true)}} onMouseLeave={()=>{setDropdown(false)}} >
              <div className="btn  " ><p className='font-black'>PAGES</p>
              {dropdown &&  <div className='absolute text-center bg-slate-200 px-2  w-22 top-15' >
                  <ul>
                    <li className='hover:text-white py-1'>Shop Details</li>
                    <li className='hover:text-white py-1'>Shoping Cart</li>
                    <li className='hover:text-white py-1'>Checkout</li>
                  </ul>
                  
                  </div> } </div>
</a>
              <Link className='no-underline' href="/Blogs"><span  className='text-black font-bold ' onClick={() => { setMenu("BLOGS") }}>BLOGS</span>
              {menu === "BLOGS" ? (
                  <div className='flex justify-center items-center'>
                    <div className='h-[2px] w-[30px] bg-[#45a745] rounded-full'></div>
                  </div>
                ) : (
                  <></>
                )}</Link>
              
            
            <Link className='no-underline' href="/Contact">
            <span className='text-black font-bold ' onClick={() => { setMenu("CONTACT") }} >CONTACT</span>
            {menu === "CONTACT" ? (
                  <div className='flex justify-center items-center'>
                    <div className='h-[2px] w-[30px] bg-[#45a745] rounded-full'></div>
                  </div>
                ) : (
                  <></>
                )}
            </Link>
          </Nav>
          <div className=' flex gap-3 pt-2 ' >
            <Link className='flex' href='/wishList' >
            <FaHeart 
            className=' text-red-500 '
           
          />
          <sup className='text-base font-semibold text-[#d35400]'>{productCount}</sup>
            </Link>
          
        <Link href="/cart" > <HiShoppingBag  /></Link>
        <span >
        
        </span>
      
        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </div>
    </>

  )
}

export default Navbar1
