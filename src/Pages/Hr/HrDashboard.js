import Navbar from "../Components/Navbar/Navbar";
import HrLeftbar from "./Components/Leftbar/HrLeftbar";
//import RightBar from "../Components/Rightbar/Rightbar";
import { useContext } from "react";
import { DarkModeContext } from "../Context/darkModeContext";
import { Outlet } from "react-router-dom";

const HrDashboard = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <Navbar />
      <div
        style={{
          display: "flex",
          marginTop: "0px",
          backgroundColor: darkMode ? "#191617" : "#fafafa",
        }}
      >
        {/* */}
        <HrLeftbar />
        <div style={{ flex: 6, marginLeft: "50px", marginTop: "90px" }}>
          <div className="container">
            <Outlet />
          </div>
        </div>
        {/*   <RightBar />*/}
      </div>
    </div>
  );
};

export default HrDashboard;
