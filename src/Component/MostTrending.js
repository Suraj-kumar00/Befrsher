import React from 'react'
// import MTImg1 from "../Images/MTImg1.png"
// import MTImg2 from "../Images/MTImg2.png"
// import MTImg3 from "../Images/MTImg3.png"
// import MTImg4 from "../Images/MTIng4.png"
// import Wishlist from "../Images/Wishlist.svg"
import { MostTrendingData } from '../utils/MostTrendingData'



function MostTrending() {
  return (
    <section className="max-w-[screen] 4xl:max-h-[100rem]  sm:mb-3 w-full max-h-[30.25rem]  flex flex-col gap-6 ml-[0.94rem] mr-[4.19rem] mb-10   2xl:gap-1  sm:gap-1 sm:ml-1 border-2">
        <h1 className='max-w-[17.875rem] max-h-[1.9375rem] text-[#1f1f1f] font-semibold tracking-tighter text-[2.3125rem] md:text-[1.5rem] sm:text-[1.3rem] lg:text-[2rem]'>Most Trending

        </h1>

 <div className="gap-10 flex flex-grow items-center max-h-[38.375rem] 4xl:max-h-[48rem]  flex-nowrap  flex-shrink xl:gap-8 lg:gap-6 md:gap-4 sm:gap-2  w-screen 4xl:mt-4 sm:mt-1 ">
 {                       
 MostTrendingData.map((data)=>

     <div className="flex flex-col bg-[#e7e7e7] rounded-15   justify-center items-center 2xl:max-h-[26.375rem]  w-full  flex-shrink flex-grow ">
             <div className='2xl:max-w-[20.25rem] min-h-80  relative flex flex-shrink flex-grow w-full'>
                 <img  src={data.image} className=' max-w-full max-h-full w-full h-full flex-grow 4xl:w-full ' alt="Trendingimg" />
                 <img src={data.Wishlist} className=' text-[#FFFF]  absolute max-w-[3.125rem] max-h-[2.625rem] left-[17.3125rem] top-[0.81rem] right-[0.81rem] bottom-[16.56rem]' alt="wishlisticon"/>
             </div>
             <p className=" flex flex-col">
                     <div className='text-[#1f1f1f] text-xl font-medium -tracking-[0.025rem]'>{data.name}</div>
                     <div className='text-[#8a8a8a] text-base -tracking-[0.02rem] font-medium'>{data.location}</div>
                     <div className="text-[#484FA2] font-bold  -tracking-[0.02rem] text-base">{data.price}</div>
             </p>
     </div>
     
 )


}
</div>  

    </section>
  )
}

export default MostTrending

     {/* <div className="flex flex-col bg-[#e7e7e7] rounded-15 w-[20.25rem]  h-[26.375rem] gap-[1.06rem]">
             <div className='w-[20.25rem] h-80 relative'>
                 <img  src={MTImg2} className='w-full h-full' alt="Trendingimg" />
                 <img src={Wishlist} className=' text-[#FFFF]  absolute w-[3.125rem] h-[2.625rem] left-[17.3125rem] top-[0.81rem] right-[0.81rem] bottom-[16.56rem]' alt="wishlisticon"/>
             </div>
             <p className=" flex flex-col">
                     <div className='text-[#1f1f1f] text-xl font-medium -tracking-[0.025rem]'>Kashmiri - valvet Saree</div>
                     <div className='text-[#8a8a8a] text-base -tracking-[0.02rem] font-medium'>Location of the products</div>
                     <div className="text-[#484FA2] font-bold  -tracking-[0.02rem] text-base">Form ₹3999</div>
             </p>
     </div>
     <div className="flex flex-col bg-[#e7e7e7] rounded-15 w-[20.25rem]  h-[26.375rem] gap-[1.06rem]">
             <div className='w-[20.25rem] h-80 relative'>
                 <img  src={MTImg3} className='w-full h-full ' alt="Trendingimg" />
                 <img src={Wishlist} className='text-[#FFFF]   absolute w-[3.125rem] h-[2.625rem] left-[17.3125rem] top-[0.81rem] right-[0.81rem] bottom-[16.56rem]' alt="wishlisticon"/>
             </div>
             <p className=" flex flex-col">
                     <div className='text-[#1f1f1f] text-xl font-medium -tracking-[0.025rem]'>Oversized t-shirt</div>
                     <div className='text-[#8a8a8a] text-base -tracking-[0.02rem] font-medium'>Location of the products</div>
                     <div className="text-[#484FA2] font-bold  -tracking-[0.02rem] text-base">Form ₹299</div>
             </p>
     </div>
     <div className="flex flex-col bg-[#e7e7e7] rounded-15 w-[20.25rem]  h-[26.375rem] gap-[1.06rem]">
             <div className='w-[20.25rem] h-80 relative'>
                 <img  src={MTImg4} className='w-full h-full ' alt="Trendingimg" />
                 <img src={Wishlist} className='text-[#FFFF]  absolute w-[3.125rem] h-[2.625rem] left-[17.3125rem] top-[0.81rem] right-[0.81rem] bottom-[16.56rem]' alt="wishlisticon"/>
             </div>
             <p className=" flex flex-col">
                     <div className='text-[#1f1f1f] text-xl font-medium -tracking-[0.025rem]'>Oversized t-shirt</div>
                     <div className='text-[#8a8a8a] text-base -tracking-[0.02rem] font-medium'>Location of the products</div>
                     <div className="text-[#484FA2] font-bold  -tracking-[0.02rem] text-base">Form ₹299</div>
             </p>
     </div> */}

