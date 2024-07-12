import Image from 'next/image'
import ban from '../fruits/banner-1.jpg'
import can from '../fruits/banner-2.jpg'

function Fruits() {
  return (
    <div className='pl-[200px] pr-[200px] flex justify-between pt-8  sm:flex-wrap sm:pl-[50px]  sm:pr-[20px]  sm:gap-5'>
        <Image src={ban} width={540} height={400} className='sm:max-w-[393px] '/>
        <Image src={can} width={540} height={400} className='sm:max-w-[393px] '/>
    </div>
  )
}

export default Fruits
