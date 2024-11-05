import React, { useEffect } from "react";
import "./lessons.css";
// ? import react icons
import { PiNotebook } from "react-icons/pi";
import { IoMdTime } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
// ? img import
import img from "../assets/IT TAT.jpg";
// ? import aos
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@mui/material";
// import { useEffect } from "react";
const Lesson = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="courses" data-aos="zoom-in-up">
      <h1>courses</h1>

      <div className="lesson_div_2">
        <h3>Standart Courses</h3>

        {/* ? cart 1 */}

        {[1, 2].map((item) => {
          return (
           <div>
             <div className="card_1">
              <div className="dis">
                <h2>Standard courses</h2> <span>30%</span>
              </div>
              <p className="dis_gap">
                <PiNotebook />
                11 ta kurslar mavjud
              </p>
              <p className="dis_gap">
                <IoMdTime />
                oy
              </p>
              <div className="img_bar">
                <img src={img} alt="sdfb" />
                <span>Shaxzod Muradov</span>
              </div>
              <div className="button_bar">
                <h1>300 000 so`m</h1>
                <Button variant="contained">
                  Sign Up <FaArrowRightLong />
                </Button>
              </div>
            </div>
            <h2>Intensive Courses</h2>
           </div>
          );
        })}
        
      </div>
      
    </div>
  );
};

export default Lesson;
