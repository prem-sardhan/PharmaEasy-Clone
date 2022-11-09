




import styles from "./navbar.module.css";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  InputRightElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  PinInput,
  PinInputField,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { ArrowDownIcon, SearchIcon } from "@chakra-ui/icons";
import DrawerLogin from "./DrawerLogin";


import SelectPin from "./selectPin";
import Select from "react-select";
import { useContext, useRef, useState } from "react";
import { TbDiscount2 } from "react-icons/tb";


import { HiShoppingCart } from "react-icons/hi";

import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../Context/AuthContext";
import { useEffect } from "react";

const options = [
  {
    value: "Dettol",
    label: "Dettol",
  },
  {
    value: "Evion 400mg Strip of 10 Capsules",
    label: "Evion 400mg Strip of 10 Capsules",
  },
  {
    value: "Pan 40mg Strip of 15 Tablets",
    label: "Pan 40mg Strip of 15 Tablets",
  },
  {
    value: "Pharmeasy Multivitamin",
    label: "Pharmeasy Multivitamin",
  },
  {
    value: "Ecosprin 75mg Strip Of 14 Tablets",
    label: "Ecosprin 75mg Strip Of 14 Tablets",
  },
  { value: "Pharmeasy Multivitamin", label: "Pharmeasy Multivitamin" },
  {
    value: "Grd Chocolate Whey Protein Refill Of 400 G",
    label: "Grd Chocolate Whey Protein Refill Of 400 G",
  },

  {
    value: "Evion 400mg Strip Of 10 Capsules",
    label: "Evion 400mg Strip Of 10 Capsules",
  },
  {
    value: "Neurobion Forte Tablet 30'S",
    label: "Neurobion Forte Tablet 30'S",
  },
  {
    value: "Supradyn Daily Multivitamin Tablets 15s",
    label: "Supradyn Daily Multivitamin Tablets 15s",
  },
  {
    value: "Pharmeasy Multivitamin",
    label: "Pharmeasy Multivitamin",
  },
  {
    value: "Calcimax Forte Plus Strip Of 30 Tablets",
    label: "Calcimax Forte Plus Strip Of 30 Tablets",
  },
  { value: "Pharmeasy Multivitamin", label: "Pharmeasy Multivitamin" },
  {
    value: "Ecosprin 75mg Strip Of 14 Tablets",
    label: "Ecosprin 75mg Strip Of 14 Tablets",
  },

  {
    value:
      "Liveasy Foods Healthy Seed Mix - Blend Of 6 Fibre Rich Healthy Seeds - 200 Gms",
    label:
      "Liveasy Foods Healthy Seed Mix - Blend Of 6 Fibre Rich Healthy Seeds - 200 Gms",
  },
  {
    value: "Lizol Floral Disinfectant Floor Cleaner Liquid Bottle Of 200 Ml",
    label: "Lizol Floral Disinfectant Floor Cleaner Liquid Bottle Of 200 Ml",
  },
  {
    value: "Harpic Lemon Bathroom Cleaner Bottle Of 500 Ml",
    label: "Harpic Lemon Bathroom Cleaner Bottle Of 500 Ml",
  },
  {
    value: "Domex Disinfectant Expert Toilet Cleaner - 500 Ml",
    label: "Domex Disinfectant Expert Toilet Cleaner - 500 Ml",
  },
  {
    value: "Luxor Nano Mobile Disinfectant Cleaner - 10ml On-The-Go",
    label: "Luxor Nano Mobile Disinfectant Cleaner - 10ml On-The-Go",
  },
  {
    value:
      "Tri-Activ Disinfectant Spray For Multi-Surfaces 70% Alcohol Based - 100ml",
    label:
      "Tri-Activ Disinfectant Spray For Multi-Surfaces 70% Alcohol Based - 100ml",
  },
  {
    value:
      "Ezee Bio-Degradable Large Garbage Bags (24 X 32 Inches) Packet Of 15",
    label:
      "Ezee Bio-Degradable Large Garbage Bags (24 X 32 Inches) Packet Of 15",
  },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    background: "#fff",
    borderColor: "#9e9e9e",
    minHeight: "30px",
    height: "3rem",
    boxShadow: state.isFocused ? null : null,
  }),

  valueContainer: (provided, state) => ({
    ...provided,
    height: "30px",
    padding: "0 6px",
  }),

  input: (provided, state) => ({
    ...provided,
    margin: "0px",
  }),
  indicatorSeparator: (state) => ({
    display: "none",
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    height: "3rem",
  }),
};
const Navbar = () => {
  const [val, setVal] = useState("");
 
  const btnRef = useRef();

  const value = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (values) => {
    setVal(values);
  };

  var details = val.value;

  useEffect(() => {
    if (details) {
      navigate(`/productdetails/${details}`);
    }
  }, [details]);

 
  return (
    <div className={styles.container}>
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        <img
          src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png"
          alt=""
        />
      </div>

      <div>
        <div>
          <InputGroup size="lg" width={"75%"}>
            <InputLeftAddon children={<SelectPin />} />

            <div
              style={{ width: "40rem", height: "3rem", objectFit: "contain" }}
            >
              <Select
                onChange={handleChange}
                placeholder="Search medicines/Healthcare products"
                svg=""
                options={options}
                color={"black"}
                styles={customStyles}
              />
            </div>
            <InputRightAddon children={<SearchIcon h={8} color="gray.500" />} />
          </InputGroup>
        </div>
        <div className={styles.tabContainer}>
          <div>
            <div>
              <Link to="/orderMed">Order Medicines</Link>
            </div>
            <div>
              <Link to="/healthcare">Healthcare Products</Link>
            </div>
            <div>
              <Link to="/labtest">Lab tests</Link>
            </div>
            <div>
              <Link to="/rtpcr">RTPCR</Link>
            </div>
          </div>

        
            <Flex>
              <TbDiscount2
                style={{ marginTop: "0.2rem", marginRight: "-9.9rem" }}
                size="23px"
              />
              <p style={{ color: "white",marginLeft:"9rem" }}>Offers</p>
            </Flex>

            
               <DrawerLogin />
         
          
          

            <Flex>
              <HiShoppingCart
                style={{ marginTop: "0.2rem", marginRight: "-0.8rem" }}
                size="23px"
              />
              <Link to="/cart">Cart</Link>
            </Flex>
         
        </div>
      </div>
    </div>
  );
};

export { Navbar };











