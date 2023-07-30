import React from 'react'
// import whyimg1 from "../Images/whyimg1.png"
// import whyimg2 from "../Images/whyimg2.png"
// import whyimg3 from "../Images/whyimg3.png"

import { WhyOnlyWeData } from '../utils/WhyOnlyWeData'


function WhyOnlyWe() {
  return (
    <section className='flex flex-col   max-h-[31.375rem] ml-[0.94rem] sm:ml-1 mr-[4.06rem] mb-10 sm:mb-6 w-full 2xl:mt-1 4xl:mt-5'>
        <div className='text-[2.3125rem] font-semibold tracking-tighter text-[#1f1f1f] sm:text-[1.3rem] lg:text-[2rem]'>Why Only we ?</div>
        <div className='flex  flex-grow mt-6 justify-evenly gap-6 md:gap-4 sm1:gap-2 items-center flex-shrink  sm:mt-1  '>
          {      WhyOnlyWeData.map((data)=>
                 <div className='bg-[#f4f4f4] flex flex-col flex-grow flex-shrink items-center justify-center rounded-15 pb-[1.62rem]  max-h-[28.275rem] gap-[1.5625rem] '>
                 <div className='rounded-t-15 2xl:max-w-[22.25rem] 4xl:object-cover 4xl:max-w-full max-h-[21.56rem] flex w-full    flex-shrink'><img className='rounded-t-15 max-w-full min-h-full flex-grow 4xl:max-w-full  ' src={data.image} alt="img1"/></div> 
                <p className='leading-5 text-[1.3125rem] sm1:text-[1rem] sm:max-h-[13rem] text-center font-bold text-[#1f1f1f] max-w-[12.9375rem] max-h-[2.625rem]'>{data.name}</p>
            </div>
          )
              
          }
               
                {/* <div className='bg-[#f4f4f4] flex flex-col items-center justify-center rounded-15 pb-[1.62rem] w-[21.20rem] h-[26.275rem] gap-[1.5625rem] '>
                    <div className='rounded-t-15 w-[21.25rem] h-[21.56rem]'> <img className='rounded-t-15 w-full h-full' src={whyimg2} alt="img1"/></div>
                    <p>Get Amazing Discounts</p>
                </div>
                <div className='bg-[#f4f4f4] flex flex-col items-center justify-center rounded-15 pb-[1.62rem] w-[21.20rem] h-[26.275rem] gap-[1.5625rem] '>
                     <div className='rounded-t-15 w-[21.25rem] h-[21.56rem]'><img className='rounded-t-15 w-full h-full' src={whyimg3} alt="img1"/> </div>
                    <p>Follow Your Local Trends</p>
                </div>
                <div className='bg-[#f4f4f4] flex flex-col items-center justify-center rounded-15 pb-[1.62rem] w-[21.20rem] h-[26.275rem] gap-[1.5625rem] '>
                    <div className='rounded-t-15 w-[21.25rem] h-[21.56rem]'><img className='rounded-t-15 w-full h-full' src={whyimg3} alt="img1"/></div>
                    <p>Connect with your local  bazzar</p>
                </div> */}
        </div>

    </section>
  )
}

export default WhyOnlyWe