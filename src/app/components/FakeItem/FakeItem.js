import React, { useState } from 'react';
import All_product from '../../../../public/all_Fruits';
import Image from 'next/image';

import { useDispatch } from 'react-redux'
import { add } from '@/app/store/CartSlice'

const FakeItem = ({ category }) => {
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
             
               
          
            </div>
            <div>{item.name}</div>
            <div>${item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FakeItem;