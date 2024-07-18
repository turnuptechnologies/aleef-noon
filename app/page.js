'use client'

import Header from "@/components/header/Index";
import MainSlider from "@/components/sections/MainSlider";
import SecondSection from "@/components/sections/SecondSection";
import ThirdSection from "@/components/sections/ThirdSection";
import EnquireSection from "@/components/sections/EnquireSection";
import LatestUpdate from "@/components/sections/LatestUpdate";
import Filter from "@/components/Filter";
import FreeConsultation from "@/components/sections/FreeConsultation";
// import Footer from "@/components/sections/Footer";
import { ConfigProvider, theme  } from "antd";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";
import About from "@/components/sections/Abouts";
import ProductSection from "@/components/sections/ProductSection";
import OfficialsClients from "@/components/sections/OfficialsClients"
import OurPartners from "@/components/sections/OurPartners"
import OurDevelopments from "@/components/sections/OurDevelopments";
import ScrollTopButton from "@/components/ScrollTopButton";
import SocialIconScroll from "@/components/SocialIconScroll";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState,useEffect } from "react";



var apiCalled=false;
export default function Home({ Component, pageProps }) {
const [dataa, setDataa] = useState([]);
const [productSectionContent, setProductSectionContent] = useState(null);

const fetchData = async () => {
    if(apiCalled){
      setDataa(await JSON.parse(localStorage.getItem('propData')));
    }
    else{
      await fetch('http://localhost:3000/GetData')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        alert("data from api fetched");
        localStorage.setItem('propData', JSON.stringify(data.data));
        setDataa(data.data);
        apiCalled=true;
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
    }
    
  };

useEffect(() => {
  fetchData();
}, []);

  return (
    <>
    <ConfigProvider 
       theme={{
        token: {
          colorPrimary: '#ECA33A',
          colorSecondary: '#ffffff',
          colorFillSecondary: "#fff"
        },
      }}
    >
    <ScrollTopButton/>
    <SocialIconScroll/>
    <Header />
    <MainSlider />   
    <Filter  />
    <SecondSection /> 
    <FreeConsultation />
    
    <ProductSection 
      heading={"Luxury Properties"} 
      subHeadingTop='Dubai' 
      subHeadingBottom="Indulge in Unparalleled Luxury" 
      categoryTabs={true} 
      alignJustify="justify-center"
      bgColor="bg-[#101010]"
      data={dataa}
    /> 
    <OurPartners />
    <ThirdSection />    
    <OfficialsClients/>
    <EnquireSection />
    <LatestUpdate />
    <About />
    <Testimonials />
    <OurDevelopments />
    <Footer />
    </ConfigProvider>
    <ToastContainer
      position="top-right"
      autoClose={4000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    </>
  )
}
