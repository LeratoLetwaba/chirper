
//import "./profile.scss"
import Navbar from "../Components/Navbar/Navbar";
import LeftBar from "../Components/Leftbar/Leftbar";
import RightBar from "../Components/Rightbar/Rightbar";
import { useContext } from "react";
import { DarkModeContext } from "../Context/darkModeContext";
import {
    Outlet,
  } from "react-router-dom";

const Feed = () => {
    const { darkMode } = useContext(DarkModeContext);
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div
          style={{
            display: "flex",
            marginTop: "0px",
            height: "100vh",
            backgroundColor: darkMode?"#191617":"#fafafa",
          }}
        >
          <LeftBar />
          <div style={{ flex: 6, marginLeft: "270px", /*display:"flex", flexDirection:"row" */}}>
            <Outlet />
          </div>
         <RightBar />{/**/}
        </div>
      </div>
    );
  };

export default Feed