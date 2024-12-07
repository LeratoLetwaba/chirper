import "./rightbar.scss";
import {  useContext } from "react";
import { MyContext } from "../../../context";

const Rightbar = () => {
 // const queryParameters = new URLSearchParams(window.location.search)
 // const type = queryParameters.get("type")
 // const name = queryParameters.get("name")
 //const { pathname  } = window.location;

 const { RightBar } = useContext(MyContext);
 
  
  return (<>
   {RightBar === "" || RightBar === "saved" ?
   <>
    <div className="rightbar">
      <div className="contain">
        <div className="item">
          <span className="MemuTag">Communicated with Departments </span>
          
          <hr className="hrColor" />
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/19137816/pexels-photo-19137816/free-photo-of-road-crossing-a-snow-covered-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="avatar"
              />
              <span className="followName">Marketing</span>
            </div>
            <button>Email</button>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/13093467/pexels-photo-13093467.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="avatar"
              />
              <span className="followName">Sales</span>
            </div>
            <button>Email</button>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/18506230/pexels-photo-18506230/free-photo-of-a-hummingbird-sitting-on-a-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="avatar"
              />
              <span className="followName">IT</span>
            </div>
            <button>Email</button>
          </div>
        </div>



        
        <div className="item">
          <span className="MemuTag">Business Trends</span>
          <hr className="hrColor" />
          <div className="trend">
            <span>
              <strong>South Africa</strong>
              <div className="trendingNumber">15k post</div>
            </span>
            <span className="material-symbols-rounded">more_horiz</span>
          </div>

          <div className="trend">
            <span>
              <strong>Employee Policy</strong>
              <div className="trendingNumber">17k post</div>
            </span>
            <span className="material-symbols-rounded">more_horiz</span>
          </div>

          <div className="trend">
            <span>
              <strong>Ramaphosa</strong>
              <div className="trendingNumber">3k post</div>
            </span>
            <span className="material-symbols-rounded">more_horiz</span>
          </div>

          <div className="trend">
            <span>
              <strong>Forex</strong>
              <div className="trendingNumber">2.7k post</div>
            </span>
            <span className="material-symbols-rounded">more_horiz</span>
          </div>

          <div className="trend">
            <span>
              <strong>Supply Chain</strong>
              <div className="trendingNumber">1.7k post</div>
            </span>
            <span className="material-symbols-rounded">more_horiz</span>
          </div>

          <div className="trend">
            <span>
              <strong>Jacob Zuma</strong>
              <div className="trendingNumber">3.9k post</div>
            </span>
            <span className="material-symbols-rounded">more_horiz</span>
          </div>

          <div className="trend">
            <span>
              <strong>Zimbabwean</strong>
              <div className="trendingNumber">1.9k post</div>
            </span>
            <span className="material-symbols-rounded">more_horiz</span>
          </div>

          <div className="trend">
            <span>
              <strong>Global Export Delay</strong>
              <div className="trendingNumber">14k post</div>
            </span>
            <span className="material-symbols-rounded">more_horiz</span>
          </div>
        </div>

      </div>

      <span className="footer">
        Privacy · Terms · Contact Us · Cookies · Chirper © 2023
      </span>
    </div></> 
    : RightBar === "trend" ?
   <>
    <div className="rightbar">
      <div className="contain">
        <div className="item">
          <span className="MemuTag">Suggestion for you </span>
          
          <hr className="hrColor" />
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/19137816/pexels-photo-19137816/free-photo-of-road-crossing-a-snow-covered-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="avatar"
              />
              <span className="followName">Jan Doe</span>
            </div>
            <button>Mail</button>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/13093467/pexels-photo-13093467.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="avatar"
              />
              <span className="followName">Steven Jacson</span>
            </div>
            <button>Mail</button>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/18506230/pexels-photo-18506230/free-photo-of-a-hummingbird-sitting-on-a-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="avatar"
              />
              <span className="followName">Shaun Mason</span>
            </div>
            <button>Mail</button>
          </div>
        </div>

      </div>

      <span className="footer">
        Privacy · Terms · Contact Us · Cookies · Chirper © 2023
      </span>
    </div></> : RightBar === "profile" ?
   <>
    <div className="rightbar">
      <div className="contain">
        <div className="item">
          <span className="MemuTag">Gallery </span>
          
          <hr className="hrColor" />

          <div className="gallery">
            <div className="galleryItem">
              <img
                src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="gallery"
              />
            </div>
            <div className="galleryItem">
              <img 
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="gallery"
              />
            </div>
            <div className="galleryItem">
              <img
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="gallery" 
              />
            </div>
            <div className="galleryItem">
              <img
                src="https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="gallery"
              />
            </div>
            <div className="galleryItem">
              <img
                src="https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="gallery"
              />
            </div>
            <div className="galleryItem">
              <img
                src="https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="gallery"
              />
            </div>
          </div>
          <div className="view-all-link" style={{marginBottom: "20px"}}>
            <span>View all gallery photos</span>
            <span className="material-symbols-rounded">arrow_forward</span>
          </div>


          <span className="MemuTag">Hr </span>
          
          <hr className="hrColor" />

          <div className="user">
            <div className="userInfo">
              <span className="material-symbols-rounded" style={{fontSize: "24px", color: "#666"}}>calendar_today</span>
              <span className="followName">Apply for Leave</span>
            </div>
            <button>Apply</button>
          </div>

          <div className="user">
            <div className="userInfo">
              <span className="material-symbols-rounded" style={{fontSize: "24px", color: "#666"}}>description</span>
              <span className="followName">Download Payslip</span>
            </div>
            <button>Download</button>
          </div>

          <div className="user">
            <div className="userInfo">
              <span className="material-symbols-rounded" style={{fontSize: "24px", color: "#666"}}>event_available</span>
              <div style={{display: "flex", flexDirection: "column"}}>
                <span className="followName">Leave Days Left</span>
                <span style={{fontSize: "12px", color: "#888"}}>15 days remaining</span>
              </div>
            </div>
            <button>View</button>
          </div>

          <div className="user">
            <div className="userInfo">
              <span className="material-symbols-rounded" style={{fontSize: "24px", color: "#666"}}>work_history</span>
              <span className="followName">Attendance Record</span>
            </div>
            <button>View</button>
          </div>


         {/* <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/19137816/pexels-photo-19137816/free-photo-of-road-crossing-a-snow-covered-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="avatar"
              />
              <span className="followName">Jan Doe</span>
            </div>
            <button>Mail</button>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/13093467/pexels-photo-13093467.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="avatar"
              />
              <span className="followName">Steven Jacson</span>
            </div>
            <button>Mail</button>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/18506230/pexels-photo-18506230/free-photo-of-a-hummingbird-sitting-on-a-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="avatar"
              />
              <span className="followName">Shaun Mason</span>
            </div>
            <button>Mail</button>
          </div>*/} 
        </div>

      </div>

      <span className="footer">
        Privacy · Terms · Contact Us · Cookies · Chirper © 2023
      </span>
    </div></> : ""


}

{/*RightBar === "trend" ?
   <>
    <div className="rightbar">
      <div className="contain">
        <div className="item">
          <span className="MemuTag">Suggestion for you </span>
          
          <hr className="hrColor" />
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/19137816/pexels-photo-19137816/free-photo-of-road-crossing-a-snow-covered-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="avatar"
              />
              <span className="followName">Jan Doe</span>
            </div>
            <button>Follow</button>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/13093467/pexels-photo-13093467.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="avatar"
              />
              <span className="followName">Steven Jacson</span>
            </div>
            <button>Follow</button>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/18506230/pexels-photo-18506230/free-photo-of-a-hummingbird-sitting-on-a-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="avatar"
              />
              <span className="followName">Shaun Mason</span>
            </div>
            <button>Follow</button>
          </div>
        </div>

      </div>

      <span className="footer">
        Privacy · Terms · Contact Us · Cookies · Chirper © 2023
      </span>
    </div></> : ""

*/}
    </>
  );
};

export default Rightbar;
