import "./SubmitPost.scss";

const SubmitPost = () => {
  return (
    <div className="posts">
      <div className="contains">
        <div className="user">
          <div className="userInfo">
          <img className="avatar"
            src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?cs=srgb&dl=pexels-craig-adderley-1563356.jpg&fm=jpg"
            alt="avatar"
          />
          </div>
          <input type="text" placeholder="Write a comment" />
        </div>
       

        <div className="info">
          <div className="items" >
            <span class="material-symbols-rounded">image</span><span className="reactionName">Images</span>
          </div>

          <div className="items">
            <span class="material-symbols-rounded">videocam</span><span className="reactionName">Video</span>
          </div>

          <div className="items">
            <span className="material-symbols-rounded">music_note</span> <span className="reactionName">audio</span>
          </div>

          <div className="items">
            <button>Post</button> 
          </div>

        </div>
      </div>
    </div>
  );
};

export default SubmitPost;
