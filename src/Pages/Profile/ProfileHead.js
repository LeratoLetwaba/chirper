import "./profile.scss";

const ProfileHead = () => {
  return (
    <div className="posts">
      <div className="contains">

       
        <div className="Home-user">
          <div className="Home-userInf">
            <img
              className="Home-avatar"
              src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?cs=srgb&dl=pexels-craig-adderley-1563356.jpg&fm=jpg"
              alt="Home-avatar"
            />
            <div className="Home-details">
              <span className="Home-name">Lerato Letwaba</span>
              <span className="Home-title"><strong>Marketing | </strong>Software Developer</span>
              <span className="material-symbols-rounded" style={{paddingTop:"20px"}}>settings</span>
            </div>
          </div>
 
        </div>

        <div className="profileStats">
          <div className="stat">
            <span className="count">245</span>
            <span className="label">Posts</span>
          </div>
          <div className="stat">
            <span className="count">14.3K</span>
            <span className="label">Followers</span>
          </div>
          <div className="stat">
            <span className="count">892</span>
            <span className="label">Following</span>
          </div>
        </div>

        <div className="bio">
          <p>Building amazing things at TechCorp. Photography enthusiast. Coffee addict.</p>
          <div className="Home-location">
            <span className="material-symbols-rounded">location_on</span>
            <span>Johannesburg, South Africa</span>
          </div>
          <div className="Home-website">
            <span className="material-symbols-rounded">link</span>
            <a href="https://lerato.dev">lerato.dev</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHead;
