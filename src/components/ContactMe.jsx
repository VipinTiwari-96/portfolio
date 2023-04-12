import React from 'react'
import { FiMail} from 'react-icons/fi';
import {ImWhatsapp} from "react-icons/im";
import {FaLinkedin} from "react-icons/fa";

const ContactMe = () => {
  return (
    <div id="ContactMe" className="bg-gray-200 rounded-md max-w-4xl mx-auto mt-28 p-4">
    <h4 className="border border-cyan-500 rounded-md max-w-max mx-auto text-center text-2xl font-bold md:font-bold px-2">
    Contact Me</h4>

   <div className="borderborder-black max-w-sm sm:max-w-xl mx-auto mt-4 p-6">
     
     <div className='flex justify-around'>
      <FiMail className="text-3xl md:text-5xl"/> <div className='grow text-center md:text-xl'>vipinvipin1997vipin@gmail.com</div>
     </div>
      
      <div className='flex justify-around my-4'>
         <ImWhatsapp className="text-3xl md:text-5xl"/> <div className='grow text-center md:text-xl'>+91 9634963546</div>
      </div>
     
     <div className='flex justify-around '>
      <FaLinkedin className="text-3xl md:text-5xl"/> <div className='grow text-center  md:text-xl'><a href="https://www.linkedin.com/in/tiwari-vipin/" target="_blank" className='hover:underline'> linkedin.com/in/tiwari-vipin/</a></div>
     </div>
    
       {/* <BiMessageRoundedDots className="text-6xl md:text-7xl text-blue-500"/>

      <BiMessageRoundedDots className="text-6xl md:text-7xl text-yellow-500"/> */}
    
</div>
    </div>
  )
}

export default ContactMe
