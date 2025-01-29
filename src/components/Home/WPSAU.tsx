import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import useResize from '../hooks/useResize';
import { stars } from '../../../public/svgs';
import Header from './Header';
import { Swiper as SwiperCore } from 'swiper';



const WPSAU = () => {
  const cards = Array.from({ length: 6 })
  const {windowSize} = useResize()
  const swiperRef = useRef<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(0)


  return (
    <div className='max-md:flex-col flex flex-row justify-between overflow-hidden'>
      <div className='mb-5 md:w-[367px]'>
        <Header headerText='What People Say About Us'/>
        <p className='text'>see why we are different. Sign up now to get early access </p>
        <div className="max-sm:hidden my-5">
          <button disabled={swiperRef.current?.isBeginning} onClick={()=>swiperRef?.current?.slidePrev()} >
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity={swiperRef.current?.isBeginning ? "0.4" : "1"}>
                <rect width="46" height="46" rx="23" fill="#F6F6F6"/>
                <path d="M29.5 23H16.5M16.5 23L23 29.5M16.5 23L23 16.5" stroke="#29AAE3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>
          </button>
          <button disabled={swiperRef?.current?.isEnd} onClick={()=>swiperRef?.current?.slideNext()}>
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity={swiperRef?.current?.isEnd ? "0.4" : "1"}>
                <rect width="46" height="46" rx="23" fill="#F6F6F6"/>
                <path d="M16.5 23H29.5M29.5 23L23 29.5M29.5 23L23 16.5" stroke="#29AAE3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>
          </button>
        </div>
      </div>
      
      <Swiper
        spaceBetween={30}
        slidesPerView={windowSize.width >= 1024 ? 2 : 1}
        pagination={true}
        onSwiper={(swiper) => swiperRef.current = swiper}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="wpsau_swiper"
        data-aos={"zoom-in"}
      >
        {cards.map((_, index)=>(
          <SwiperSlide key={(index.toString())} className='bg-white p-5 max-sm:min-h-[200px]' >
            <img src={stars} alt='rate'/>
          </SwiperSlide>
          ))}   
      </Swiper>

      <div className="my-7 md:hidden">
        <button disabled={swiperRef.current?.isBeginning} onClick={()=>swiperRef?.current?.slidePrev()} >
          <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity={swiperRef.current?.isBeginning ? "0.4" : "1"}>
              <rect width="46" height="46" rx="23" fill="#F6F6F6"/>
              <path d="M29.5 23H16.5M16.5 23L23 29.5M16.5 23L23 16.5" stroke="#29AAE3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
        </button>
        <button disabled={swiperRef?.current?.isEnd} onClick={()=>swiperRef?.current?.slideNext()}>
          <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity={swiperRef?.current?.isEnd ? "0.4" : "1"}>
              <rect width="46" height="46" rx="23" fill="#F6F6F6"/>
              <path d="M16.5 23H29.5M29.5 23L23 29.5M29.5 23L23 16.5" stroke="#29AAE3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
        </button>
      </div>
  </div>
  )
}

export default WPSAU