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

        <div>
          <img className="avatar"
            src="https://images.pexels.com/photos/19583366/pexels-photo-19583366/free-photo-of-parrot-with-red-feathers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="avatar"
          />

<img className="avatar"
            src="https://images.pexels.com/photos/18506230/pexels-photo-18506230/free-photo-of-a-hummingbird-sitting-on-a-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="avatar"
          />

<img className="avatar"
            src="https://images.pexels.com/photos/18926805/pexels-photo-18926805/free-photo-of-yucca-growing-in-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="avatar"
          />

<img className="avatar"
            src="https://images.pexels.com/photos/19137816/pexels-photo-19137816/free-photo-of-road-crossing-a-snow-covered-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="avatar"
          />

<img className="avatar"
            src="https://images.pexels.com/photos/13093467/pexels-photo-13093467.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="avatar"
          />

<img className="avatar"
            src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?cs=srgb&dl=pexels-craig-adderley-1563356.jpg&fm=jpg"
            alt="avatar"
          />
        </div>


        </div>

      </div>
    </div>
  );
};

export default Trends;
