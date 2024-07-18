import React from 'react'
import Header from "@/components/header/Index";
import Footer from '@/components/sections/Footer';
import { Col, Row } from 'antd';
import ImageGallery from '@/components/ImageGallery';
import PropertyContent from '@/components/propertyContent/PropertyContent';
import ProductSection from '@/components/sections/ProductSection';
import PropertyExploreView from '@/components/ProductDetails/PropertyExploreView';
import AveragePrices from '@/components/ProductDetails/AveragePrices';
import SimilerProperties from '../../../components/ProductDetails/SimilerProperties'
import AreaNeaby from '@/components/ProductDetails/AreaNearby'
import ScrollTopButton from '@/components/ScrollTopButton';

const PropertyDetail = () => {
  return (
    <>
        <ScrollTopButton/>
        <Header />
        <main className='propertyDetail'>
            <div className='mainContainer'>
                <PropertyContent />
            </div>
        </main>
        <img class="bg-[#231F20] w-[100%] goldLine" src="/vector.svg" alt="image" />
        <ProductSection heading="Similar Properties" subHeadingTop="" subHeadingBottom="" categoryTabs={false} />
        <PropertyExploreView/>
        <img class="bg-[#231F20] w-[100%] goldLine" src="/vector.svg" alt="image" />
        <AveragePrices />
        <SimilerProperties />
        {/* <img class="opacity-0 bg-[#231F20] w-[100%] goldLine" src="/vector.svg" alt="image" /> */}
        <AreaNeaby />
        <Footer /> 
    </>
  )
}

export default PropertyDetail