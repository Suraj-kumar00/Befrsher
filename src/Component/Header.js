import React from 'react'
import Companylogo from "../Images/Companylogo.jpg"
import Home from "../Images/Home.svg"
import Toptrend from "../Images/Toptrends.svg"
import Arrowdown from "../Images/Arrowdown.svg"
import Cartlogo from "../Images/Cart.svg"

function Header() {
  return (
    <main className='flex w-1512 h-60 border-2 border-green-500'>
   
            <img className="h-full" src={Companylogo} alt="companylogo"/>
        
        <div className="flex justify-center items-center ">
            <div className='flex  items-center border-2 border-slate-900 ml-524 h-[1.6875rem] w-[21.3125rem]'>
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
            <div className='flex items-center ml-10'>
              <img src={Cartlogo} alt="cartlogo"/>
                <div>Cart</div>
            </div>
            <div className='flex items-center ml-33'>
                <a href='#'>Become a Seller</a>
            </div>
            <div className='flex items-center ml-3'>
              <a href="#">Signup</a>
            </div>

        </div>
    </main>
  )
}

export default Header
