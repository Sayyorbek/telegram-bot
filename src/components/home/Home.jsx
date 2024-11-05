import React from "react";
import "./home.css";
// ? react icons
import { IoAlertCircleSharp } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { IoCube } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { PiFilesThin } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
// ? import img
import about_img from "../../assets/about_img.png"
const Home = () => {
  let navigate = useNavigate();

  function lessonFunc() {
    navigate("/lesson");
  }
  function AboutUsFunc() {
    navigate("/AboutUs");
  }
  function ArFunc() {
    navigate("/Ar");
  }
  // function ItTatFunc() {
  //   navigate("/ItTat")
  // }
  function LocationFunc() {
    navigate("/Location");
  }
  function ResultFunc() {
    navigate("/Result");
  }
  return (
    <div className="container">

      <div className="menu">
      <h4>Hello!</h4><br />
      <h2>Sayyorbek</h2>
    <div className="cart_1">
    <div className="cart_dis">
    <h3>About Us</h3><IoIosArrowForward />
      </div> 
    <img src={about_img} alt="ghjk" />
    </div>
    <div className="cart_2"></div>
    <div className="cart_3"></div>
    <div className="cart_4"></div>
    <div className="cart_5"></div>
    <div className="cart_6"></div>
      </div>

{/* ? keraksz */}
      <div className="buttons_bar">
        <button onClick={lessonFunc}>
          <GoHomeFill />
          <br />
          Courses
        </button>
        <br />
        <button onClick={ArFunc}>
          <IoCube />
          <br />
          AR Link
        </button>
        <br />
        <button onClick={ResultFunc}>
          <PiFilesThin />
          <br /> Result
        </button>
        <button onClick={LocationFunc}>
          <CiLocationOn />
          <br /> Location
        </button>
        <br />
        <button onClick={AboutUsFunc}>
          {" "}
          <IoAlertCircleSharp />
          <br />
          About Us
        </button>
        <br />
      </div>
    </div>
  );
};

export default Home;
