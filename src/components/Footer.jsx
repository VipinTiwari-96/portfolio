import  React from "react";
import {BsInstagram, BsGithub} from "react-icons/bs";
import {FiTwitter} from "react-icons/fi";
import {GrLinkedin} from "react-icons/gr";

const Footer=()=>{
    return (
    <div className="text-white bg-slate-900 mt-28 sm:mt-32 md:mt-36 py-8">
      
    <div className="m-auto w-2/3 ">
      <div className=" flex justify-center space-x-6 sm:space-x-8 md:space-x-10 ">
       <a href="https://www.linkedin.com/in/tiwari-vipin/" target="_blank"> <GrLinkedin className="w-6 sm:w-8 md:w-10 h-full text-white hover:scale-110 duration-100 ease-linear"/></a>
       <a href="#" target="_blank"> <FiTwitter  className="w-6 sm:w-8 md:w-10 h-full text-white hover:scale-110 duration-100 ease-linear	"/></a>
        <a href="https://www.instagram.com/be_vipin_tiwari/ " target="_blank"><BsInstagram  className="w-6 sm:w-8 md:w-10 h-full text-white hover:scale-110 duration-100 ease-linear"/></a>
        <a href="https://github.com/VipinTiwari-96" target="_blank"><BsGithub  className="w-6 sm:w-8 md:w-10 h-full text-white hover:scale-110 duration-100 ease-linear"/></a>

      </div>
       
     <h5 className=" text-center mt-4 sm:mt-6 text-xs md:text-sm">Copyright &#169; all rights reserved</h5>
   </div>
</div>
    );
}

export default Footer;