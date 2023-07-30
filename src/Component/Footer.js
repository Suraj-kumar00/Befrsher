import React from 'react'
import Instagram from '../Images/instagram.svg'
import Facebook from '../Images/facebook.svg'
import Linkedn from '../Images/linkedin.svg'
import Twitter from '../Images/Twitter.svg'
import Youtube from '../Images/youtube.svg'

function Footer() {
  return (
    <footer className="max-w-screen max-h-screen bg-[#F4F4F4]  flex  justify-between  flex-col flex-shrink items-center text-[#1F1F1F] ">
            <div className=' max-h-[11.5rem] sm1:max-h-full flex  sm1:flex-col sm:flex-col sm:max-h-full  items-center border-2 border-red-700 w-full   justify-around flex-shrink mx-[2.5rem] mb-[1.6875rem] mt-6 sm2:m-0  '>
                <div className=" sm1:pl-[0rem] md:pl-1 flex flex-col flex-shrink items-center max-h-[11.6231rem] sm:max-h-60  border-2 border-yellow-400 ">   
                        <h1 className="max-w-[21.5316rem]   h-[4.3826rem] flex items-center font-medium text-[2.3125rem] sm2:text-[1.2rem] md:text-[1.5rem] lg:text-[1.4rem]">Privacy Policy</h1>
                        <div className="max-w-[16.7679rem]  h-[2.4771rem] flex items-center text-[1.3125rem] sm2:text-[0.9rem] lg:text-[1.2rem] ">Shipping & Delivery</div>
                        <div className="max-w-[16.7679rem] h-[2.4771rem] flex items-center text-[1.3125rem] sm2:text-[0.9rem]  lg:text-[1.2rem] lg:tex">About us</div>
                        <div className="max-w-[16.7679rem] h-[2.4771rem] flex items-center text-[1.3125rem] sm2:text-[0.9rem] lg:text-[1.2rem] ">Returns</div>

                </div>
                <div className="flex flex-col  items-center max-h-[11.6231rem] flex-shrink border-2 border-yellow-400"  >
                        <h1 className="max-w-[21.5316rem] h-[4.3826rem]  flex items-center font-medium text-[2.3125rem] sm2:text-[1.2rem] md:text-[1.5rem] flex-shrink lg:text-[1.4rem]">Terms & Conditions</h1>
                        <div className="max-w-[16.7679rem] h-[2.4771rem] flex items-center text-[1.3125rem] sm2:text-[0.9rem]  lg:text-[1.2rem] flex-shrink ">Shipping & Delivery</div>
                        <div className="max-w-[16.7679rem] h-[2.4771rem] flex items-center text-[1.3125rem] sm2:text-[0.9rem]  lg:text-[1.2rem] flex-shrink ">About us </div>
                        <div className="max-w-[16.7679rem] h-[2.4771rem] flex items-center text-[1.3125rem] sm2:text-[0.9rem] lg:text-[1.2rem] flex-shrink ">Returns</div>
                </div>
                <div className="flex flex-col  items-center  max-h-[11.6231rem] flex-shrink border-2 border-yellow-400">
                        <h1 className="max-w-[21.5316rem] h-[4.3826rem]   flex items-center  font-medium text-[2.3125rem] sm2:text-[1.2rem]  md:text-[1.5rem] lg:text-[1.4rem]">Contact us</h1>
                        <div className="max-w-[16.7679rem] h-[2.4771rem] flex items-center text-[1.3125rem] sm2:text-[0.9rem]  lg:text-[1.2rem] ">befrsher@gmail.com</div>
                        <div className="max-w-[16.7679rem] h-[2.4771rem] flex items-center text-[1.3125rem] sm2:text-[0.9rem]  lg:text-[1.2rem] ">+91 9898989898</div>
                        <div className="max-w-[16.7679rem] h-[2.4771rem] flex items-center text-[1.3125rem] sm2:text-[0.9rem]  lg:text-[1.2rem] ">www.befrsher.com</div>
                </div>


            </div>

            {/* <div className='   max-h-16 flex   justify-center items-center  gap-[1.6875rem] py-[0.9375rem] ml-[31.3125rem] mr-[38.9375rem] mb-[1.3125rem] '>
                <img clasName="max-w-[2.0734rem] max-h-[2.0734rem]" src={Instagram}  alt="instagram"/>
                <img clasName="max-w-[2.0734rem] max-h-[2.0734rem]"  src={Facebook}   alt="facebook"/>
                <img clasName="w-[2.0734rem] h=[2.0734rem]" src={Twitter}   alt="twitter"/>
                <img clasName="w-[2.0734rem] h=[2.0734rem]" src={Linkedn}  alt="linkedin"/>
                <img clasName="w-[2.0734rem] h=[2.0734rem]" src={Youtube}   alt="youtube"/>

            </div> */}

    </footer>
  )
}

export default Footer

// <div className='w-[89.5rem] h-[11.5rem] flex items-center justify-between   mx-10 mb-[1.6875rem] mt-6'>
// <div className="pl-[5.9375rem] flex flex-col  w-[16.7681rem] h-[11.6231rem]">   
//         <h1 className="w-[16.7679rem] h-[4.3826rem] flex items-center font-medium">Privacy Policy</h1>
//         <div className="w-[16.7679rem] h-[2.4771rem] flex items-center ">Shipping & Delivery</div>
//         <div className="w-[16.7679rem] h-[2.4771rem] flex items-center">Aout us</div>
//         <div className="w-[16.7679rem] h-[2.4771rem] flex items-center">Returns</div>

// </div>
// <div className="flex flex-col  w-[21.5319rem] h-[11.6231rem] "  >
//         <h1 className="w-[21.5316rem] h-[4.3826rem]  flex items-center font-medium">Terms & Conditions</h1>
//         <div className="w-[16.7679rem] h-[2.4771rem] flex items-center">Shipping & Delivery</div>
//         <div className="w-[16.7679rem] h-[2.4771rem] flex items-center">About us </div>
//         <div className="w-[16.7679rem] h-[2.4771rem] flex items-center">Returns</div>
// </div>
// <div className="flex flex-col  w-[21.5319rem] h-[11.6231rem]">
//         <h1 className="w-[21.5316rem] h-[4.3826rem]   flex items-center font-medium">Contact us</h1>
//         <div className="w-[16.7679rem] h-[2.4771rem] flex items-center ">befrsher@gmail.com</div>
//         <div className="w-[16.7679rem] h-[2.4771rem] flex items-center">+91 9898989898</div>
//         <div className="w-[16.7679rem] h-[2.4771rem] flex items-center">www.befrsher.com</div>
// </div>


// </div>

// <div className='  w-[24.25rem] h-16 flex justify-center items-center  gap-[1.6875rem] py-[0.9375rem] ml-[31.3125rem] mr-[38.9375rem] mb-[1.3125rem]'>
// <img clasName="w-[2.0734rem] h=[2.0734rem]" src={Instagram}  alt="instagram"/>
// <img clasName="w-[2.0734rem] h=[2.0734rem]"  src={Facebook}   alt="facebook"/>
// <img clasName="w-[2.0734rem] h=[2.0734rem]" src={Twitter}   alt="twitter"/>
// <img clasName="w-[2.0734rem] h=[2.0734rem]" src={Linkedn}  alt="linkedin"/>
// <img clasName="w-[2.0734rem] h=[2.0734rem]" src={Youtube}   alt="youtube"/>

// </div>