import Header from "./components/Header";
import Technology from "./components/Technology";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ContactMe from "./components/ContactMe";

function App() {

  return (<>
 <Navbar/>
      <Header />
       {/* <About /> */}
       <div className=" pt-16 px-2">
        <Technology />
        <Projects  />
        <ContactMe />
     </div>

  <Footer/>
 </>)
}

export default App
