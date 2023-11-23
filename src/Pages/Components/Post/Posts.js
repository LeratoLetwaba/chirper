import "./posts.scss";
import { Link } from "react-router-dom";
import Comments from "../Comments/Comments";
import { useState } from "react";

const Posts = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const liked = false;
  return (
    <div className="posts">
      <div className="contain">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link to={`/profile/${post.userId}`}>
                {" "}
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <span className="material-symbols-rounded">more_horiz</span>
        </div>
        <div className="content">
          {post.desc}
          <img src={post.img} alt="" />
        </div>

        <div className="info">
          <div className="items" onClick={() => setCommentOpen(!commentOpen)}>
            <span class="material-symbols-rounded">chat_bubble</span> 1  <span className="reactionName">Comments</span>
          </div>

          <div className="items">
            {liked ? (
              <span className="material-symbols-rounded">heart_minus</span>
            ) : (
              <span className="material-symbols-rounded">heart_plus</span>
            )}{" "}
            12 <span className="reactionName">Likes</span> 
          </div>

          <div className="items">
            <span className="material-symbols-rounded">share</span> 2 <span className="reactionName">shares</span>
          </div>
        </div>

        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Posts;
