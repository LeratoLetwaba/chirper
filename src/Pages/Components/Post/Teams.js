
import "./post.scss"
import TeamPost from "./TeamPost";

const Saving = () => {

  const teams = [
    {
      id: 1,
      department: "Marketing",
      location : "Johanesburg",
      userId: 1,
      team: [
        {
          name: "John",
          surname: "Doe",
          email: "john.doe@example.com",
          position: "Designer",
          picture: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
          name: "Sean",
          surname: "Mason",
          email: "sean@example.com",
          position: "Copywriter",
          picture: "https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
      ],
      profilePic:
        "https://images.pexels.com/photos/19137816/pexels-photo-19137816/free-photo-of-road-crossing-a-snow-covered-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      department: "IT",
      location : "Western Cape",
      userId: 2,
      team: [
        {
          name: "Neo",
          surname: "Doe",
          email: "john.doe@example.com",
          position: "IT Manager",
          picture: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
          name: "Prince",
          surname: "Bill",
          email: "sean@example.com",
          position: "IT Support",
          picture: "https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
      ],
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
  ];

    return (
        <div className="post">
       
       {teams.map(team=>(
        <TeamPost post={team} key={team.id} />
       ))} {/**/}
        
        </div>
    )
}

export default Saving