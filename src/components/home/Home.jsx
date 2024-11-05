import React from "react";
import "./home.css";
// ? react icons
import { IoAlertCircleSharp } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { IoCube } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { PiFilesThin } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
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
        
      </div>


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
