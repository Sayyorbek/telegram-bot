import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import TAT from "./assets/tat_logo.png";
import Home from "./components/home/Home";
import Lesson from "./lessons/Lesson";
import AboutUs from "./about/AboutUs";
import Ar from "./Ar/Ar";
import ItTat from "./IT_TAT.jsx/ItTat";
import Location from "./location/Location";
import Result from "./result/Result";
import people from "./assets/gif.gif" 
import Button from '@mui/material/Button';
// ? import aos 
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// ? loading
// import { Commet } from "react-loading-indicators";


function App() {
  let navigate = useNavigate();

  function homeFunc() {
    navigate("/home");
  }

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      {/* <Commet color="#060a90" size="medium" text="" textColor="" /> */}
      <Routes>
        <Route
          path="/"
          element={
            <div  data-aos="zoom-in" className="content">
              <div className="head">
                <h1>Welcome !</h1>
                <img className="img1" src={TAT} alt="" /><br />
              <img className="img2" src={people} alt="people" /><br />
                <Button onClick={homeFunc} variant="contained">Let`s start</Button>
              </div>
            </div>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/Ar" element={<Ar />} />
        <Route path="/ItTat" element={<ItTat />}/>
        <Route path="/Location" element={<Location/>}/>
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
