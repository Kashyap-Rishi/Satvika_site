
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects/Projects";
import Sectors from "../components/Sectors/Sectors";
import Slider from "../components/Slider/Slider";
import Works from "../components/Works/Works";

const Home = () =>{
    return(
        <div>
            <Navbar/>
            <Works/>
            <Slider/>
            
            <Sectors/>
            <Projects/>
            <Footer/>
        </div>
    );
}

export default Home;