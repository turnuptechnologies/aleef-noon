import React from 'react'

function page() {
  return (
    <div className="AddProperty raleway">
      <div className="content py-[9px] px-[14px] bg-[#231F20] flex flex-wrap">
        <div class="max-w-100 py-10 px-5 m-auto w-full">
        <div style={{letterSpacing:'2px'}} class="uppercase text-[#ECA33A] font-bold text-2xl mb-[28px] text-left ">
            Add Agent from here
          </div>

          <div className="grid grid-cols-3 gap-6 max-w-90 m-auto">
            <div class="col-span-2 lg:col-span-1">
              <label for="type" className="text-[15px] text-white">
                Name
              </label>
              <input
                type="text"
                style={{borderRadius:'6px',
                border:'1px solid #ECA33A'
              }}
                className="mt-2 transition  outline-none focus:border-[#cecece] ease-out bg-transparent text-white border-solid border-gray-400 py-2 px-3 text-[15px] w-full"
                placeholder="Name"
              />
              
              
            </div>

            <div class="col-span-2 lg:col-span-1">
              <label for="listing" className="text-[15px] mb-6 text-white">
                Price
              </label>
              <input
                type="text"
                style={{borderRadius:'6px',
                border:'1px solid #ECA33A'
              }}
                className="mt-2 transition  outline-none focus:border-[#cecece] ease-out bg-transparent text-white border-solid border-gray-400 py-2 px-3 text-[15px] w-full"
                placeholder="Price"
              />
            </div>

            <div className="col-span-2 lg:col-span-1">
              <label for="type" className="text-[15px] mb-6 text-white">
                Fields
              </label>
              <input
                type="text"
                style={{borderRadius:'6px',
                border:'1px solid #ECA33A'
              }}
                className="mt-2 transition  outline-none focus:border-[#cecece] ease-out bg-transparent text-white border-solid border-gray-400 py-2 px-3 text-[15px] w-full"
                placeholder="Working Fields"
              />
            </div>
            {/* <div className="col-span-2 lg:col-span-1">
              <label for="type" className="text-xl text-white">
                Types & Catagories
              </label>
              <Select
                mode="tags"
                defaultValue="Duplexes"
                style={{
                  width: "100%",
                  borderRadius: '6px',
                  marginTop:'10px',
                  border:"none",
                }}
                className="border-[white] border border-solid transition focus:border focus:border-solid outline-none hover:border-[#ECA33A] focus:border-[#ECA33A] ease-out bg-transparent text-white border-solid border-gray-400 p-3 md:text-xl w-full"
                onChange={handleChange}
                tokenSeparators={[","]}
              >
                {propertyTypesEnums.map((option) => (
                  <Option key={option.value} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <label for="type" className="text-xl text-white">
                Features & Amenities
              </label>
              <Select
                mode="tags"
                defaultValue="Kitchen Appliences"
                style={{
                  width: "100%",
                  borderRadius: '6px',
                  marginTop:'10px',
                  border:"none",
                }}
                className="border-[white] border border-solid transition focus:border focus:border-solid outline-none hover:border-[#ECA33A] focus:border-[#ECA33A] ease-out bg-transparent text-white border-solid border-gray-400 p-3 md:text-xl w-full"
                onChange={handleChange}
                tokenSeparators={[","]}
              >
                {FeaturesAndAminities.map((option) => (
                  <Option key={option.value} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <label for="type" className="text-xl text-white">
                Location
              </label>
              <Select
                mode="tags"
                defaultValue="Dubai"
                style={{
                  width: "100%",
                  borderRadius: '6px',
                  marginTop:'10px',
                  border:"none",
                }}
                className="border-[white] border border-solid transition focus:border focus:border-solid outline-none hover:border-[#ECA33A] focus:border-[#ECA33A] ease-out bg-transparent text-white border-solid border-gray-400 p-3 md:text-xl w-full"
                onChange={handleChange}
                tokenSeparators={[","]}
                placeholder="Abu dhabi"
              >
                {uaeCitiesEnums.map((option) => (
                  <Option key={option.value} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
            </div> */}

            <div className="mt-[30px] flex text-left">
              <button
                style={{ border: "1px solid #ECA33A", borderRadius: "6px" }}
                className="transition ease-out py-1.5 px-2 hover:bg-[#ECA33A] bg-#231F20 text-white w-full sm:w-24"
              >
                Submit
              </button>

              <button
                style={{ border: "1px solid #ECA33A", borderRadius: "6px" }}
                className="ml-4 transition ease-out py-1.5 px-2 hover:bg-[#ECA33A] hover:text-white bg-white text-[#ECA33A] font-bold w-full sm:w-24"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page