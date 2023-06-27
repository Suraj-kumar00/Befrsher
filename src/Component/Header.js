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
        
        <div className="flex">
            <div className='flex  items-center border-2 border-slate-900 ml-524'>
                    <div>
                        <img src={Home} alt="Home"/>
                        <div>Home</div>
                    </div>
                    <div className='ml-10'>
                        <img src={Toptrend} alt="toptrendlogo"/>
                        <div>Top Trends</div>
                    </div>
                    <div className="flex items-center justify-between className='ml-10'">
                        <div>More</div>
                        <img src={Arrowdown} alt="arrowdownlogo"/>
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