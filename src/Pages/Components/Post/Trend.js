
import "./post.scss"
//import Posts from "./Posts";
import Trends from "./Trends";

const Trend = () => {

  const trending = [
    {
      id: 1,
      name: "South Africa",
      posts: "15k",
    },
    {
      id: 2,
      name: "The Eff",
      posts: "17k",
    },
    
    {
        id: 3,
        name: "Ramaphosa",
        posts: "3k",
      },
      {
        id: 4,
        name: "Jenin",
        posts: "2.7k",
      },
      {
        id: 5,
        name: "Jacob Zuma",
        posts: "3.9k",
      },
      {
        id: 6,
        name: "Zimbabwe",
        posts: "1.9k",
      },
      
      {
          id: 7,
          name: "All Black",
          posts: "14k",
        },
        {
          id: 8,
          name: "Civil War",
          posts: "74.7k",
        },
  ];

    return (
        <div className="trend">
            <div className="post">
        
       {trending.map(trend=>(
        <Trends name={trend.name} posts={trend.posts} key={trend.id} />
       ))}
        </div>
        </div>
    )
}

export default Trend