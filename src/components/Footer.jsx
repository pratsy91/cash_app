import React from "react";
import FooterBox from "./FooterBox";
import apple from "../images/Vector.svg";
import google from "../images/google.svg";
import tweet from "../images/tweet.svg";
import insta from "../images/insta.svg";

function Footer({ color }) {
  return (
    <footer
      className="bp:gap-1 bp:px-12  absolute bp:bottom-1 bottom-3 
    bp:flex-row flex flex-col justify-between items-center bp:p-1 px-20 gap-5 overflow-x-hidden"
    >
      <div className="flex justify-center items-center bp:gap-1 gap-4 order-10 bp:-order-1">
        <FooterBox image={apple} text="APP STORE" />
        <FooterBox image={google} text="GOOGLE PLAY" />
      </div>
      <div className="-order-1 bp:order-none flex justify-center">
        <p className="text-white  w-3/5 pb-4 text-justify hidden bp:flex">
          Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See
          our BrokerCheck. Investing involves risk; you may lose money. Bitcoin
          trading offered by Cash App. Cash App Investing does not trade bitcoin
          and Cash App is not a member of FINRA or SIPC. Cash App facilitates
          banking services through Sutton Bank and Lincoln Savings Bank, Members
          FDIC.
        </p>
      </div>
      <div className="flex justify-between items-center bp:gap-1 gap-10">
        <img src={tweet} alt="Twitter" className="w-5"></img>
        <img src={insta} alt="Instagram" className="w-5"></img>
      </div>
    </footer>
    // <footer className="px-16 gap-12 absolute -bottom-8 flex justify-between items-center">
    //   <div className="flex justify-between items-center gap-10">
    //     <FooterBox image={apple} text="APP STORE" />
    //     <FooterBox image={google} text="GOOGLE PLAY" />
    //   </div>
    //   <div>
    //     <p className="text-white  w-4/5 ms-auto pb-8">
    //       Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See
    //       our BrokerCheck. Investing involves risk; you may lose money. Bitcoin
    //       trading offered by Cash App. Cash App Investing does not trade bitcoin
    //       and Cash App is not a member of FINRA or SIPC. Cash App facilitates
    //       banking services through Sutton Bank and Lincoln Savings Bank, Members
    //       FDIC.
    //     </p>
    //   </div>
    //   <div className="flex justify-between items-center gap-10">
    //     <img src={tweet} alt="Twitter" className="w-32"></img>
    //     <img src={insta} alt="Instagram" className="w-32"></img>
    //   </div>
    // </footer>
  );
}

export default Footer;
