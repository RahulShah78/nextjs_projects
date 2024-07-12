"use client"
import React, { useState } from 'react'
import Item from '../../components/item/Item'
import Header from '@/app/components/header/Header';
import Navbar1 from '@/app/components/navbar/Navbar1';
import { Provider } from 'react-redux';


const ProductHeader = () => {
  const [menu, setMenu] = useState("All");
 
  return (
    <Provider >
    <Header />
    <Navbar1 />

    <>
      <div>
        <div className='flex items-center justify-center mt-10 mb-10'>
          <nav className='flex'>
            <ul className='flex justify-center gap-6 items-center'>
              <li onClick={() => { setMenu("Fresh Meat") }}>
                Fresh Meat {menu === 'Fresh Meat' ? (
                  <div className='flex justify-center items-center'>
                    <div className='h-[2px] w-[30px] bg-[#45a745] rounded-full'></div>
                  </div>
                ) : (
                  <></>
                )}
              </li>
              <div>
                <li onClick={() => { setMenu("Oranges") }}>
                  Oranges {menu === 'Oranges' ? (
                    <div className='flex justify-center items-center'>
                      <div className='h-[2px] w-[70px] bg-[#45a745] rounded-full'></div>
                    </div>
                  ) : (
                    <></>
                  )}
                </li>
              </div>
              <li onClick={() => { setMenu("Fresh Meat") }}>
                Fresh Meat {menu === 'Fresh Meat' ? (
                  <div className='flex justify-center items-center'>
                    <div className='h-[2px] w-[80px] bg-[#45a745] rounded-full'></div>
                  </div>
                ) : (
                  <></>
                )}

              </li>
              <li onClick={() => { setMenu("Vegetables") }}>
                Vegetables {menu === 'Vegetables' ? (
                  <div className='flex justify-center items-center'>
                    <div className='h-[2px] w-[80px] bg-[#45a745] rounded-full'></div>
                  </div>
                ) : (
                  <></>
                )}
              </li>
              <li onClick={() => { setMenu("Fast Food") }}>
                Fast Food {menu === 'Fast Food' ? (
                  <div className='flex justify-center items-center'>
                    <div className='h-[2px] w-[80px] bg-[#45a745] rounded-full'></div>
                  </div>
                ) : (
                  <></>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {
        <Item  category={menu === "All" ? "" : menu}  />
      }
    </>
    </Provider>
  )
}

export default ProductHeader