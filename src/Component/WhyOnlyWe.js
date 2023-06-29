import React from 'react'
import whyimg1 from "../Images/whyimg1.png"
import whyimg2 from "../Images/whyimg2.png"
import whyimg3 from "../Images/whyimg3.png"


function WhyOnlyWe() {
  return (
    <section className='flex flex-col w-[89.5rem] h-[31.375rem] ml-[0.94rem] mr-[4.06rem] mb-10'>
        <div className='text-[2.3125rem] font-semibold tracking-tighter text-[#1f1f1f]'>Why Only we ?</div>
        <div className='flex  w-[89.5rem] h-[27.375rem] mt-6 gap-6 '>
                <div className='bg-[#f4f4f4] flex flex-col items-center justify-center rounded-15 pb-[1.62rem] w-[21.20rem] h-[26.275rem] gap-[1.5625rem] '>
                     <div className='rounded-t-15 w-[21.25rem] h-[21.56rem]'><img className='rounded-t-15 w-full h-full' src={whyimg1} alt="img1"/></div> 
                    <p className='leading-5 text-[1.3125rem] font-bold text-[#1f1f1f] w-[12.9375rem] h-[2.625rem]'>Buy From Your Favorite Stores</p>
                </div>
                <div className='bg-[#f4f4f4] flex flex-col items-center justify-center rounded-15 pb-[1.62rem] w-[21.20rem] h-[26.275rem] gap-[1.5625rem] '>
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
                </div>
        </div>

    </section>
  )
}

export default WhyOnlyWe