import "./navbar.scss";
import logo from "../../../images/bird-04.png";
import { useContext, useState, useEffect } from "react";
import { DarkModeContext } from "../../Context/darkModeContext";
import logoWhite from "../../../images/bird-05.png";
import { MyContext } from "../../../context";
//import logoIcon from "../../../images/bird-03.png";

import { Link } from "react-router-dom";

const Navbar = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { updateRightBar } = useContext(MyContext);
  const [isUserVisible, setUserVisible] = useState("show");
  const [isVisible, setVisible] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showDepartments, setShowDepartments] = useState(false);

  let RightBarChangeHome = () => {
    updateRightBar("");
  };
  let RightBarChangeProfile = () => {
    updateRightBar("profile");
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");

    // Initial check
    setIsSmallScreen(mediaQuery.matches);

    // Update the state when the screen size changes
    const handleResize = () => {
      setIsSmallScreen(mediaQuery.matches);
    };

    // Add event listener for window resize
    mediaQuery.addEventListener("change", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const handleSearchHover = () => {
    setUserVisible("Notshow");
    setVisible(true);
  };

  const handleSearchLeave = () => {
    setUserVisible("show");
    setVisible(false);
  };

  const searchStyle = {
    transition: isVisible ? "width .0s ease" : "width 0.4s ease",
  };

  const notifications = [
    {
      id: 1,
      type: 'message',
      content: 'John Doe sent you a message',
      time: '5 min ago',
      read: false
    },
    {
      id: 2,
      type: 'like',
      content: 'Sarah liked your post',
      time: '2 hours ago',
      read: false
    },
    {
      id: 3,
      type: 'comment',
      content: 'Mike commented on your photo',
      time: '1 day ago',
      read: true
    }
  ];

  const departments = [
    {
      category: "Technology",
      departments: [
        { name: "Software Development", count: 45 },
        { name: "IT Support", count: 23 },
        { name: "Cybersecurity", count: 18 },
        { name: "Data Science", count: 32 }
      ]
    },
    {
      category: "Operations",
      departments: [
        { name: "Human Resources", count: 15 },
        { name: "Finance", count: 20 },
        { name: "Legal", count: 8 },
        { name: "Administration", count: 12 }
      ]
    },
    {
      category: "Creative",
      departments: [
        { name: "Marketing", count: 25 },
        { name: "Design", count: 18 },
        { name: "Content Creation", count: 14 },
        { name: "Brand Management", count: 9 }
      ]
    },
    {
      category: "Business",
      departments: [
        { name: "Sales", count: 30 },
        { name: "Business Development", count: 22 },
        { name: "Customer Service", count: 40 },
        { name: "Strategy", count: 15 }
      ]
    }
  ];

  return (
    <div className="navbar">
      <div className="left">
        {darkMode ? (
          <>
            <Link onClick={RightBarChangeHome} to="/">
              <img src={logoWhite} alt="Logo" width="100px" />
            </Link>
          </>
        ) : (
          <>
            <Link onClick={RightBarChangeHome} to="/">
              <img src={logo} alt="Logo" width="100px" />
            </Link>
          </>
        )}

        <div
          className="search"
          onMouseEnter={handleSearchHover}
          onMouseLeave={handleSearchLeave}
          style={searchStyle}
        >
          <span className="material-symbols-rounded Nav-Icon">search</span>
          <input className="searchInput" type="text" placeholder="Search" />
        </div>
      </div>

      {isUserVisible && (
        <div className={` ${isSmallScreen ? isUserVisible : ""}`}>
          <div className="right">
            <div className="user">
           
              <Link onClick={RightBarChangeProfile} to="/profile/1">
              <span className="userName">Lerato Letwaba</span>
              <img
                className="avatar"
                src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?cs=srgb&dl=pexels-craig-adderley-1563356.jpg&fm=jpg"
                alt="avatar"
              />
              </Link>
            </div>

            <Link onClick={RightBarChangeHome} to="/">
              <span className="material-symbols-rounded Nav-Icon pro">
                home
              </span>
            </Link>

            <div className="notification-wrapper">
              <span 
                className="material-symbols-rounded Nav-Icon notification"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                notifications
                {notifications.some(n => !n.read) && <span className="notification-badge"></span>}
              </span>
              
              {showNotifications && (
                <div className="notification-dropdown">
                  <div className="notification-header">
                    <h3>Notifications</h3>
                    <span className="material-symbols-rounded">settings</span>
                  </div>
                  
                  <div className="notification-list">
                    {notifications.map(notification => (
                      <div key={notification.id} className={`notification-item ${!notification.read ? 'unread' : ''}`}>
                        <span className="material-symbols-rounded notification-icon">
                          {notification.type === 'message' ? 'mail' : 
                           notification.type === 'like' ? 'favorite' : 'comment'}
                        </span>
                        <div className="notification-content">
                          <p>{notification.content}</p>
                          <span className="notification-time">{notification.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="notification-footer">
                    <button>Mark all as read</button>
                    <button>See all notifications</button>
                  </div>
                </div>
              )}
            </div>

            <div className="menu-wrapper">
              <span 
                className="material-symbols-rounded Nav-Icon menu"
                onClick={() => setShowDepartments(!showDepartments)}
              >
                menu
              </span>

              {showDepartments && (
                <div className="departments-dropdown">
                  <div className="departments-header">
                    <h2>Company Departments</h2>
                    <span 
                      className="material-symbols-rounded close-icon"
                      onClick={() => setShowDepartments(false)}
                    >
                      close
                    </span>
                  </div>

                  <div className="departments-grid">
                    {departments.map((category, index) => (
                      <div key={index} className="department-category">
                        <h3>{category.category}</h3>
                        <div className="department-list">
                          {category.departments.map((dept, deptIndex) => (
                            <div key={deptIndex} className="department-item">
                              <div className="department-info">
                                <span className="material-symbols-rounded">groups</span>
                                <div>
                                  <h4>{dept.name}</h4>
                                  <span className="employee-count">{dept.count} employees</span>
                                </div>
                              </div>
                              <span className="material-symbols-rounded arrow">
                                arrow_forward
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
