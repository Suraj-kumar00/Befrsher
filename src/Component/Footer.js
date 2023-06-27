import React from 'react'

function Footer() {
  return (
    <footer className="w-1512 h-80 bg-[#F4F4F4] border-2 border-red-700 flex justify-center flex-col items-center text-[#1F1F1F]">
            <div className='w-[89.5rem] h-[11.5rem] flex items-center justify-between border-2 border-green-600 mx-10'>
                <div className="pl-[5.9375rem] flex flex-col border-2 border-black w-[16.7681rem] h-[11.6231rem]">   
                        <h1 clasName="w-[16.7679rem] h-[4.3826rem] font-medium">Privacy Policy</h1>
                        <div className="w-[16.7679rem] h-[2.4771rem] ">Shipping & Delivery</div>
                        <div className="w-[16.7679rem] h-[2.4771rem]">Aout us</div>
                        <div className="w-[16.7679rem] h-[2.4771rem]">Returns</div>

                </div>
                <div className="flex flex-col border-2 border-orange-900 w-[21.5319rem] h-[11.6231rem] "  >
                        <h1 clasName="w-[21.5316rem] h-[4.3826rem]  font-medium">Terms & Conditions</h1>
                        <div className="w-[16.7679rem] h-[2.4771rem]">Shipping & Delivery</div>
                        <div className="w-[16.7679rem] h-[2.4771rem]">About us </div>
                        <div className="w-[16.7679rem] h-[2.4771rem]">Returns</div>
                </div>
                <div className="flex flex-col border-2 border-black w-[21.5319rem] h-[11.6231rem]">
                        <h1 clasName="w-[21.5316rem] h-[4.3826rem]  font-medium">Contact us</h1>
                        <div className="w-[16.7679rem] h-[2.4771rem]">befrsher@gmail.com</div>
                        <div className="w-[16.7679rem] h-[2.4771rem]">+91 9898989898</div>
                        <div className="w-[16.7679rem] h-[2.4771rem]">www.befrsher.com</div>
                </div>


            </div>

            <div className=' border-2 border-yellow-900 w-[24.25rem] h-16 flex justify-center items-center py-0.9375 gap-[1.6875rem] py-[0.9375]'>
                <img src="" alt="instagram"/>
                <img src=""  alt="facebook"/>
                <img src=""  alt="twitter"/>
                <img src=""  alt="linkedin"/>
                <img src=""  alt="youtube"/>

            </div>

    </footer>
  )
}

export default Footer