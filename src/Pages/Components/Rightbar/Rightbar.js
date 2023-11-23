import "./rightbar.scss";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="contain">
        <div className="item">
          <span className="MemuTag">Suggestion for you</span>
          <hr className="hrColor" />
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?cs=srgb&dl=pexels-craig-adderley-1563356.jpg&fm=jpg"
                alt="avatar"
              />
              <span className="followName">Jan Doe</span>
            </div>
            <button>Follow</button>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?cs=srgb&dl=pexels-craig-adderley-1563356.jpg&fm=jpg"
                alt="avatar"
              />
              <span className="followName">Steven Jacson</span>
            </div>
            <button>Follow</button>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?cs=srgb&dl=pexels-craig-adderley-1563356.jpg&fm=jpg"
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
    </div>
  );
};

export default Rightbar;
