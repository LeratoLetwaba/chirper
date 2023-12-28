import "./trends.scss";

const Trends = (props) => {
  return (
    <div className="trends">
      <div className="contain">
        <div className="user">
          <div className="userInfo">
            <div className="details">

              
              <span className="date">{props.posts} Posts</span>
            </div>
          </div>
          <span className="material-symbols-rounded">more_horiz</span>
        </div>

        <div className="info">
          <div className="items" >
            <span class="material-symbols-rounded">tag</span><strong>{props.name}</strong>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Trends;
