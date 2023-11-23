import "./comments.scss";
const Comments = () => {
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "John Doe",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Jane Doe",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={""} alt="" />
      </div>
      {comments.map((comment) => (
        <>
          <hr className="hrColor" />
          <div className="comment">
            <img src={comment.profilePicture} alt="" />
            <div className="info">
              <span className="name">{comment.name}</span>
              <p>{comment.desc}</p>

              <div className="reaction">
                <div className="items">
                  <span className="material-symbols-rounded">chat_bubble</span>{" "}
                  0 <span className="reactionName"> reply</span>
                </div>

                <div className="items">
                  <span className="material-symbols-rounded">heart_plus</span> 1
                  <span className="reactionName"> Likes</span>
                </div>
              </div>
            </div>
            <span className="date">1 hour ago</span>
          </div>
        </>
      ))}
    </div>
  );
};

export default Comments;
