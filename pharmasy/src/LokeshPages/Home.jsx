import { CarouselBox } from "../LokeshComponents/CarouselBox";
// import { Home_First_Section } from "../LokeshComponents/Home_First_Section";
import { FaLock } from "react-icons/fa";
import { ShopByConcernComponents } from "../LokeshComponents/ShopByConcernComponents";
import "./Home.css";
import "../LokeshComponents/HomePage_Navbar.css";
import { HomePage_Navbar } from "../LokeshComponents/HomePage_Navbar";

const Home = () => {
  return (
    <div className="Lokesh-Home-Container">
      <HomePage_Navbar />
      {/* -----------------------------------------Top_Section_start------------------------------------------ */}
      <section className="lokesh_home_top_section"></section>
      {/* -----------------------------------------Top_Section_end------------------------------------------ */}

      {/* -------------------------------------------Carousel_section_start------------------------------------------ */}
      <section className="lokesh_home_carousel">
        <CarouselBox />
      </section>
      {/* ----------------------------------------Carousel_section_end------------------------------------------ */}

      {/* ---------------------------------------Home_First_Section_Start-------------------------------------- */}
      <section className="lokesh_home_first_section">
        <p>discounts Just for You</p>
        <div className="lokesh_home_first-section-grid">
          <div>
            <div>
              <img
                src="https://cms-contents.pharmeasy.in/discount/c287851239f-25_off.jpg?dim=1440x0"
                alt=""
              />
            </div>
            <div>Flat 25% off on first 3 medicine orders.</div>
          </div>

          <div>
            <div>
              <img
                src="https://cms-contents.pharmeasy.in/discount/b1cafb3a0cf-flat_27_off.jpg?dim=1440x0"
                alt=""
              />
            </div>
            <div>Flat 27% off + up to Rs.1000 surprise cashback.</div>
          </div>

          <div>
            <div>
              <FaLock />
            </div>
            <div>Log in to view more discounts</div>
          </div>
        </div>
      </section>
      {/* ---------------------------------------Home_First_Section_end-------------------------------------- */}

      {/* ---------------------------------------Home_Second_Section_Start-------------------------------------- */}
      <section className="lokesh_home_second_section">
        <p>Previously Browsed Items</p>
        <div className="lokesh_home_second-section-reserved-div"></div>
      </section>
      {/* ---------------------------------------Home_Second_Section_end-------------------------------------- */}

      {/* ---------------------------------------Home_Third_Section_Start-------------------------------------- */}

      <section className="lokesh_home_third_section">
        <p>Previously Browsed Items</p>
        <div className="lokesh_home_third-section-reserved-div"></div>
      </section>
      {/* ---------------------------------------Home_Third_Section_end-------------------------------------- */}

      {/* ---------------------------------------Home_fourth_Section_Start-------------------------------------- */}
      <section className="lokesh_home_fourth_section">
        <div className="lokesh_home_fourth-section-Box-1">
          <div className="Home_part-1">
            <div>
              <img
                src="https://assets.pharmeasy.in/apothecary/images/rx_upload.svg?dim=1440x0"
                alt=""
              />
            </div>
            <div>
              <p>Order with Prescription</p>
              <p>Upload prescription and we will deliver your medicines</p>
              <button>Upload</button>
            </div>
          </div>
          <div className="Home_part-2">
            <div>
              <p>How does this work?</p>
            </div>
            <div>
              <p>
                <span>1</span> Upload a photo of your prescription
              </p>
              <p>
                <span>2</span> Add delivery address and place the order
              </p>
              <p>
                <span>3</span> We will call you to confirm the medicines
              </p>
              <p>
                <span>4</span> Now, sit back! your medicines will get delivered
                at your doorstep
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ---------------------------------------Home_fourth_Section_end-------------------------------------- */}

      {/* ---------------------------------------Lab Tests by Health Concern start------------------------------------ */}

      <section className="LabTestsbyHealthConcern">
        <div>
          <p>Lab Tests by Health Concern</p>
          <div>
            <p>Powered</p>
            <img src="https://assets.pharmeasy.in/apothecary/images/Thyrocare.webp?dim=1440x0" />
          </div>
          <div className="LabTestsbyHealthConcern_Container"></div>
        </div>
      </section>
      {/* ---------------------------------------Lab Tests by Health Concern end------------------------------------ */}

      {/* ---------------------------------------Shop by Concern start-------------------------------------- */}
      <section className="ShopByConcern">
        <ShopByConcernComponents />
      </section>
      {/* ---------------------------------------Shop by Concern end-------------------------------------- */}

      {/* ------------------------------------Frequently Booked Lab Tests start--------------------------------- */}
      <section className="FrequentlyBookedLabTests"></section>
      {/* ------------------------------------Frequently Booked Lab Tests end--------------------------------- */}

      {/* ---------------------------------------Unknown-section start------------------------------------ */}

      <section className="home_unknown_section">
        <div className="home_unknown_section-container">
          <div>
            <p>Simplifying</p>
            <p>Healthcare</p>
            <p>Impacting Lives</p>
            <p>Download the App for Free</p>
            <div className="home_unknown_section-Box">
              <div>
                <img
                  src="https://assets.pharmeasy.in/apothecary/images/googlePlay.svg?dim=360x0"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://assets.pharmeasy.in/apothecary/images/appStore.svg?dim=360x0"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { Home };
