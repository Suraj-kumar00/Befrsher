import React from 'react'
import TodaysDealImg from "../Images/TodaysDealImg.png"

function TodaysDeal() {
  return (
    <section className='ml-[0.94rem] sm:ml-1 sm:mb-3 mr-[4.06rem] mb-10  max-w-screen 2xl:max-h-[34.1875rem] 4xl:max-h-[55rem] flex flex-col gap-6 2xl:gap-4 xl:gap-3 lg:gap-2 md:gap-1 sm1:ml-[0.2rem] flex-shrink 4xl:w-screen border-2 border-red-500'>
            <h1 className="text-[#1f1f1f] text-[2.3125rem] font-semibold tracking-tight flex flex-nowrap  md:text-[1.5rem] sm:text-[1.3rem] lg:text-[2rem]" >Todays Deal</h1>
            {/* <div className='relative rounded-[1.25rem] max-h-[50.125rem] max-w-full border-2 border-red-500 ' >
                <div className='absolute  left-[69.5%] top-[95.3%] w-[23.75rem] h-[3.75rem] rounded-[0.625rem] bg-[#484FA2] text-white text-[2.3125rem] font-semibold tracking-tighter text-center 2xl:top-[78%] 2xl:left-[60%] xl:top-[81.7%] xl:w-[22rem] lg:top-[75%]  lg:w-[18rem] lg:text-[2rem] lg:h-[4.2rem] md:left-[51%] md:h-[3.6rem] sm: p-1 sm:top-[75%]  sm:left-[5%] sm:h-[2.5rem] sm:text-[1.5rem] sm:w-[24rem] sm1:w-[24rem] sm1:h-[2.15rem] sm1:text-[1.3rem] sm2:w-[20rem]  sm2:h-[1.8rem] sm2:text-[1.2rem] sm3:w-[18rem]  p-4 '><a className='flex justify-center items-center' href="#">Explore</a></div>
            </div> */}
            <div className=' rounded-[1.25rem] max-h-[50.125rem] max-w-full   ' >
               <div className='relative'>
               <img className=" w-screen max-h-full h-auto  4xl:w-screen " src={TodaysDealImg}alt="TodaysDealImage"/>
                <div className='absolute flex justify-center items-center max-w-[36.25rem] max-h-[3.75rem] sm:max-h-[5rem] sm:h-[2rem] rounded-[0.625rem] bg-[#484FA2] text-white text-[2.3125rem] lg:text-[1.6rem] md:text-[1.3rem] sm:text-[1rem] sm1:text-[0.8rem] font-semibold tracking-tighter left-[65%] bottom-[10%] top-[78%] right-[9%]'><a className='flex justify-center items-center' href="#">Explore</a></div>
            </div>
                </div>

    </section>
  )
}

export default TodaysDeal