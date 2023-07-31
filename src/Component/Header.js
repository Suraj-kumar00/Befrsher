import React from 'react'
import Companylogo from "../Images/Companylogo.jpg"
import Home from "../Images/Home.svg"
import Toptrend from "../Images/Toptrends.svg"
import Arrowdown from "../Images/Arrowdown.svg"
import Cartlogo from "../Images/Cart.svg"

function Header() {
  return (
    <main className='flex max-w-screen flex-grow flex-shrink w-full h-60 pt-3 pb-2 pr-[2.5625rem] pl-10 lg:p-1'>
   
            <img className="h-full flex flex-shrink" src={Companylogo} alt="companylogo"/>
        
        <div className="flex flex-shrink justify-evenly items-center max-w-screen w-full  ">
            <div className='flex flex-shrink items-center justify-around lg:max-w-[15rem] h-[1.6875rem] 2xl:max-w-[21.3125rem] w-full '>
                    <div className='flex items-center  flex-shrink max-w-[4.875rem]'>
                        <img className='max-w-[1.125rem]' src={Home} alt="Home"/>
                        <div className='max-w-[3.125rem] '>Home</div>
                    </div>
                    <div className=' flex justify-center items-center max-w-[7.3125rem]  '>
                        <img className="max-w-6 h-6" src={Toptrend} alt="toptrendlogo"/>
                        <div className="max-w-[5.1875rem] ">Top Trends</div>
                    </div>
                    <div className="flex items-center justify-between  max-w-[3.5625rem]">
                        <div className="max-w-[2.5625rem] ">More</div>
                        <img className="h-3.5 max-w-[0.5625rem] "src={Arrowdown} alt="arrowdownlogo"/>
                    </div>

            </div>
            <div className='flex items-center ml-10 lg:ml-2 max-w-[4.1875rem] h-[1.6875rem]'>
               <img  className="max-w-4 h-4" src={Cartlogo} alt="cartlogo"/>
                <div className="max-w-[2.9375rem] h-[1.6875rem]">Cart</div>
            </div>
            <div className='flex justify-center text-[#F6f6f6] items-center ml-33 lg:ml-2 max-w-[8.75rem] h-10 rounded-[0.3125rem] bg-[#484FA2]'>
                <a className="flex justify-center items-center max-h-[1.6875rem] pt-[0.4375rem] pr-[0.6875rem] pb-[0.375rem] pl-2.5 lg:p-1" href='#'>Become a Seller</a>
            </div>
            <div className='flex items-center justify-center ml-3 lg:ml-1 max-w-[7.25rem] h-10 rounded-[0.3125rem]  bg-[#C40460] text-[#e7e7e6]'>
              <a className="flex justify-center items-center  lg:p-2 py-3.5 px-7" href="#">Signup</a>
            </div>

        </div>
    </main>
  )
}

export default Header
