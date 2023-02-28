import  React from "react";
import {ImHtmlFive2} from 'react-icons/im';
import {FaCss3Alt} from 'react-icons/fa';
import {SiTypescript,SiJavascript,SiTailwindcss, SiRedux} from 'react-icons/si';
import {FaReact} from 'react-icons/fa';


const Technology=()=>{
    // max-w-sm sm:max-w-xl
    return(<div id="Technology" className="p-4 pb-12 bg-gray-200 rounded-md max-w-5xl mx-auto ">
    <h4 className="border border-cyan-500 rounded-md max-w-max mx-auto text-center text-2xl font-bold  px-2">
     Niche technologies</h4>

<div className="  grid sm:grid-cols-2 gap-8 my-8">
   <div  className="grid grid-cols-2 sm:grid-cols-3  justify-items-center gap-y-8 ">

      <ImHtmlFive2 className="text-6xl md:text-7xl" title="HTML"/>
    
       <FaCss3Alt className="text-6xl md:text-7xl text-blue-500" title="CSS"/>

      <SiJavascript className="text-6xl md:text-7xl text-yellow-500" title="Java Script"/>
   
      <SiTypescript className="text-6xl md:text-7xl text-blue-500" title="Type Script"/>

      <FaReact className="text-6xl md:text-7xl text-sky-500" title="React"/>

      <SiTailwindcss className="text-6xl md:text-7xl text-green-600" title="Tailwind CSS"/>

      <SiRedux className="text-6xl md:text-7xl text-violet-600" title="Redux"/>
</div>
  <div className=" grid grid-cols-3 gap-4">
     <span className="bg-white rounded flex items-center justify-center text-gray-500 font-bold">HTML</span>
     <span className="bg-white rounded flex items-center justify-center  text-gray-500 font-bold">CSS</span>
     <span className="bg-white rounded flex items-center justify-center text-gray-500 font-bold">JavaScript</span>
     <span className="bg-white rounded flex items-center justify-center  text-gray-500 font-bold">TypeScript</span>
     <span className="bg-white rounded flex items-center justify-center  text-gray-500 font-bold">React</span>
     <span className="bg-white rounded flex items-center justify-center  text-gray-500 font-bold">Tailwind</span>
     <span className="bg-white rounded flex items-center justify-center  text-gray-500 font-bold">Redux</span>
  </div>
    </div>
</div>);
}

export default Technology;