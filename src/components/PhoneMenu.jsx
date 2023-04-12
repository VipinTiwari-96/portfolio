import { Link, animateScroll as scroll } from "react-scroll";

const PhoneMenu=({hideMenuHandler, navSelect, setNavSelect})=>{
  
    return(<ul className="md:hidden w-full text-right bg-white  text-base font-medium text-gray-600 absolute top-24 right-0">
          <li className="border p-4">
        <Link 
            to="/"  
            activeClass="active"
            spy={true} smooth={true} 
            offset={-70} duration={500}
            onClick={()=>{hideMenuHandler();
                setNavSelect('/')}}
            className= {`cursor-pointer hover:text-cyan-500  duration-400
             ${navSelect=='/'? 'text-cyan-500': 'text-gray-600'}`}>
             Home
     </Link>
     </li>
           {/* <li className="border p-4">
        <Link 
            to="About"  
            activeClass="active"
            spy={true} smooth={true} 
            offset={-70} duration={500}
            className="cursor-pointer hover:text-cyan-500  duration-400">
        About
     </Link>
     </li> */}
           <li className="border p-4">
        <Link 
            to="Projects"  
            activeClass="active"
            spy={true} smooth={true} 
            offset={-70} duration={500}
            onClick={()=>{hideMenuHandler();
                setNavSelect('Projects')}}
                className= {`cursor-pointer hover:text-cyan-500  duration-400
                 ${navSelect=='Projects'? 'text-cyan-500': 'text-gray-600'}`}>
        Projects
     </Link>
     </li>
           <li className="border p-4">
        <Link 
            to="Technology"  
            activeClass="active"
            spy={true} smooth={true} 
            offset={-70} duration={500}
            onClick={()=>{hideMenuHandler();
                setNavSelect('Technology')}}
                className= {`cursor-pointer hover:text-cyan-500  duration-400
                ${navSelect=='Technology'? 'text-cyan-500': 'text-gray-600'}`}>
        Technology
     </Link>
     </li>

     <li className="border p-4">
        <Link 
            to="ContactMe"  
            activeClass="active"
            spy={true} smooth={true} 
            offset={-70} duration={500}
            onClick={()=>{hideMenuHandler();
                setNavSelect('ContactMe')}}
                className= {`cursor-pointer hover:text-cyan-500  duration-400
                ${navSelect=='ContactMe'? 'text-cyan-500': 'text-gray-600'}`}>
        Contact Me
     </Link>
     </li>
    </ul>);
}

export default PhoneMenu;