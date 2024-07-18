"use client"

import React from 'react'
import Footer from '@/components/sections/Footer'
import FreeConsultation from '@/components/sections/FreeConsultation'
import Header from '@/components/header/Index'
import { Row,Col ,Tabs} from 'antd'
import DetailCard from '@/components/DetailCard';
import CatalogCard from '@/app/Catalog/CatalogCard'
import BlogCard from '@/app/Blog/blogCard'
import { bedroomsEnums, countryEnums, propertyTypesEnums, uaeCitiesEnums, usaCitiesEnums } from '@/app/utills/enums';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import CardPagination from '@/components/productCard/CardPagination';
import SocialIconScroll from '@/components/SocialIconScroll';
import ScrollTopButton from "@/components/ScrollTopButton";

const items = [
    {
      key: "1",
      label: "Blogs",
    },
    {
      key: "2",
      label: "Social",
    },
    {
      key: "3",
      label: " Offers",
    }
  ];



function page() {

    const onChange = (key) => {
        console.log(key, "My Key");
    }
  return (
    <div className='BlogSectionMax'>
    <Header />
    <ScrollTopButton />
    <SocialIconScroll/>
    <div className='BlogSection'>
        <img className='innerpagesBg' style={{height:'auto', width:'100%'}} src='/Blog-bg.png' alt='none' />
        <div className='mainContainer off-planContainer'>
            <div className='absoluteLayer'>
                <h1> Stay Informed with   </h1>
                <h2>OUR Latest Updates </h2>
                <h3> Explore News and Blogs for Insights and Inspiration </h3>
            </div>
            <img style={{ height:'80px', width:'100%'}} src='/VectorPng.png' alt='none' /> 
            <div className="productsTabs">
            {true && (
              <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            )}
          </div>
        <Row className='mt-10 max-[1080px]:mt-2' gutter={10} >
          <Col sm={24} lg={12} xl={15}>
          <div className={`justify-center flex flex-wrap detailCardRow secondSectionRow`}>
                <div className="p-3 max-w-sm">
                    <BlogCard heading='Sky-High Palaces' descriptions={'Dubai skyline is a testament to its architectural ambition. From the towering Burj Khalifa, the worlds tallest building, to gleaming residential towers that touch the clouds, luxury properties in Dubai are often nestled in the sky. These residences offer panoramic views of the city, the Arabian Gulf, and beyond, creating an unparalleled living experience.'} ImageSrc={'/OtherCard1.png'} /> 
                </div>
                <div className="p-3 max-w-sm">
                <BlogCard heading='Waterfront Retreats' descriptions={'Dubais coastline is studded with exclusive waterfront properties that redefine coastal living. Imagine waking up to the gentle lapping of waves and panoramic views of the sea. From sleek penthouses to sprawling villas, these waterfront retreats offer not just a home but a lifestyle marked by tranquility and indulgence.'} ImageSrc={'/OtherCard1.png'} /> 
                </div>
                <div className="p-3 max-w-sm">
                <BlogCard heading='Technological Marvels' descriptions={'Luxury in Dubai goes beyond aesthetics; it integrates cutting-edge technology seamlessly into daily life. Smart homes equipped with state-of-the-art automation systems, personalized climate control, and advanced security features are becoming the norm. These properties offer a glimpse into the future of luxurious living.'} ImageSrc={'/OtherCard1.png'} />   
                </div>
                <div className="p-3 max-w-sm">
                <BlogCard heading='Desert Oasis' descriptions={'For those who seek a retreat from the urban bustle, Dubais luxury properties extend into the serene desert landscapes. Villas and estates surrounded by dunes offer a unique blend of privacy, tranquility, and the unmistakable charm of the desert. Private pools, lush gardens, and exclusive amenities redefine luxury in this peaceful setting.'} ImageSrc={'/OtherCard1.png'} />  
                </div>
               
                <CardPagination/>
            </div>
          </Col>
          <Col style={{paddingTop:'1rem', paddingRight:'20px'}} className='rightColMain' sm={24} lg={12} xl={9}>
            <div style={{borderRadius:'5px',marginRight:'90px'}} className='rightColDiv p-[20px] bg-[#FFFFFF2E]'>
              <h6 className='text-white text-[25px] mb-[16px] font-bold raleway'>Latest Listing</h6>
              <div className='flex'>
                <div style={{borderRadius:'10px',border:'1px solid #ECA33A'}} className='overflow-hidden w-[176px] h-[80px] mr-6'>
                  <img style={{borderRadius:'10px'}} src='/OtherCard4.png' alt='none' />
                </div>
                <div>
                <p className='text-white text-[17px] font-bold raleway leading-[23px]' > Luxury 6 bed mansion
                    in palmjumera</p> 
                <p className='text-[#ECA33A] text-[20px] font-bold raleway leading-[23px]'>
                AED 5,500,000
                </p>
                </div>
              </div>
              <div className='flex mt-3'>
                <div style={{borderRadius:'10px',border:'1px solid #ECA33A'}} className='overflow-hidden w-[176px] h-[80px] mr-6'>
                  <img style={{borderRadius:'10px'}} src='/OtherCard5.png' alt='none' />
                </div>
                <div>
                <p className='text-white text-[17px] font-bold raleway leading-[23px]' > Luxury 6 bed mansion
                    in palmjumera</p> 
                <p className='text-[#ECA33A] text-[20px] font-bold raleway leading-[23px]'>
                AED 5,500,000
                </p>
                </div>
              </div>
              <div className='flex mt-3'>
                <div style={{borderRadius:'10px',border:'1px solid #ECA33A'}} className='overflow-hidden w-[176px] h-[80px] mr-6'>
                  <img style={{borderRadius:'10px'}} src='/OtherCard6.png' alt='none' />
                </div>
                <div>
                <p className='text-white text-[17px] font-bold raleway leading-[23px]' > Luxury 6 bed mansion
                    in palmjumera</p> 
                <p className='text-[#ECA33A] text-[20px] font-bold raleway leading-[23px]'>
                AED 5,500,000
                </p>
                </div>
              </div>

            </div>
            <div style={{borderRadius:'5px',marginRight:'90px'}} className='rightColDiv mt-[20px] p-[20px] bg-[#FFFFFF2E]'>
              <h6 className='text-white text-[25px] mb-[16px] font-bold raleway'>Trending Stories</h6>
              <p className='text-white text-[17px] font-bold raleway leading-[23px]' > Top Luxury  <br/>Restaurant In Dubai </p>
              <div style={{borderBottom:'1px solid #ECA33A'}} className='flex justify-between'>
                <p className='text-[#ECA33A] text-[17px] font-bold raleway mt-1 leading-[18px]'> Read full story</p>
                <div className='flex py-[5px] items-center mt-3'>
                <FontAwesomeIcon  width={20} height={20} style={{color:'#cecece',marginRight:'2px'}} icon={faCalendarDays} />
                <p style={{whiteSpace:'nowrap'}} className='text-[#cecece] text-[17px] font-light raleway leading-[23px]'> 02 june</p>
                </div>
              </div>

              <p className='mt-3 text-white text-[17px] font-bold raleway leading-[23px]' > UAE Year of <br/> Sustainability  </p>
              <div style={{borderBottom:'1px solid #ECA33A'}} className='flex justify-between'>
                <p className='text-[#ECA33A] text-[17px] font-bold raleway mt-1 leading-[18px]'> Read full story</p>
                <div className='flex py-[5px] items-center mt-3'>
                <FontAwesomeIcon  width={20} height={20} style={{color:'#cecece',marginRight:'2px'}} icon={faCalendarDays} />
                <p style={{whiteSpace:'nowrap'}} className='text-[#cecece] text-[17px] font-light raleway leading-[23px]'> 02 june</p>
                </div>
              </div>


              <p className='mt-3 text-white text-[17px] font-bold raleway leading-[23px]' > Emirati Hospitality <br/> Experience </p>
              <div style={{borderBottom:'1px solid #ECA33A'}} className='flex justify-between'>
                <p className='text-[#ECA33A] text-[17px] font-bold raleway mt-1 leading-[18px]'> Read full story</p>
                <div className='flex py-[5px] items-center mt-3'>
                <FontAwesomeIcon  width={20} height={20} style={{color:'#cecece',marginRight:'2px'}} icon={faCalendarDays} />
                <p style={{whiteSpace:'nowrap'}} className='text-[#cecece] text-[17px] font-light raleway leading-[23px]'> 02 june</p>
                </div>
              </div>
              

              <p className='mt-3 text-white text-[17px] font-bold raleway leading-[23px]' > Best Dubai Blogs</p>
              <div style={{borderBottom:'1px solid #ECA33A'}} className='flex justify-between'>
                <p className='text-[#ECA33A] text-[17px] font-bold raleway mt-1 leading-[18px]'> Read full story</p>
                <div className='flex py-[5px] items-center mt-3'>
                <FontAwesomeIcon  width={20} height={20} style={{color:'#cecece',marginRight:'2px'}} icon={faCalendarDays} />
                <p style={{whiteSpace:'nowrap'}} className='text-[#cecece] text-[17px] font-light raleway leading-[23px]'> 02 june</p>
                </div>
              </div>

            </div>
             
          </Col>
        </Row>
        </div>
        
  </div>
  <FreeConsultation />
    <Footer />
  </div>
  )
}

export default page