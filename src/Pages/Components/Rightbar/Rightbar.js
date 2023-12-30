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
   {RightBar === "" ?
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



        
        <div className="item">
          <span className="MemuTag">Trends for you</span>
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
              <strong>The EFF</strong>
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
              <strong>Jenin</strong>
              <div className="trendingNumber">2.7k post</div>
            </span>
            <span className="material-symbols-rounded">more_horiz</span>
          </div>

          <div className="trend">
            <span>
              <strong>Nkalakatha</strong>
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
              <strong>All Black</strong>
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
