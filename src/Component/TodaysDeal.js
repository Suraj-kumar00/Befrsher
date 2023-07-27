import React from 'react'
import TodaysDealImg from "../Images/TodaysDealImg.png"

function TodaysDeal() {
  return (
    <section className='ml-[0.94rem] mr-[4.06rem] mb-10 max-w-full w-full max-h-[34.1875rem] flex flex-col gap-6 2xl:gap-4 xl:gap-3 lg:gap-2 md:gap-1 sm1:ml-[0.2rem] flex-shrink '>
            <h1 className="text-[#1f1f1f] text-[2.3125rem] font-semibold tracking-tight flex flex-nowrap lg:text-[2rem] md:text-[1.5rem] sm:text-[1.2rem] sm1:text-[1rem]" >Todays Deal</h1>
            <div className='relative rounded-[1.25rem] max-h-[30.125rem] max-w-[89.5rem]  ' >
                <img className="max-w-full max-h-full w-auto h-auto object-contain" src={TodaysDealImg}alt="TodaysDealImage"/>
                <div className='absolute   left-[63.5%] top-[82.3%] w-[23.75rem] h-[3.75rem] rounded-[0.625rem] bg-[#484FA2] text-white text-[2.3125rem] font-semibold tracking-tighter text-center xl:top-[81.7%] xl:w-[22rem] lg:top-[75%]  lg:w-[18rem] lg:text-[2rem] lg:h-[4.2rem] md:left-[51%] md:h-[3.6rem] sm:top-[75%]  sm:left-[5%] sm:h-[2.5rem] sm:text-[1.5rem] sm:w-[24rem] sm1:w-[24rem] sm1:h-[2.15rem] sm1:text-[1.3rem] sm2:w-[20rem]  sm2:h-[1.8rem] sm2:text-[1.2rem] sm3:w-[18rem]'><a className='flex justify-center items-center' href="#">Explore</a></div>
            </div>

    </section>
  )
}

export default TodaysDeal