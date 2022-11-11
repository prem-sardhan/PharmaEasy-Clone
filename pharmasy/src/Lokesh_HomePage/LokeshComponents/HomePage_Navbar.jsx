import { useState } from "react";
import logo from "../Lokesh_Home_Image/logo.jpeg";
import { Link } from "react-router-dom";
import "./Home_Styles/HomePage_Navbar.css";


const HomePage_Navbar = () => {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
    const [menu_class, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);
  
    const updateMenu = () => {
      if (!isMenuClicked) {
        setBurgerClass("burger-bar clicked");
        setMenuClass("menu visible");
      } else {
        setBurgerClass("burger-bar unclicked");
        setMenuClass("menu hidden");
      }
  
      setIsMenuClicked(!isMenuClicked);
    };
  
  
    return (
      <>
        <section className="lokesh_home_navbar">
            <div>
                <div className="lokesh_home_nav_first-section">
                    <Link to="/orderMed"><div>Medicine</div></Link>
                    <Link to="/labtest"><div>Lab Tests</div></Link>
                    <Link to="/healthcare"><div>Healthcare</div></Link>
                    <Link to="/healthcare"><div>Health Blogs</div></Link>
                    <Link to="/rtpcr"><div>PLUS</div></Link>
                    <Link to="/healthcare"><div>Offers</div></Link>
                    <Link to="/healthcare"><div>Surgeries</div></Link>
                    <Link to="/healthcare"><div>Value Store</div></Link>
                </div>
            </div>
            <div>
                <div className="lokesh_home_nav_second-section">
                <Link to="/healthcare"><div>Navigate to</div></Link>
                    <Link to="/healthcare"><div>Categories</div></Link>
                    <Link to="/healthcare"><div>Deals of the day</div></Link>
                    <Link to="/healthcare"><div>Featured Brands</div></Link>
                    <Link to="/healthcare"><div>Lab Tests by Concern</div></Link>
                </div>
            </div>
        </section>


{/* ------------------------------------------------------------------------------------------- */}


        <div className="mainNavbarBox" style={{ width: "100%", height: "100vh" }}>
            <div className="burgerNav">
                <div className="burger-menu" onClick={updateMenu}>
                <div className={burger_class}></div>
                <div className={burger_class}></div>
                <div className={burger_class}></div>
                </div>
                <div>
                <div className="navlogo">
                    <img src={logo} alt="logo" />
                </div>
                </div>
            </div>
  
            <div id="menu-class" style={{height: "100vh"}} className={menu_class}>
                
                <div className="navinside">
                    <div onClick={updateMenu}>
                        <a href="#">
                        Medicine
                        </a>
                    </div>
                    <div onClick={updateMenu}>
                        <a href="#">
                        Lab Tests
                        </a>
                    </div>
                    <div onClick={updateMenu}>
                        <a href="#skillsPageSection">
                        Healthcare
                        </a>
                    </div>
                    <div onClick={updateMenu}>
                        <a href="#projectsPageSection">
                        Health Blogs
                        </a>
                    </div>
                    <div onClick={updateMenu}>
                        <a href="#contactPageSection">
                        PLUS
                        </a>
                    </div>
                    <div onClick={updateMenu}>
                        <a href="#contactPageSection">
                        Offers
                        </a>
                    </div>
                    <div onClick={updateMenu}>
                        <a href="#contactPageSection">
                        Surgeries
                        </a>
                    </div>
                    <div onClick={updateMenu}>
                        <a href="#contactPageSection">
                        Surgeries
                        </a>
                    </div>
                </div>
                <div className="navinside1">
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <div onClick={updateMenu}>
                        <a href="#">
                        Medicine
                        </a>
                    </div>
                    <div onClick={updateMenu}>
                        <a href="#">
                        Lab Tests
                        </a>
                    </div>
                    <div onClick={updateMenu}>
                        <a href="#skillsPageSection">
                        Healthcare
                        </a>
                    </div>
                    <div onClick={updateMenu}>
                        <a href="#projectsPageSection">
                        Health Blogs
                        </a>
                    </div>
                    <div onClick={updateMenu}>
                        <a href="#contactPageSection">
                        PLUS
                        </a>
                    </div>
                    <div onClick={updateMenu}>
                        <a href="#contactPageSection">
                        Surgeries
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
  }

export {HomePage_Navbar};