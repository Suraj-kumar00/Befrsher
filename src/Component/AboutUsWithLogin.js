import React from "react";
import AboutUsWithLogin1 from "../Images/AboutUsWithLogin1.png";
import AboutUsWithLogin2 from "../Images/AboutUsWithLogin2.png";
import AboutUsWithLogin3 from "../Images/AboutUsWithLogin3.png";

function AboutUsWithLogin() {
  return (
    <section className="mx-auto max-w-screen-xl">
      <div className=" relative   w-[59.438rem] m-auto  mt-[1.88rem]">
        <img
          className=" w-full flex flex-wrap items-center mb-[3.75rem]"
          src={AboutUsWithLogin1}
          alt="First Term and Conditions Image"
        />
      </div>
      <div className="m-auto w-[31.219rem] ">
        <h1 className=" flex justify-center text-center text-[1.313rem] text-black  text-xl font-semibold leading-tight tracking-tighter  mb-[1.88rem]">
          A Glimpse of Us
        </h1>
        <img
          className=" flex flex-wrap items-center mb-[1.88rem]"
          src={AboutUsWithLogin2}
          alt="Second Image Of Term Condition"
        />
      </div>
      <div>
        <p className="flex justify-center text-gray-600 font-normal  mb-[1.88rem] ml-[17.688rem] mr-[17.375rem] text-justify leading-relaxed tracking-tighter">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
          vestibulum ex. Pellentesque magna erat, imperdiet id venenatis quis,
          ullamcorper non eros. Aliquam convallis ex nisl. Sed volutpat odio
          eget dui lacinia, eget imperdiet purus ultricies. Vestibulum hendrerit
          convallis fringilla. Donec ultrices fringilla eros rhoncus vehicula.
          Proin ac risus odio. Nullam sit amet dolor est. Phasellus scelerisque
          nunc eget elit ullamcorper aliquam. Proin quis nisl placerat, vehicula
          turpis sed, placerat libero. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Vestibulum pretium ac
          nisl quis mattis. Sed et erat libero.
        </p>
      </div>
      <div>
        <h1 className=" flex justify-center text-center text-[1.3125rem] mb-[1.875rem]  text-black  text-base font-medium leading-relaxed tracking-tighter uppercase">
          Our Future Picture
        </h1>

        <div className="m-auto w-[31.219rem] ">
          <img
            className=" flex flex-wrap items-center mb-[1.88rem]"
            src={AboutUsWithLogin3}
            alt="Second Image Of Term Condition"
          />
        </div>

        <p className="flex justify-center  text-gray-600 font-normal mb-[3.75rem]  text-justify ml-[17.688rem] mr-[17.375rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
          vestibulum ex. Pellentesque magna erat, imperdiet id venenatis quis,
          ullamcorper non eros. Aliquam convallis ex nisl. Sed volutpat odio
          eget dui lacinia, eget imperdiet purus ultricies. Vestibulum hendrerit
          convallis fringilla. Donec ultrices fringilla eros rhoncus vehicula.
          Proin ac risus odio. Nullam sit amet dolor est. Phasellus scelerisque
          nunc eget elit ullamcorper aliquam. Proin quis nisl placerat, vehicula
          turpis sed, placerat libero. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Vestibulum pretium ac
          nisl quis mattis. Sed et erat libero.
        </p>
      </div>
    </section>
  );
}

export default AboutUsWithLogin;
