"use client";

import ScrollTopButton from "@/components/ScrollTopButton";
import Header from "@/components/header/Index";
import Footer from "@/components/sections/Footer";
import RightCol from "@/components/propertyContent/RightCol";
import react from "react";
import { Col, Row, Tabs } from "antd";
import ProductCard from "../../../components/productCard/ProductCard";
import About from "@/components/sections/Abouts";
import Link from "next/link";
import Image from "next/image";
import FreeConsultation from "@/components/sections/FreeConsultation";
import CardPagination from "@/components/productCard/CardPagination";
import SocialIconScroll from "@/components/SocialIconScroll";
import { useState, useEffect } from "react";

// import { useRouter } from 'next/router';

// const router = useRouter();
// console.log('check',router.pathname)

const items = [
  {
    key: "1",
    label: "Apartments",
  },
  {
    key: "2",
    label: "Townhouses",
  },
  {
    key: "3",
    label: " Vilas",
  },
  {
    key: "4",
    label: "Penthouses",
  },
  {
    key: "5",
    label: "Town houses",
  },
  {
    key: "6",
    label: "Duplexes",
  },
  {
    key: "7",
    label: "Plots",
  },
  {
    key: "8",
    label: "Full Floor Properties",
  },
  {
    key: "9",
    label: "Commercial Properties",
  },
];

const productListingPage = ({ url }) => {
  const [dataa, setDataa] = useState([]);
  const fetchData = async () => {
      setDataa(await JSON.parse(localStorage.getItem('propData'))) ;
    };
  const onChange = (key) => {
    console.log(key, "My Key");
  };
  useEffect(() => {
    fetchData();
  }, [dataa]);
 
  
  // let heading_attribute;
  // if (router.pathname == "/buy") {
  //   console.log('check',router.pathname);
  // }
  // else if (router.pathname == "/sell") {
  //   return heading_attribute = 'Sale'
  // }
  // else if (router.pathname == "/rent") {
  //   return heading_attribute = 'Rent'
  // }
  return (
    <div className="BuymaxDiv">
      <ScrollTopButton />
      <SocialIconScroll />
      <Header />
      <main className="productListingPage">
        <div style={{paddingBottom:'0px'}} className="productListingContainer productSection mainContainer">
          <div className="productSectionHeader text-center">
            <h1 className="leading-[70px] uppercase raleway font-bold text-[45px] text-[#ECA33A]">
                Properties for Sale in Dubai
            </h1>
          </div>
          <div className="productsTabs">
            {true && (
              <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            )}
          </div>
          <Row style={{ marginBottom: "100px" }} gutter={2}>
            <Col lg={24} xl={18}>
              <main className={`bg-[#231F20] `}>
                <div className="">
                  <div className="">
                    <div
                      className={`justify-around flex flex-wrap secondSectionRow`}
                    >
                       {dataa?.map((dat)=>{
                        return <div className="p-4 max-w-sm">
                        <ProductCard data={dat}/>
                      </div>
                    }) 
                    }
                     
                    </div>
                    
                     <CardPagination/>
                     
                  </div>
                </div>
              </main>
            </Col>
            <Col className="pt-[4px]" lg={0} xl={6}>
              <RightCol />
            </Col>
          </Row>
        </div>
        <FreeConsultation />
        {/* <img style={{ marginTop:'35px',marginBottom:'35px',height:'80px', width:'100%'}} src='/VectorPng.png' alt='none' />  */}
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default productListingPage;
