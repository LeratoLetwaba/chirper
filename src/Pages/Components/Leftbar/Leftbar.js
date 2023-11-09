import "./leftbar.scss";
import { useContext } from "react";
import { DarkModeContext } from "../../Context/darkModeContext"

const Leftbar = () => {
    const { toggle, darkMode } = useContext(DarkModeContext);
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="items">
            <span className="material-symbols-rounded">tag</span>
            <span>Trending</span>
          </div>
          <div className="items">
            <span className="material-symbols-rounded">mail</span>
            <span>Messsages</span>
          </div>
          <div className="items">
            <span className="material-symbols-rounded">favorite</span>
            <span>Saved</span>
          </div>
          <div className="items">
            <span className="material-symbols-rounded">group</span>
            <span>Followers</span>
          </div>

          <div className="items">
            <span className="material-symbols-rounded">add_reaction</span>
            <span>Following</span>
          </div>

          <div className="items">
            <span className="material-symbols-rounded">description</span>
            <span>CV</span>
          </div>
        </div>

        <hr />

        <div className="menu">
            <span className="MemuTag">Setting</span>
          <div className="items">

            {darkMode ? <span className="Icon-Button"  onClick={toggle}>
          <span className="material-symbols-rounded">
nightlight
</span>
<span>Dark Mode</span></span> : <span className="Icon-Button"  onClick={toggle}>
          <span className="material-symbols-rounded">
wb_sunny
</span>
<span>Light Mode</span></span>}
            


          </div>
          <div className="items">
          <span className="material-symbols-rounded">
manage_accounts
</span>
            <span>Manage Account</span>
          </div>
       

        </div>
        
      </div>
    </div>
  );
};

export default Leftbar;
