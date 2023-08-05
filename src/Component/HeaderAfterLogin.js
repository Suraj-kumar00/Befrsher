import React from "react";
import Companylogo from "../Images/Companylogo.jpg";
import Cart from "../Images/Cart.svg";
import searchicon from "../Images/searchicon.svg";
import LocationIcon from "../Images/LocationIcon.svg";
import store from "../Images/Store.png";
import Arrowdown from "../Images/Arrowdown.svg";
import profilePhoto from "../Images/profilePhoto.svg";
import Wishlist from "../Images/Wishlist.svg";

function HeaderAfterLogin() {
  return (
    <main className="mb-[1.88rem]">
      <div className="flex w-1512 h-60 pt-3 pb-2   items-center mb-[1.88rem] gap-[2.5remd] ">
        <div className="w-[11.25rem] h-[2.5rem] pl-10 inline-flex justify-center items-center ">
          <img src={Companylogo} alt="companylogo" />
        </div>

        <div className=" relative w-[44rem] h-10 rounded-[0.625rem] bg-[#e7e7e7] flex items-center ml-[11.56rem]">
          <div className="flex w-[8rem] h-5 justify-center ml-[0.5rem]">
            <img
              className=" h-4 flex j"
              src={LocationIcon}
              alt="locationicon"
            />
            <div
              className="flex items-center font-normal text-[1rem]  -tracking-[0.02rem] text-[#8a8a8a] ml-1 w-[7.25rem] h-5"
              type="text"
              placeholder="Add Location"
            >
              Add Location{" "}
            </div>
          </div>
          <div className="w-[0.0625rem] h-10 bg-[#8a8a8a] flex ml-[5.64rem]"></div>

          <div className=" flex items-center  ml-[1.5rem] ">
            <img src={searchicon} alt="searchicon" />
            <label className=" ml-1">
              <input
                type="submit"
                className="text-[1rem] font-normal -tracking-[0.02rem] text-[#8a8a8a]"
                placeholder="Search here"
                value="Search Here"
              ></input>
            </label>
          </div>
          <img
            src={store}
            alt="storeicon"
            className="w-[1.875rem] h-[1.875rem] absolute left-[41.13rem] right-[0.31rem]"
          />
        </div>

        <div className="flex justify-center items-center gap-[2.5rem] ">
          <div className="flex justify-center text-[#F6f6f6] items-center  w-[8.75rem] h-10 rounded-[0.3125rem] bg-[#484FA2] ">
            <a
              className="flex justify-center items-center h-[1.6875rem] pt-[0.4375rem] pr-[0.6875rem] pb-[0.375rem] pl-2.5 "
              href="#"
            >
              Become a Seller
            </a>
          </div>
          <div className="flex items-center ">
            <img className="w-4 h-4" src={Cart} alt="cart" />
            <div clasName="w-[2.9375rem] h-[1.6875rem]">Cart</div>
          </div>
          <div className=" flex gap-[2.5rem] ">
            <img
              className="h-full mr-[2.5rem]"
              src={profilePhoto}
              alt="profile photo"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-[1.88rem]">
        <ul className="flex pl-10 gap-[2.5rem] text-center font-inter text-base text-black leading-none tracking-tighter">
          <li className="mx-[0.625rem] cursor-pointer">Home</li>
          <li className="mx-[0.625rem] cursor-pointer">Near Me</li>
          <li className="mx-[0.625rem] cursor-pointer">Trending</li>
          <li className="mx-[0.625rem] cursor-pointer">Men</li>
          <li className="mx-[0.625rem] cursor-pointer">Women</li>
          <li className="mx-[0.625rem] cursor-pointer">Formal Wear</li>
          <li className="mx-[0.625rem] cursor-pointer gap-[16.313rem]">
            Seasonal Wear
          </li>
          <li className="w-[0.063rem] h-[1.688rem] bg-[#8A8A8A] " />
          <img
            clasName="h-3.5 w-[0.5625rem] ml-[16.31] "
            src={Wishlist}
            alt="Wishlist"
          />
          <li className="flex gap-[2.5rem] ">Style list </li>
          <li>More</li>
          <img
            clasName="h-3.5 w-[0.5625rem] mt-[9.19rem] mr-[9.09rem]"
            src={Arrowdown}
            alt="arrowdownlogo"
          />
        </ul>
      </div>
    </main>
  );
}

export default HeaderAfterLogin;
