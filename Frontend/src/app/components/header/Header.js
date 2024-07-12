'use client'
import { useSelector } from "react-redux";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { FaUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [dropdown , setDropdown] = useState(false)
    const { isAuthenticated, userData } = useSelector((state) => state.auth);
    const userName = userData && userData.data ? userData.data.name : '';

    
  const toggleDropdown =  ()=>{
    setDropdown(!dropdown)
    }
    
    // console.log("This is header console.---",userData.data.name)
    return (
        <>
            {isAuthenticated ? (
                <div className='bg-stone-200 px-16 py-[10px] flex justify-between sm:pl-[0px] sm:pr-[0px]'>
                    <div className='flex divide-x-2 divide-gray-300'>
                        <div className='flex gap-2 pr-5 sm:gap-1 sm:px-0!important '>
                            <MdEmail /> <span className='text-xs'>hello@colorlib.com</span>
                        </div>
                        <div className='flex gap-2 pr-5 sm:gap-1 sm:px-0!important '>
                            <span className='text-xs'>Free Shipping for all Order of $99</span>
                        </div>
                    </div>
                    <div className='flex divide-x-2 divide-gray-300'>
                        <div className='flex flex-row gap-2 pr-5 sm:flex-wrap sm:gap-1'>
                            <FaFacebookF />
                            <IoLogoTwitter />
                            <FaLinkedinIn />
                            <FaPinterestP />
                        </div>
                        <div className='sm:flex-wrap flex'>
                            <div className='flex flex-row gap-2 pr-5 sm:gap-1 sm:px-0!important'>
                                <LiaFlagUsaSolid />
                                <span className='text-xs flex gap-2 sm:gap-1'>English <span><IoIosArrowDown className='mt-1' /></span></span>
                            </div>
                            <a onMouseOver={()=>{setDropdown(true)}} onMouseLeave={()=>{setDropdown(false)}} >
                            <Link href="/Route/Login">
                                <div className='flex flex-row gap-2 sm:gap-1 pr-5'>
                                    <FaUser />
                                    <span className='text-xs'>{userName}</span>
                                    {dropdown &&  <div className='absolute text-center bg-slate-200 px-2      top-6 right-10' >
                  <ul>
                 <Link href={"/"}>  <li className='hover:text-white py-1'>LOG OUT</li></Link> 
                    
                  </ul>
                  
                  </div> }
                                </div>
                            </Link></a>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='bg-stone-200 px-16 py-[10px] flex justify-between sm:pl-[0px] sm:pr-[0px]'>
                    <div className='flex divide-x-2 divide-gray-300'>
                        <div className='flex gap-2 pr-5 sm:gap-1 sm:px-0!important '>
                            <MdEmail /> <span className='text-xs'>hello@colorlib.com</span>
                        </div>
                        <div className='flex gap-2 pr-5 sm:gap-1 sm:px-0!important '>
                            <span className='text-xs'>Free Shipping for all Order of $99</span>
                        </div>
                    </div>
                    <div className='flex divide-x-2 divide-gray-300'>
                        <div className='flex flex-row gap-2 pr-5 sm:flex-wrap sm:gap-1'>
                            <FaFacebookF />
                            <IoLogoTwitter />
                            <FaLinkedinIn />
                            <FaPinterestP />
                        </div>
                        <div className='sm:flex-wrap flex'>
                            <div className='flex flex-row gap-2 pr-5 sm:gap-1 sm:px-0!important'>
                                <LiaFlagUsaSolid />
                                <span className='text-xs flex gap-2 sm:gap-1'>English <span><IoIosArrowDown className='mt-1' /></span></span>
                            </div>
                          
                            <Link href="/Login">
                                <div className='flex flex-row gap-2 sm:gap-1 pr-5'>
                                    <FaUser />
                                    
                                    <span className='text-xs'>Login</span>
                                    
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;
