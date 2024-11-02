import { Swiper, SwiperSlide } from 'swiper/react'
import styled from 'styled-components'

import React from 'react'

const Slider = () => {
  return (
    <div>
        <Swiper spaceBetween={50} slidesPerView={3} onSlideChange={()=>{console.log('slide change');}} onSwiper={(swiper)=>{console.log(swiper);}}
                >
                    <SwiperSlide><Slyde><img src="/vite.svg" alt="" /></Slyde></SwiperSlide>
                    <SwiperSlide><Slyde><img src="/vite.svg" alt="" /></Slyde></SwiperSlide>
                    <SwiperSlide><Slyde><img src="/vite.svg" alt="" /></Slyde></SwiperSlide>
                    <SwiperSlide><Slyde><img src="/vite.svg" alt="" /></Slyde></SwiperSlide>
                    <SwiperSlide><Slyde><img src="/vite.svg" alt="" /></Slyde></SwiperSlide>
               
               
        </Swiper>
    </div>
  )
}

export default Slider

const Slyde = styled.div`
    
`