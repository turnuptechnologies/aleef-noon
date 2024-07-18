"use client"

import React,{ useRef, useState }  from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination,Autoplay ,Navigation} from 'swiper/modules';

function OurPartners() {
  return (
    <main className="OurPartnersSec bg-[#231F20]">
      {/* <Image className="w-full h-[50px] mb-4" height={50} width={100} src="/vector.svg" /> */}
        <div className="mainContainer">
            <h1 className="max-[1024px]:text-[25px] max-[1024px]:mb-[26px] uppercase text-center font-semibold mb-[50px] leading-[41px] raleway  text-[35px] text-[#ECA33A]">
                Real estate leaders,our partners
            </h1>
            <Swiper
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={0}
        initialSlide={0}
        grabCursor={true}
        // pagination={{
        //   clickable: true,
        // }}
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: true,
        // }}
        navigation={true}
        speed={3000}
        autoplay= {{
          delay: 1,
          disableOnInteraction: false,
      }}
        style={{
            "--swiper-pagination-color": "#ECA33A",
            "--swiper-pagination-border": "2px solid white",
            "--swiper-pagination-bullet-inactive-color": "transparent",
            "--swiper-pagination-bullet-size": "13px",
            // "--swiper-pagination-bullet-top": "80px !important",
            height:"180px",


          }}
        modules={[Pagination,Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img  src="/MeraasClient.svg" alt='none' />
        </SwiperSlide>
        <SwiperSlide>
            <img  src="/NakheelClient.svg" alt='none' />
        </SwiperSlide>
        <SwiperSlide>
            <img  src="/DeyaarClient.svg" alt='none' />
        </SwiperSlide>
        <SwiperSlide>
        <img  src="/DamacClient.svg" alt='none' />
        </SwiperSlide>
        <SwiperSlide>
            <img  src="/EllingtonClient.svg" alt='none' />
        </SwiperSlide>
        <SwiperSlide>
            <img  src="/MeraasClient.svg" alt='none' />
        </SwiperSlide>
        <SwiperSlide>
            <img  src="/NakheelClient.svg" alt='none' />
        </SwiperSlide>
        <SwiperSlide>
            <img  src="/DeyaarClient.svg" alt='none' />
        </SwiperSlide>
        <SwiperSlide>
        <img  src="/DamacClient.svg" alt='none' />
        </SwiperSlide>
        <SwiperSlide>
        <img  src="/MeraasClient.svg" alt='none' />
        </SwiperSlide>
        <SwiperSlide>
            <img  src="/EllingtonClient.svg" alt='none' />
        </SwiperSlide>
        <SwiperSlide>
            <img  src="/MeraasClient.svg" alt='none' />
        </SwiperSlide>
        <SwiperSlide>
            <img  src="/NakheelClient.svg" alt='none' />
        </SwiperSlide>
        <SwiperSlide>
            <img  src="/DeyaarClient.svg" alt='none' />
        </SwiperSlide>
        <SwiperSlide>
        <img  src="/DamacClient.svg" alt='none' />
        </SwiperSlide>
        <SwiperSlide>
        <img  src="/MeraasClient.svg" alt='none' />
        </SwiperSlide>
        <SwiperSlide>
            <img  src="/EllingtonClient.svg" alt='none' />
        </SwiperSlide>
        <SwiperSlide>
            <img  src="/MeraasClient.svg" alt='none' />
        </SwiperSlide>
        <SwiperSlide>
            <img  src="/NakheelClient.svg" alt='none' />
        </SwiperSlide>
        <SwiperSlide>
            <img  src="/DeyaarClient.svg" alt='none' />
        </SwiperSlide>
        <SwiperSlide>
        <img  src="/DamacClient.svg" alt='none' />
        </SwiperSlide>
        <SwiperSlide>
        <img  src="/MeraasClient.svg" alt='none' />
        </SwiperSlide>
        <SwiperSlide>
            <img  src="/EllingtonClient.svg" alt='none' />
        </SwiperSlide>
        <SwiperSlide>
            <img  src="/MeraasClient.svg" alt='none' />
        </SwiperSlide>
        <SwiperSlide>
            <img  src="/NakheelClient.svg" alt='none' />
        </SwiperSlide>
        <SwiperSlide>
            <img  src="/DeyaarClient.svg" alt='none' />
        </SwiperSlide>
        <SwiperSlide>
        <img  src="/DamacClient.svg" alt='none' />
        </SwiperSlide>
        <SwiperSlide>
        <img  src="/MeraasClient.svg" alt='none' />
        </SwiperSlide>
        <SwiperSlide>
            <img  src="/EllingtonClient.svg" alt='none' />
        </SwiperSlide>
        
      </Swiper>
        </div>
    </main>
  )
}

export default OurPartners