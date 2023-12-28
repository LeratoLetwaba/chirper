
import "./home.scss"
import  Post from "../Components/Post/Post";
import SubmitPost from "../Components/Post/SubmitPost";

const Home = () => {
    return (
        <div className="home">
        <SubmitPost />
        <Post />


        </div>
    )
}

export default Home