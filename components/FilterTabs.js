'use client'

import { Tabs, Input, Button } from 'antd';
import React, { useState, useEffect } from 'react';
import SelectInput from './SelectInput';
import { bedroomsEnums, countryEnums, propertyTypesEnums, uaeCitiesEnums, usaCitiesEnums } from '@/app/utills/enums';
import PriceRangePicker from './PriceRangePicker';
import { useRouter } from 'next/router';
import Link from "next/link";



function FilterTabs() {
  // fetch('https://localhost:3000/GetData')
  // .then(response => {
  //   if (!response.ok) {
  //     throw new Error('Network response was not ok');
  //   }
  //   return response.json();
  // })
  // .then(data => {
  //   localStorage.setItem('propData', JSON.stringify(data.data));
  // })
  // .catch(error => {
  //   console.error('There was a problem with the fetch operation:', error);
  // });


  const [defaultActiveFrom, setDefaultActiveFrom] = useState('1')
  const [dummyData, setDummyData] = useState([
    {
      key: '1',
      label: 'Sale',
      content: 'Sale'
    },
    {
      key: '2',
      label: 'Rent',
      content: 'Rent'
    },
    {
      key: '3',
      label: 'Buy',
      content: 'Buy'
    },
  ]);

  const onChange = (key) => {
    setSelectedData(null);
  };

  const [selectedData, setSelectedData] = useState([]);

  const handleSelectChange = (value, type , propType) => {
    setSelectedData(prevSelectedData => ({
      ...prevSelectedData,
      [type]: value,
      "propType": propType
    }));
  };

  useEffect(() => {
    console.log(selectedData);
    localStorage.setItem('filterInfo',JSON.stringify(selectedData));
  }, [selectedData]);
  
  
  // const mainUrl =ocation.origin;
  // const goToHome = () => {
  //   props.window.location.href = `${mainUrl}/Dashboard`;
  // };

  return (
    <Tabs onChange={onChange} defaultActiveKey={defaultActiveFrom} className="custom-tab-style">
      {dummyData.map((item) => (
        <div tab={item.label} key={item.key}>
          <div className='filterInputsContaner'>
            <div className='InputBox'>
              <SelectInput options={uaeCitiesEnums} placeholder="Communities Area" onChange={(value) => handleSelectChange(value, 'community', item.content)} />
            </div>
            <div className='InputBox'>
              <SelectInput options={propertyTypesEnums} placeholder="Categories" onChange={(value) => handleSelectChange(value, 'categories',item.content)} />
            </div>
            <div className='InputBox'>
              <SelectInput options={bedroomsEnums} placeholder="Rooms" onChange={(value) => handleSelectChange(value, 'bedrooms',item.content)} />
            </div>
            <div className='InputBox'>
              {/* <Button className='searchProperties' ><Link>

              Find Your Properties<Link/></Button> */}
              <Link
              href="/Properties"
              
            >
            <button className='searchProperties'>Find Your Properties</button>
              
            </Link>
            </div>
          </div>
        </div>
      ))}
    </Tabs>
  );
}

export default FilterTabs;

