
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects/Projects";
import Sectors from "../components/Sectors/Sectors";
import Slider from "../components/Slider/Slider";

const Home = () =>{
    return(
        <div>
            <Navbar/>
            <Slider/>
            <Sectors/>
            <Projects/>
            <Footer/>
        </div>
    );
}

export default Home;