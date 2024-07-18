import React from 'react'
import Link from 'next/link'

function OfficialCard({ImageSrc,heading}) {
  return (
    <div style={{border:'1px solid #ECA33A', padding:'0px 10px 10px 10px'}} className='productCard'>
    <div className='cardHeader'>
        <div className='w-full'>
          <div className='AddFavourite flex justify-end'>
            <h4> Contact Now </h4>
            <img className='w-auto h-[40px] mr-[-3px]' alt='auto' src='/WhatTAgIcon.svg' />
          </div>
        </div>
        <h6 style={{fontWeight:'600'}} className="mt-[-30px] w-[75%] leading-[40px] raleway text-[30px] text-[#000000a8]">{heading} </h6>
        
        <p className='mt-2 raleway text-[#ECA33A] font-bold text-[15px]'> Languages: </p>
        <div className='flex justify-between mb-2'>
        <div className='iconDiv flex'>
            <h6 className='text-[#000000] font-bold raleway'>English,Russian,Latvian</h6>
        </div>
        <div className='iconDiv flex ml-3'>
            <h6 className='text-[#000000] font-bold raleway'>Property Consultants</h6>
        </div>
        </div>
        
        <div className='overflow-hidden w-full h-[386px]'>
            <img alt='none'  src={ImageSrc} className="cardbg w-full h-full" />
        </div>
    </div>
    </div>
  )
}

export default OfficialCard