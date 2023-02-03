import { Link, animateScroll as scroll } from "react-scroll";

const PhoneMenu=()=>{
    return(<ul className="md:hidden w-full text-right bg-white  absolute top-24 right-0">
          <li className="border p-4">
        <Link 
            to="/"  
            activeClass="active"
            spy={true} smooth={true} 
            offset={-70} duration={500}
            className=" cursor-pointer text-base font-medium text-gray-600 hover:text-cyan-500  duration-400">
        Home
     </Link>
     </li>
           <li className="border p-4">
        <Link 
            to="About"  
            activeClass="active"
            spy={true} smooth={true} 
            offset={-70} duration={500}
            className="cursor-pointer text-base font-medium text-gray-600 hover:text-cyan-500  duration-400">
        About
     </Link>
     </li>
           <li className="border p-4">
        <Link 
            to="Projects"  
            activeClass="active"
            spy={true} smooth={true} 
            offset={-70} duration={500}
            className="cursor-pointer text-base font-medium text-gray-600 hover:text-cyan-500  duration-400">
        Projects
     </Link>
     </li>
           <li className="border p-4">
        <Link 
            to="Technology"  
            activeClass="active"
            spy={true} smooth={true} 
            offset={-70} duration={500}
            className="cursor-pointer text-base font-medium text-gray-600 hover:text-cyan-500  duration-400">
        Technology
     </Link>
     </li>

     <li className="border p-4">
        <Link 
            to="ContactMe"  
            activeClass="active"
            spy={true} smooth={true} 
            offset={-70} duration={500}
            className="cursor-pointer text-base font-medium text-gray-600 hover:text-cyan-500  duration-400">
        Contact Me
     </Link>
     </li>
    </ul>);
}

export default PhoneMenu;