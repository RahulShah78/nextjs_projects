'use client'
import Image from 'next/image'
import Slider from "react-slick";
import aloo from '../../../../public/feature-5.jpeg'




function ThreeSlider() {
  const settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,

  };
  return (
    <div className='pb-[50px] pt-[50px] px-[200px] flex justify-center sm:pl-[50px] sm:pr-[20px]  '>
     
    <div className='flex  sm:flex-wrap   ' >
   
    <div className="slider-container pl-[18px] w-[399px] ">
      <Slider {...settings}>
        <div>
        <div  >
            <h1 className='text-2xl '>Latest Products</h1>
        </div>
          <div className='mt-[60px] flex'>
            <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <h5>Cab Pool Security</h5>
            <h6 className='pt-[3px]'>$30.00</h6> </div>
          </div>
          <div className='mt-[9px] flex'>
          <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <h5>Cab Pool Security</h5>
            <h6 className='pt-[3px]'>$30.00</h6> </div>
          </div>
          <div className='mt-[9px] flex'>
          <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <h5>Cab Pool Security</h5>
            <h6 className='pt-[3px]'>$30.00</h6> </div>
          </div>

        </div>
        <div >
        
        <div  >
            <h1 className='text-2xl '>Latest Products</h1>
        </div>
          <div className='mt-[60px] flex'>
          <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <h5>Cab Pool Security</h5>
            <h6 className='pt-[3px]'>$30.00</h6> </div>
          </div >
          <div className='mt-[9px] flex'>
          <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <h5>Cab Pool Security</h5>
            <h6 className='pt-[3px]'>$30.00</h6> </div>
          </div>
          <div className='mt-[9px] flex'>
          <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <h5>Cab Pool Security</h5>
            <h6 className='pt-[3px]'>$30.00</h6> </div>
          </div>
          
        
        </div>
        
      </Slider>
    </div>


    
    <div className="slider-container  pl-[18px] w-[381px]">
      <Slider {...settings}>
        <div>
        <div className='' >
            <h1 className='text-2xl '>Latest Products</h1>
        </div>
          <div className='mt-[60px] flex'>
            <Image src={aloo} width={120} height={70} />
            <div className='pl-[15px] pt-[15px]'>  <h5>Cab Pool Security</h5>
            <h6 className='pt-[3px]'>$30.00</h6> </div>
          </div>
          <div className='mt-[9px] flex'>
          <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <h5>Cab Pool Security</h5>
            <h6 className='pt-[3px]'>$30.00</h6> </div>
          </div>
          <div className='mt-[9px] flex'>
          <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <h5>Cab Pool Security</h5>
            <h6 className='pt-[3px]'>$30.00</h6> </div>
          </div>

        </div>
        <div >
        
        <div className='' >
            <h1 className='text-2xl '>Latest Products</h1>
        </div>
          <div className='mt-[60px] flex'>
          <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <h5>Cab Pool Security</h5>
            <h6 className='pt-[3px]'>$30.00</h6> </div>
          </div >
          <div className='mt-[9px] flex'>
          <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <h5>Cab Pool Security</h5>
            <h6 className='pt-[3px]'>$30.00</h6> </div>
          </div>
          <div className='mt-[9px] flex'>
          <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <h5>Cab Pool Security</h5>
            <h6 className='pt-[3px]'>$30.00</h6> </div>
          </div>
          
        
        </div>
        
      </Slider>
    </div>


    
    <div className="slider-container  pl-[18px] w-[380px]">
      <Slider {...settings}>
        <div>
        <div className='' >
            <h1 className='text-2xl'>Latest Products</h1>
        </div>
          <div className='mt-[60px] flex'>
            <Image src={aloo} width={120} height={70} />
            <div className='pl-[15px] pt-[15px]'>  <h5>Cab Pool Security</h5>
            <h6 className='pt-[3px]'>$30.00</h6> </div>
          </div>
          <div className='mt-[9px] flex'>
          <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <h5>Cab Pool Security</h5>
            <h6 className='pt-[3px]'>$30.00</h6> </div>
          </div>
          <div className='mt-[9px] flex'>
          <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <h5>Cab Pool Security</h5>
            <h6 className='pt-[3px]'>$30.00</h6> </div>
          </div>

        </div>
        <div >
        <div className='' >
            <h1 className='text-2xl '>Latest Products</h1>
        </div>

          <div className='mt-[60px] flex'>
          <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <h5>Cab Pool Security</h5>
            <h6 className='pt-[3px]'>$30.00</h6> </div>
          </div >
          <div className='mt-[9px] flex'>
          <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <h5>Cab Pool Security</h5>
            <h6 className='pt-[3px]'>$30.00</h6> </div>
          </div>
          <div className='mt-[9px] flex'>
          <Image src={aloo} width={120} height={70} />
    <div className='pl-[15px] pt-[15px]'>  <h5>Cab Pool Security</h5>
            <h6 className='pt-[3px]'>$30.00</h6> </div>
          </div>
          
        
        </div>
        
      </Slider>
    </div>


    </div>
    </div>
  );
}

export default ThreeSlider;
