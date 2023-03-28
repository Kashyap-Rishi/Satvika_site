import { useRef } from "react";
import { BsThreeDotsVertical, BsSearch } from "react-icons/bs";
import {  FaTimes } from "react-icons/fa";
import "../../Styles/main.css";
import Carousel from '../Carousel/Carousel';


function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <>
        <header>
            <h3>SATVIKA</h3>
            <nav ref={navRef}>
        
                <a href="/#">Home</a>
                <a href="/#">About Us</a>
                <a href="/#">Portfolio</a>
                <a href="/#">Active Project</a>
                <a href="/#">Services</a>
                <a href="/#">Latest News</a>
                <a  href="/#">Tools</a>
               
                <button
                 className="contact--us">Contact</button>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            
            </nav>
            <button
            className="nav-search nav-close-btn"
            onClick={showNavbar}
            >
            <BsSearch/>
        </button>
            <button
            
                className="nav-btn"
                onClick={showNavbar}>
                
                <BsThreeDotsVertical />
            </button>
        </header>
        <div className="hide-carousel">
        <Carousel/>
        </div>
        </>
    );
}

export default Navbar;
