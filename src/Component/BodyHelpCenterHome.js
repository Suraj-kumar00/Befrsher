import React from "react";
import HelpCenterHome from "../Images/HelpCenterHome.png";

function BodyHelpCenterHome() {
  return (
    <section>
      <div className="flex ">
        <img
          className=" mt-[1.88rem] w-[45.8125rem] h-[48.0625rem] "
          src={HelpCenterHome}
          alt="Help Center Image"
        />
        <div>
          <h1>More queries related to your experience</h1>
          <p>payment/Refund</p>
          <p>Offers / Discounts / Coupons</p>
          <p>Manage Your Account</p>
          <p>Other</p>
        </div>
      </div>
    </section>
  );
}

export default BodyHelpCenterHome;
