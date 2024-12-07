import "./posts.scss";
import { Link } from "react-router-dom";
import Comments from "../Comments/Comments";
import { useState } from "react";

const TeamPost = ({ post }) => {
  const [commentOpenId, setCommentOpenId] = useState(null);
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
                <span className="name">{post.department}</span>
              </Link>
              <span className="date">{post.location}</span>
            </div>
          </div>
          <span className="material-symbols-rounded">more_horiz</span>
        </div>
       

        <div className="team-members">
          {post.team && post.team.map((member, index) => (<>
            <div key={index} className="team-member">

              <span className="picture">
              <img src={member.picture} alt={member.name} />
              <div className="member-info">
                <span className="member-name">{member.name} {member.surname}</span>
                <span className="member-email">{member.position}</span>
              </div>
              </span>


              <span>

              <div className="info">
          <div className="items" onClick={() => setCommentOpenId(commentOpenId === index ? null : index)}>
            <span class="material-symbols-rounded">chat_bubble</span> 1  <span className="reactionName">Message</span>
          </div>

          <div className="items">
           
              <span className="material-symbols-rounded">Mail</span>
            {" "}
           <span className="reactionName">Send Email</span> 
          </div>

          
        </div>

             
              </span>

              <br />
              
            </div>
            {commentOpenId === index && <Comments />}
            </>
            
          ))}
        </div>

        

        
      </div>
    </div>
  );
};

export default TeamPost;
