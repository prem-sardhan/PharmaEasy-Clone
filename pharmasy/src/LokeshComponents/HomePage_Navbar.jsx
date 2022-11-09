import { useState } from "react";
import logo from "../Lokesh_Home_Image/logo.jpeg";

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
                    <div>Medicine</div>
                    <div>Lab Tests</div>
                    <div>Healthcare</div>
                    <div>Health Blogs</div>
                    <div>PLUS</div>
                    <div>Offers</div>
                    <div>Surgeries</div>
                    <div>Value Store</div>
                </div>
            </div>
            <div>
                <div className="lokesh_home_nav_second-section">
                    <div>Navigate to</div>
                    <div>Categories</div>
                    <div>Deals of the day</div>
                    <div>Featured Brands</div>
                    <div>Lab Tests by Concern</div>
                    <div></div>
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