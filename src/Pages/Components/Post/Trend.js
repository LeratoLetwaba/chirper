import "./post.scss";
//import Posts from "./Posts";
import Trends from "./Trends";
import { useContext, useEffect } from "react";
import { MyContext } from "../../../context";

const Trend = () => {
  const { updateRightBar } = useContext(MyContext);

  useEffect(() => {
    updateRightBar("trend");
  }, []);

  const trending = [
    {
      id: 1,
      name: "South Africa",
      posts: "15k",
    },
    {
      id: 2,
      name: "Employee Policy",
      posts: "17k",
    },

    {
      id: 3,
      name: "Ramaphosa",
      posts: "3k",
    },
    {
      id: 4,
      name: "Forex",
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
      name: "Forex",
      posts: "14k",
    },
    {
      id: 8,
      name: "Global Export Delay",
      posts: "74.7k",
    },
  ];

  return (
    <div className="trend">
      <div className="post">
        {trending.map((trend) => (
          <Trends name={trend.name} posts={trend.posts} key={trend.id} />
        ))}
      </div>
    </div>
  );
};

export default Trend;
