import "./navbar.scss";
import logo from "../../../images/bird-04.png";
import { useContext, useState, useEffect } from "react";
import { DarkModeContext } from "../../Context/darkModeContext";
import logoWhite from "../../../images/bird-05.png";
//import logoIcon from "../../../images/bird-03.png";

import { Link } from "react-router-dom";

const Navbar = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [isUserVisible, setUserVisible] = useState("show");
  const [isVisible, setVisible] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 639px)');

    // Initial check
    setIsSmallScreen(mediaQuery.matches);

    // Update the state when the screen size changes
    const handleResize = () => {
      setIsSmallScreen(mediaQuery.matches);
    };

    // Add event listener for window resize
    mediaQuery.addEventListener('change', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  const handleSearchHover = () => {
    setUserVisible("Notshow");
    setVisible(true)
  };

  const handleSearchLeave = () => {
    setUserVisible("show");
    setVisible(false)
  };

  
  const searchStyle = {
    transition: isVisible ? 'width .0s ease' : 'width 0.4s ease',
  };

  

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

       

        <div className="search"  onMouseEnter={handleSearchHover} onMouseLeave={handleSearchLeave} style={searchStyle}>
          <span className="material-symbols-rounded Nav-Icon">search</span>
          <input className="searchInput" type="text" placeholder="Search" />
        </div>
      </div>

       {isUserVisible && (
        <div className={` ${isSmallScreen ? isUserVisible : ''}`}>
      <div className="right">
      

        <div className="user" >
          <span className="userName" >Lerato Letwaba</span>
          <img className="avatar"
            src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?cs=srgb&dl=pexels-craig-adderley-1563356.jpg&fm=jpg"
            alt="avatar"
          />
        </div>


        <span className="material-symbols-rounded Nav-Icon pro">home</span>

        <span className="material-symbols-rounded Nav-Icon notification">notifications</span>

       
        
     
    
        <span className="material-symbols-rounded Nav-Icon menu">menu</span>

        </div>
      
      </div>
  )}

    </div>
  );
};

export default Navbar;
