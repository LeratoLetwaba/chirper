import "./leftbar.scss";
import { useContext } from "react";
import { DarkModeContext } from "../../Context/darkModeContext"
import { Link } from "react-router-dom";
import { MyContext } from "../../../context";

const Leftbar = () => {
    const { toggle, darkMode } = useContext(DarkModeContext);
    const { updateRightBar, RightBar } = useContext(MyContext);

    const active = "items active";
    const notActive = "items";

    let RightBarChangeMessage = () => {
      updateRightBar("message")
    }

    let RightBarChangeTrends = () => {
      updateRightBar("trend")
    }

  return (
    <div className="leftbar">
      <div className="contain">
        <div className="menu">
        <Link onClick={RightBarChangeTrends} to="/trends">
          <div className={RightBar === "trend" ? active : notActive}>
            <span className="material-symbols-rounded rightLink">tag</span>
            <span className="linkName">Trending</span>
          </div>
        </Link>
        <Link onClick={RightBarChangeMessage} to="/messages" >
          <div className={RightBar === "message" ? active : notActive}>
            <span className="material-symbols-rounded rightLink">mail</span>
            <span className="linkName">Messsages</span>
          </div>
          </Link>
          <div className="items">
            <span className="material-symbols-rounded rightLink">favorite</span>
            <span className="linkName">Saved</span>
          </div>
          <div className="items">
            <span className="material-symbols-rounded rightLink">group</span>
            <span className="linkName">Followers</span>
          </div>

          <div className="items">
            <span className="material-symbols-rounded rightLink">add_reaction</span>
            <span className="linkName">Following</span>
          </div>

          <div className="items">
            <span className="material-symbols-rounded rightLink">description</span>
            <span className="linkName">CV</span>
          </div>
        </div>

        <hr className="hrColor" />

        <div className="menu">
            <span className="MemuTag">Setting</span>
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
       

        </div>
        
      </div>
    </div>
  );
};

export default Leftbar;
