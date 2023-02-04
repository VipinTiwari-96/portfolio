import Header from "./components/Header";
import Technology from "./components/Technology";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ContactMe from "./components/ContactMe";

function App() {

  return (
 <>
 <Navbar/>
 {/* <div className="bg-[url('https://i.ibb.co/ZVxktMz/nasa-Q1p7bh3-SHj8-unsplash.jpg')] bg-no-repeat bg-cover px-2"> */}
      <Header />
       {/* <About /> */}
       <div className=" pt-16 px-2">
      <Technology />
      <Projects  />
      <ContactMe />
     </div>

 <Footer/>
 {/* </div> */}
 </>
  )
}

export default App
