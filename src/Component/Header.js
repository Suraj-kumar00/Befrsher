import React from 'react'
import Companylogo from "../Images/Companylogo.jpg"
import Home from "../Images/Home.svg"
import Toptrend from "../Images/Toptrends.svg"
import Arrowdown from "../Images/Arrowdown.svg"
import Cartlogo from "../Images/Cart.svg"

function Header() {
  return (
    <main className='flex w-1512 h-60 pt-3 pb-2 pr-[2.5625rem] pl-10'>
   
            <img className="h-full" src={Companylogo} alt="companylogo"/>
        
        <div className="flex justify-center items-center ">
            <div className='flex  items-center  ml-524 h-[1.6875rem] w-[21.3125rem]'>
                    <div className='flex items-center justify-between w-[4.875rem]'>
                        <img className='w-[1.125rem]' src={Home} alt="Home"/>
                        <div className='w-[3.125rem] h=[1.6875rem]'>Home</div>
                    </div>
                    <div className='ml-10 flex justify-center items-center w-[7.3125rem]  '>
                        <img className="w-6 h-6" src={Toptrend} alt="toptrendlogo"/>
                        <div className="w-[5.1875rem] ">Top Trends</div>
                    </div>
                    <div className="flex items-center justify-between ml-10 w-[3.5625rem]">
                        <div clasName="w-[2.5625rem] h-3">More</div>
                        <img clasName="h-3.5 w-[0.5625rem]"src={Arrowdown} alt="arrowdownlogo"/>
                    </div>

            </div>
            <div className='flex items-center ml-10 w-[4.1875rem] h-[1.6875rem]'>
               <img  className="w-4 h-4" src={Cartlogo} alt="cartlogo"/>
                <div clasName="w-[2.9375rem] h-[1.6875rem]">Cart</div>
            </div>
            <div className='flex justify-center text-[#F6f6f6] items-center ml-33 w-[8.75rem] h-10 rounded-[0.3125rem] bg-[#484FA2]'>
                <a className="flex justify-center items-center h-[1.6875rem] pt-[0.4375rem] pr-[0.6875rem] pb-[0.375rem] pl-2.5" href='#'>Become a Seller</a>
            </div>
            <div className='flex items-center justify-center ml-3 w-[7.25rem] h-10 rounded-[0.3125rem]  bg-[#C40460] text-[#e7e7e6]'>
              <a className="flex justify-center items-center   py-3.5 px-7" href="#">Signup</a>
            </div>

        </div>
    </main>
  )
}

export default Header
