import  React from "react";
import {GrLinkedinOption, GrTwitter} from "react-icons/gr";
import {BsGithub, BsInstagram} from "react-icons/bs";

const Header=()=>{
    //  flex flex-col items-center px-6 sm:flex-row-reverse sm:justify-center py-20
    // https://i.ibb.co/DY85PRW/david-pisnoy-Ri-GGe25-WUw4-unsplash.jpg
    return(<>
    <div id="/" className="bg-[url('https://i.ibb.co/DL7Y1b5/wesley-tingey-AZt-MXhe-Xn-Wc-unsplash.jpg')] font-semibold text-slate-200	flex items-center py-10 lg:py-24">
        <div className=" border rounded-md hidden lg:flex flex-col ">
            <div className="border w-12 h-10 flex items-center justify-center ">
                <a href="https://www.linkedin.com/in/tiwari-vipin/"target="_blank">
                    <GrLinkedinOption className="text-2xl text-gray-200 hover:text-white"/>
                    </a>
            </div>
            <div className="border w-12 h-10 flex items-center justify-center">
                <a href="https://github.com/VipinTiwari-96" target="_blank">
                    <BsGithub className="text-2xl text-gray-200 hover:text-white"/>
                    </a>
            </div>
            <div className="border w-12 h-10 flex items-center justify-center">
                <a href="#" target="_blank">
                    <GrTwitter className="text-2xl text-gray-200 hover:text-white"/>
                    </a>
            </div>
            <div className="border w-12 h-10 flex items-center justify-center">
                <a href="https://www.instagram.com/be_vipin_tiwari/ " target="_blank">
                    <BsInstagram className="text-2xl text-gray-200 hover:text-white"/>
                    </a>
            </div>
        </div>

      <div className="text-center sm:w-7/12 mx-auto px-6">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide">Hey! I'm <span className="text-white"> Vipin Tiwari,<br></br> React Developer</span></h2>
    
        <p className="md:text-lg lg:text-2xl my-8 ">   
           By going through an intense  <span className="font-semibold text-white">web development program </span>of 6 months run by CodeYogi, I’m a software engineer with good command in <span className="font-semibold text-white">HTML, CSS and JavaScript </span>along with their useful and on-demand libraries like react and tailwind.
And also, I’m willingness to explore new technologies so it would be easy to make a complex, responsive and interactive  website in an easy and understanding way.

        </p>
        <button className="bg-gray-200 text-gray-600 font-bold px-3 py-1 sm:px-4 sm:py-2 rounded sm:text-lg hover:bg-white
        duration-200 ">Download Resume</button>
</div>  
    </div>
    </>);
}

export default Header;

