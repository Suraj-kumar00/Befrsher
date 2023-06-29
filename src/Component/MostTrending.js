import React from 'react'
import MTImg1 from "../Images/MTImg1.png"
import MTImg2 from "../Images/MTImg2.png"
import MTImg3 from "../Images/MTImg3.png"
import MTImg4 from "../Images/MTIng4.png"
import Wishlist from "../Images/Wishlist.svg"


function MostTrending() {
  return (
    <section className="w-[89.375rem] h-[30.25rem] flex flex-col gap-6 ml-[0.94rem] mr-[4.19rem] mb-10 ">
        <h1 className='w-[17.875rem] h-[1.9375rem] text-[#1f1f1f] font-semibold tracking-tighter text-[2.3125rem]'>Most Trending

        </h1>
        <div className="gap-10 flex  h-[36.375rem] w-[89.375rem]">

            <div className="flex flex-col bg-[#e7e7e7] rounded-15 w-[20.25rem]  h-[26.375rem] gap-[1.06rem]">
                    <div className='w-[20.25rem] h-80 relative'>
                        <img  src={MTImg1} className='w-full h-full' alt="Trendingimg" />
                        <img src={Wishlist} className=' text-[#FFFF]  absolute w-[3.125rem] h-[2.625rem] left-[17.3125rem] top-[0.81rem] right-[0.81rem] bottom-[16.56rem]' alt="wishlisticon"/>
                    </div>
                    <p className=" flex flex-col">
                            <div className='text-[#1f1f1f] text-xl font-medium -tracking-[0.025rem]'>Oversized t-shirt</div>
                            <div className='text-[#8a8a8a] text-base -tracking-[0.02rem] font-medium'>Location of the products</div>
                            <div className="text-[#484FA2] font-bold  -tracking-[0.02rem] text-base">Form ₹299</div>
                    </p>
            </div>
            <div className="flex flex-col bg-[#e7e7e7] rounded-15 w-[20.25rem]  h-[26.375rem] gap-[1.06rem]">
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
            </div>

        </div>


    </section>
  )
}

export default MostTrending