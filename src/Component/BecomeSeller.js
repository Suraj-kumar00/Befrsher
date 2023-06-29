import React from 'react'
import BecomeSellerBanner from '../Images/Become a seller banner.png'
import Call from "../Images/Call.svg"

function BecomeSeller() {
  return (
    <div className='w-[89.5rem] h-[35.875rem] pr-12 pb-8 ml-[0.94rem] mr-[4.06rem] mb-10'>
            <h1 className="text-[2.3125rem] text-[#1f1f1f] font-semibold tracking-tighter]">Become a Seller</h1>
            <div className="h-[30.125rem] flex rounded-[1.25rem]">
                    <img className="rounded-[1.25rem]"src={BecomeSellerBanner} alt="become seller banner"/>
                    <div className="flex flex-col  justify-center ml-10">
                        <h2 className="w-[21.5rem] h-[4.25rem] text-4xl  font-semibold text-[#1f1f1f]">Take Your<br></br> Business Online</h2>
                        <p className='w-[43.5625rem] h-[16.5625rem] my-[1.8rem] text-[#343434] text-2xl font-normal '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                        <button className='rounded-[0.625rem] w-80 py-5 px-5 h-20 bg-[#484fA2] text-[#f4f4f4] text-[2.3125rem] flex justify-center items-center gap-4' type='submit'>Register Now
                        <img className="inline w-6 h-6 "src={Call} alt="registerbtn"></img>
                        </button>
                    </div>


            </div>

    </div>
  )
}

export default BecomeSeller