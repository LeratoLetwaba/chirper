import "./HrLeftbar.scss";
import { useContext } from "react";
import { DarkModeContext } from "../../../Context/darkModeContext"

const HrLeftbar = () => {
    const { toggle, darkMode } = useContext(DarkModeContext);
  return (
    <div className="leftbarHr">
      <span className="blanc"></span>
      <div className="contain">
        <div className="menu">
          <div className="items">
            <span className="material-symbols-rounded rightLink">dashboard</span>
           {/** */} <span className="linkName">Home</span>
          </div>
          <div className="items">
            <span className="material-symbols-rounded rightLink">person</span>
            <span className="linkName">Self Service</span>
          </div>
          <div className="items">
            <span className="material-symbols-rounded rightLink">event</span>
            <span className="linkName">Leave Tracker</span>
          </div>
          <div className="items">
            <span className="material-symbols-rounded rightLink">schedule</span>
            <span className="linkName">Attendance</span>
          </div>

          <div className="items">
            <span className="material-symbols-rounded rightLink">event_available</span>
            <span className="linkName">Performance</span>
          </div>

          <div className="items">
            <span className="material-symbols-rounded rightLink">trophy</span>
            <span className="linkName">Files</span>
          </div>

          
        </div>

        <hr className="hrColor" />

        <div className="menu">
           {/**  <span className="MemuTag">Setting</span>*/}
          <div className="items" style={{paddingLeft:"10px"}}>

            {darkMode ? <span className="Icon-Button"  onClick={toggle}>
          <span className="material-symbols-rounded">
nightlight
</span>
<span className="linkName">Dark Mode</span></span> : <span className="Icon-Button"  onClick={toggle}>
          <span className="material-symbols-rounded">
wb_sunny
</span>
<span className="linkName">Light Mode</span></span>}
            


          </div>
          <div className="items" style={{paddingLeft:"10px"}}>
          <span className="material-symbols-rounded">
manage_accounts
</span>
            <span className="linkName">Manage Account</span>
          </div>


          <div className="items" style={{paddingLeft:"10px"}}>
          <span className="material-symbols-rounded">
more
</span>
            <span className="linkName">more</span>
          </div>

       
       

        </div>
        
      </div>
    </div>
  );
};

export default HrLeftbar;
