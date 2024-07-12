import React, { useState } from 'react';
import All_product from '../../../../public/all_Fruits';
import Image from 'next/image';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdFavorite } from 'react-icons/md';
import { FaRetweet } from "react-icons/fa";
import { useDispatch } from 'react-redux'
import { add } from '@/app/store/CartSlice'

const Item = ({ category }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const filteredProducts = category
    ? All_product.filter((item) => item.category === category)
    : All_product;

    const dispatch = useDispatch()

    const handleAdd = (product) =>{
      dispatch(add(product));
    }

  return (
   
    <div className='flex w-[100%] items-center justify-start'>
      <div className='grid grid-cols-4 gap-4'>
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className='flex flex-col items-center relative'
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div>
              <Image src={item.image} alt={item.name} />
              {hoveredItem === item.id && (
                <div className='absolute bottom-16 justify-center ml-20'>
                   <ul className='flex gap-4 items-center justify-center'>
                    <li className='w-[30px] h-[30px] bg-green-200 rounded-full p-1'>
                    <MdFavorite size={20} color='#005000' className='hover:animate-spin ' />
                    </li>
                    <li className='w-[30px] h-[30px] bg-green-200 rounded-full p-1'>
                    <FaRetweet size={20} color='#005000' className='hover:animate-spin' />
                    </li>
                    <li className='w-[30px] h-[30px] bg-green-200 rounded-full p-1'>
                    <AiOutlineShoppingCart size={20} color='#005000' className='hover:animate-spin'  onClick={()=> handleAdd()}/>
                    </li>
                   </ul>
                   
                  
                </div>
              )}
            </div>
            <div>{item.name}</div>
            <div>${item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item;
