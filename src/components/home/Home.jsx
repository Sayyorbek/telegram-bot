import React from "react";
import "./home.css";
// ? xarita
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// ? react icons
import { IoAlertCircleSharp } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { IoCube } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { PiFilesThin } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
// ? import img
import about_img from "../../assets/about_img.png";
import courses_img from "../../assets/courses_img.png";
import arLink from "../../assets/arLink.png";
import { Button } from "@mui/material";

// ? funcs
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
    <div
    className="container"
    data-aos="fade-left"
    data-aos-anchor="#example-anchor"
    data-aos-offset="500"
    data-aos-duration="500"
    >
      {/* ? imgs texts */}

      <div className="menu">
        <h4>Hello!</h4>
        <br />
        <h2>Sayyorbek</h2>
        {/* ? about us */}
        <div className="cart_1 cart">
          <div className="cart_dis">
            <h3>About Us</h3>
            <IoIosArrowForward />
          </div>
          <img src={about_img} alt="ghjk" />
        </div>
        {/* ? courses */}
        <div className="cart_2 cart">
          <div className="cart_dis">
            <h3>Our Courses</h3>
            <IoIosArrowForward />
          </div>
          <img src={courses_img} alt="ghjk" />
        </div>
        {/* ? ar link */}
        <div className="cart_3 cart">
          <div className="cart_dis">
            <h3>Ar Link</h3>
            <IoIosArrowForward />
          </div>
          <img src={arLink} alt="ghjk" />
        </div>

        {/* ? location */}
        <div className="cart_4">

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.762151677482!2d66.92396777544492!3d39.67756460029653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d19d54b324835%3A0xdf389d78adb91db2!2sIT%20TAT!5e0!3m2!1sru!2s!4v1730894013647!5m2!1sru!2s" width={`100%`} height={`auto`} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" /> 


        </div>
        
      </div>

{/* /contact  */}
       <div className="cont">
       <div className="cart_5">
          <h3>Contact Us</h3>
          <p>Biz har doim sizning istaklaringizni qadirlaymiz.</p>
          {/* ? inp and select */}
          <form className="contact">
            {/* ? input */}
  <input
    type="text"
    id="fullname"
    name="fullname"
    placeholder="Full Name"
    required
  />
  <br /><br />

  <input
    type="tel"
    id="phone"
    name="phone"
    placeholder="Phone number"
    required
    pattern="[0-9]{9,13}" 
    title="Please enter a valid phone number"
  />
  <br /><br />
    {/* ? select */}
  <select id="course" name="course" required>
    <option value="" disabled selected>Choose a course</option>
    <option value="Frontend">Frontend</option>
    <option value="Backend">Backend</option>
    <option value="Foundation">Foundation</option>
    <option value="SMM">SMM</option>
    <option value="Robototexnika">Robototexnika</option>
    <option value="Android">Android</option>
    <option value="Graphic Design">Graphic Design</option>
    <option value="Computer Literacy">Computer Literacy</option>
    <option value="Computer Literacy Kids">Computer Literacy Kids</option>
  </select>
  <br /><br />
    {/*  click button */}
  <Button  type="submit" variant="contained">Send</Button>
</form>

        </div>
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
