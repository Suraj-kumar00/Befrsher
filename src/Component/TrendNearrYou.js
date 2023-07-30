import React from 'react'
import TrendNearYou from "../Images/TrendNearYouImg.png"
function TrendNearrYou() {
  return (
    <section className='ml-[0.94rem] sm:ml-1  sm:mb-3 mr-[4.06rem] mb-10   4xl:w-screen  max-h-[34.1875rem] flex flex-col gap-6 sm2:gap-1 sm1:gap-1 md:gap-1.5 2xl:gap-2 flex-shrink flex-nowrap w-full md:ml-[0.4rem]  xl:ml-[0.7rem] '>
            <h1 className="text-[#1f1f1f] text-[2.3125rem] font-semibold tracking-tight flex flex-nowrap  md:text-[1.5rem] lg:text-[2rem] xl:text-[2.1rem ] mt-2 sm:text-[1.3rem] lg:text-[2rem] " >Trends Near you</h1>
            <div className='relative rounded-[1.25rem] max-h-[30.125rem] max-w-full w-full 2xl:mt-1  flex flex-shrink '>
                <img className="w-screen max-h-full 2xl:max-w-[94rem] 4xl:max-w-full" src={TrendNearYou}alt="TrendNearYouImage"/>
                <div className='flex justify-center items-center absolute max-w-[36.25rem] max-h-[3.75rem] sm:max-h-[5rem] sm:h-[2rem] rounded-[0.625rem] bg-[#484FA2] text-white text-[2.3125rem] lg:text-[1.6rem] md:text-[1.3rem] sm:text-[1rem] sm1:text-[0.8rem] font-semibold tracking-tighter left-[50%] bottom-[10%] top-[75%] right-[9%]'><a className='flex justify-center items-center' href="#">Explore</a></div>
            </div>

    </section>
  )
}

export default TrendNearrYou

// import React from 'react'
// import TrendNearYou from "../Images/TrendNearYouImg.png"
// function TrendNearrYou() {
//   return (
//     <section className='ml-[0.94rem] mr-[4.06rem] mb-10 max-w-[95rem]  2xl:w-screen  max-h-[34.1875rem] flex flex-col gap-6 sm2:gap-1 sm1:gap-1 md:gap-1.5 2xl:gap-2 flex-shrink flex-nowrap w-full md:ml-[0.4rem] lg:ml-[0.5rem] xl:ml-[0.7rem] '>
//             <h1 className="text-[#1f1f1f] text-[2.3125rem] font-semibold tracking-tight flex flex-nowrap  md:text-[1.5rem] lg:text-[2rem] xl:text-[2.1rem ] mt-2" >Trends Near you</h1>
//             <div className='relative rounded-[1.25rem] max-h-[30.125rem] max-w-full  flex flex-shrink '>
//                 <img className="w-screen max-h-full 2xl:max-w-[94rem] 4xl:max-w-full  border-2 border-red-500" src={TrendNearYou}alt="TrendNearYouImage"/>
//                 <div className='flex justify-center items-center absolute max-w-[36.25rem] max-h-[3.75rem] sm:max-h-[5rem] sm:h-[2rem] rounded-[0.625rem] bg-[#484FA2] text-white text-[2.3125rem] lg:text-[1.6rem] md:text-[1.3rem] sm:text-[1rem] sm1:text-[0.8rem] font-semibold tracking-tighter left-[50%] bottom-[10%] top-[75%] right-[9%]'><a className='flex justify-center items-center' href="#">Explore</a></div>
//             </div>

//     </section>
//   )
// }

// export default TrendNearrYou