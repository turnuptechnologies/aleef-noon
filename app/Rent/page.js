"use client";

import ScrollTopButton from "@/components/ScrollTopButton";
import Header from "@/components/header/Index";
import Footer from "@/components/sections/Footer";
import RightCol from "@/components/propertyContent/RightCol";
import react from "react";
import { Col, Row, Tabs } from "antd";
import ProductCard from "@/components/productCard/ProductCard";
import About from "@/components/sections/Abouts";
import Link from "next/link";
import Image from "next/image";
import FreeConsultation from "@/components/sections/FreeConsultation";
import CardPagination from "@/components/productCard/CardPagination";
import SocialIconScroll from '@/components/SocialIconScroll';
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

function RentProperties() {
    const onChange = (key) => {
        console.log(key, "My Key");
      };
  return (
    <div className="RentmaxDiv">
      <ScrollTopButton />
      <SocialIconScroll />
      <Header />
      <main className="productListingPage">
        <div style={{paddingBottom:'0px'}} className="productListingContainer productSection mainContainer">
          <div className="productSectionHeader text-center">
            <h1 className="leading-[70px] uppercase raleway font-bold text-[45px] text-[#ECA33A]">
                Property for rent in Dubai
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
                      <div className="p-1 mb-1 max-w-sm">
                        <ProductCard />
                      </div>
                      <div className="p-1 mb-1 max-w-sm">
                        <ProductCard />
                      </div>
                      <div className="p-1 mb-1 max-w-sm">
                        <ProductCard />
                      </div>
                      <div className="p-1 mb-1 max-w-sm">
                        <ProductCard />
                      </div>
                      <div className="p-1 mb-1 max-w-sm">
                        <ProductCard />
                      </div>
                      <div className="p-1 mb-1 max-w-sm">
                        <ProductCard />
                      </div>
                      <div className="p-1 mb-1 max-w-sm">
                        <ProductCard />
                      </div>
                      <div className="p-1 mb-1 max-w-sm">
                        <ProductCard />
                      </div>
                      <div className="p-1 max-w-sm">
                        <ProductCard />
                      </div>
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
        {/* <Image
          className="my-[70px] w-full h-[50px]"
          height={50}
          width={100}
          src="/vector.svg"
        /> */}
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default RentProperties