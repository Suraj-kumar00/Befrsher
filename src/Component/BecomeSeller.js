import React from 'react'
import BecomeSellerBanner from '../Images/Become a seller banner.png'
import Call from "../Images/Call.svg"

function BecomeSeller() {
  return (
    <div className=" max-h-[35.875rem] sm:max-h-[46rem] pr-12 pb-8 ml-[0.94rem] mr-[4.06rem] mb-8 sm:mb-2 sm:ml-1  mt-2 max-w-screen w-full ">
            <h1 className="text-[2.3125rem] text-[#1f1f1f] font-semibold tracking-tighter] sm:text-[1.3rem] lg:text-[2rem]">Become a Seller</h1>
            <div className="max-h-[30.125rem]  flex rounded-[1.25rem]  border-2 sm:mt-1 mt-3 p-2 flex-shrink sm:flex-col sm:w-screen  sm:max-h-[45rem] sm:p-0 4xl:w-screen 4xl:flex 4xl:justify-evenly " >
                    <img className="rounded-[1.25rem] flex flex-shrink xl:w-[50%] md:w-[40%] sm:w-full  "src={BecomeSellerBanner} alt="become seller banner"/>
                    <div className="flex flex-col flex-shrink  justify-around ml-10 sm:ml-1 leading-10 tracking-tighter xl:basis-3/4 sm:w-full ]">
                        <h2 className="max-w-[21.5rem] max-h-[4.25rem] text-4xl lg:text-3xl font-semibold text-[#1f1f1f] md:text-2xl ">Take Your<br className="sm:hidden"></br> Business Online</h2>
                        <p className='max-w-[43.5625rem] max-h-[16.5625rem] my-[1.8rem] sm:my-[1rem] text-[#343434] text-2xl lg:text-xl font-normal text-[2rem] md:text-[1.1rem] '>Manage Your Business With Befrsher<br></br>
                        <div className='mt-10 sm:mt-5 text-start max-w-[43.56rem]   text-[2rem] lg:text-xl flex-shrink flex md:mt-8 md:text-[1.1rem] '> 
                        Increase the Visibility of your product to interested customer. Give Great Experience to Customer with our Personalized Shopping Platform.
                          </div></p>
                        <button className='rounded-[4.3125rem] w-80 py-5 px-5 max-h-20 bg-[#C50460] text-[#f4f4f4] text-[2.3125rem] flex  flex-shrink justify-center items-center gap-4 lg:text-3xl sm:text-2xl sm:m-auto sm:p-2 lg:max-w-[18rem] md:max-w-[18rem] md:max-h-[4rem]' type='submit'>Register Now
                        <img className="inline w-6 h-6 "src={Call} alt="registerbtn"></img>
                        </button>
                    </div>


            </div>

    </div>
  )
}

export default BecomeSeller