import  {useState} from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import PhoneMenu from "./PhoneMenu";
import {BiMenu} from "react-icons/bi";
import {ImCross} from "react-icons/im";

const Navbar=()=>{
   const [ isMenu, setIsMenu ] = useState(false);
   const [navSelect, setNavSelect]= useState('/');

   
   const showMenuHandler=()=>{
     setIsMenu(true);
   }

   const hideMenuHandler=()=>{
    setIsMenu(false);
   }
    
    return(<>
    <div className="bg-white h-full text-sm lg:text-base font-bold text-gray-600 flex justify-between items-center py-2 px-6 sticky top-0 z-10">
      <div className="flex items-center gap-4 ">
      <img src="https://i.postimg.cc/SKhrGnhk/IMG-20211017-203536-111.jpg" alt="me" className="w-20 h-20 rounded-full cursor-pointer" title="hey! don't click on me &#128513;" />
      <h2 title="yes! this is my name &#128512;	">Vipin Tiwari</h2>
      </div>
    <ul className="hidden md:flex justify-end items-center gap-x-8 h-full">
       <li>
        <Link 
            to="/"  
            activeClass="active"
            smooth={true} 
            offset={-70 } duration={500}
            className= {`cursor-pointer hover:text-cyan-500  duration-400 ${navSelect=='/'? 'text-cyan-500': 'text-gray-600'}`} onClick={()=>setNavSelect("/")}>
        Home
     </Link>
     </li>
           {/* <li>
        <Link 
            to="About"  
            activeClass="active"
            spy={true} smooth={true} 
            offset={-70} duration={500}
            className="cursor-pointer hover:text-cyan-500  duration-400">
        About
     </Link>
     </li> */}
          
           <li>
        <Link 
            to="Technology"  
            activeClass="active"
            spy={true} smooth={true} 
            offset={-150} duration={500}
            className= {`cursor-pointer hover:text-cyan-500  duration-400 ${navSelect=='Technology'?'text-cyan-500':'text-gray-600'}`} onClick={()=>setNavSelect("Technology")}>
        Technology
     </Link>
     </li>

     <li>
        <Link 
            to="Projects"  
            activeClass="active"
            spy={true} smooth={true} 
            offset={-150} duration={500}
            className= {`cursor-pointer hover:text-cyan-500  duration-400 ${navSelect== 'Projects'?'text-cyan-500':'text-gray-600'}`} onClick={()=>setNavSelect("Projects")}>
        Projects
     </Link>
     </li>
     
  <li>
        <Link 
            to="ContactMe"  
            activeClass="active"
            spy={true} smooth={true} 
            offset={-150} duration={500}
            className= {`cursor-pointer hover:text-cyan-500  duration-400 ${navSelect=='ContactMe'?'text-cyan-500':'text-gray-600'}`} onClick={()=>setNavSelect("ContactMe")}>
        Contact Me
     </Link>
     </li>
</ul>

      {isMenu ? <ImCross onClick={hideMenuHandler} className = "md:hidden font-light text-xl"/> :  <BiMenu className="md:hidden text-3xl " onClick={showMenuHandler}/>}
   {isMenu &&< PhoneMenu hideMenuHandler={hideMenuHandler} navSelect={navSelect} setNavSelect={setNavSelect}/>}

</div>
    </>);
}

export default Navbar;