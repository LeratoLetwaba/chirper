import "./navbar.scss";
import logo from "../../../images/bird-04.png";
import { useContext } from "react";
import { DarkModeContext } from "../../Context/darkModeContext";
import logoWhite from "../../../images/bird-05.png";

import { Link } from "react-router-dom";

const Navbar = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="left">
     
        {darkMode ? (
          <>
            <Link to="/">
              <img src={logoWhite} alt="Logo" width="100px" />
            </Link>
          </>
        ) : (
          <>
            <Link to="/">
              <img src={logo} alt="Logo" width="100px" />
            </Link>
          </>
        )}

        {/**   <span class="material-symbols-outlined">
tag
</span>
        

       <span class="material-symbols-outlined">nightlight</span> */}

        <div className="search">
          <span className="material-symbols-rounded Nav-Icon">search</span>
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="right">
        {/* <span class="material-symbols-outlined">
face
</span>
*/}

        <div className="user">
          <span>Lerato Letwaba</span>
          <img
            src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?cs=srgb&dl=pexels-craig-adderley-1563356.jpg&fm=jpg"
            alt="avatar"
          />
        </div>

        <span className="material-symbols-rounded Nav-Icon">home</span>

        <span className="material-symbols-rounded Nav-Icon">notifications</span>

        <span className="material-symbols-rounded Nav-Icon">menu</span>
      </div>
    </div>
  );
};

export default Navbar;
