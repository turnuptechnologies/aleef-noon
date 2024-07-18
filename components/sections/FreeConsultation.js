import React from 'react'

const FreeConsultation = () => {
  return (
    <main>
       <div className="FreeConseltation">
        <div className="mainContainer text-center">
        <div className='SubFreeConseltation'>
          <div style={{borderRadius:'10px'}}> 

          <div className='FreeConseltationInput'>
            <div className='FreeConseltationColumn  rounded-l-[4px] text-[20px]'>
            <input type='text' placeholder='Your Name' />
            
            </div>
            <div className='FreeConseltationColumn text-[20px] leading-[35px] '>
            <input type='email' placeholder='Your Email' />
            </div>
            <div className='FreeConseltationColumn text-[20px] leading-[35px]'>
            <input type='text' placeholder='Phone Number' />
            </div>
            <div className='FreeConseltationColumn rounded-r-[4px] text-[#ECA33A] bg-[#231F20] hover:text-white hover:bg-[#ECA33A] leading-[35px] text-[20px] raleway transition ease-in-out delay-150 hover:border-[#ECA33A]'>
            Consult Now
            </div>
          </div >
          </div>
        </div>
        <div className='flex justify-center mt-[8px]'>
          <div className='flex max-[780px]:flex-col justify-center items-center'>
          <p className='px-[2px] font-bold py-[5px] text-white text-[20px] raleway'> Or get availability via</p>
          <img alt='none' className='mx-[10px] w-[30px] h-full' src='/whatsappIcon.svg' />
          <p className='px-[2px] font-bold py-[5px] text-[#ECA33A] text-[20px] raleway'> WhatsApp</p>
          </div>
         </div>
        </div>
      </div>
    </main>
  )
}

export default FreeConsultation