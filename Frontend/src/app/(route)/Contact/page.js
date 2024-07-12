'use client'
import Footer from '@/app/components/footer/Footer'
import Header from '@/app/components/header/Header'
import Navbar1 from '@/app/components/navbar/Navbar1'
import React from 'react'
import Image from 'next/image'
import ban from '../../(route)/Contact.png'
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { Provider } from "react-redux";
import store from "@/app/store/Store";

function page() {
  return (
    <Provider store={store}>
    <div>
        <Header />
        <Navbar1 />
      <Image src ={ban} alt='' />
      
        <div  className='flex justify-between px-[200px]  my-10'>
            <div className=' text-center'>
            <IoCall className='text-green-900 text-4xl ml-10  mb-3 '/>
            <h4 className='font-bold'>Phone</h4>
            <span className='text-grap-600'>+01-3-8888-6868</span>
            </div>
            <div className=' text-center'>
            <FaLocationDot className='text-green-900 text-4xl ml-[80px]  mb-3 '/>
            <h4 className='font-bold'>Address</h4>
            <span className='text-grap-600'>60-49 Road 11378 New York</span>
            </div>

            <div className=' text-center'>
            <CiClock2  className='text-green-900 text-4xl ml-[50px]  mb-3 '/>
            <h4 className='font-bold'>Open Time</h4>
            <span className='text-grap-600'>10:00 am to 23:00 pm</span>
            </div>

            <div className=' text-center'>
            <TfiEmail className='text-green-900 text-4xl ml-[50px]  mb-3 '/>
            <h4 className='font-bold'>Email</h4>
            <span className='text-grap-600'>hello@colorlib.com</span>
            </div>
       
        </div>

        <div >
          <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7008.21144413189!2d77.3358772411248!3d28.56658787556377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5b7d4af0dc1%3A0xc370dee296269b66!2sArun%20Vihar%2C%20Sector%2037%2C%20Noida%2C%20Uttar%20Pradesh%20201303!5e0!3m2!1sen!2sin!4v1713345898959!5m2!1sen!2sin"
      width="100%"
      height="500"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
          </div>
       <form>
          <div className='py-10 px-[200px]'>
            <div className='text-center mb-10'>
                <h2 className='font-bold'>Leave Message</h2>
            </div>

            <div className='flex justify-between'>
                <input type='name'  placeholder='Your Name' className='placeholder-gray-500 pl-5 py-2 w-[550px] border-solid border-2 border-gray-200'/>
                <input type='Email'  placeholder='Your Email' className='placeholder-gray-500 pl-5 py-2 w-[550px] border-solid border-2 border-gray-200'/>
            </div>
            <div className='mt-10'>
            <input type='text'  placeholder='Message' className='placeholder-gray-500 pl-5 pb-[80px] w-[100%] h-[150px] border-solid border-2 border-gray-300'/> 
            </div>
            <div className='flex justify-center'>
            <button class="bg-[#84cc16]   text-xl text-white font-bold px-5 py-3 mt-10  ">
              Send Message
            </button>
            </div>
          </div>
          </form>
      <Footer /> 
    </div>
    </Provider>
  )
}

export default page
