
import "./profile.scss"
import Profiles from "./Profiles"
import SubmitPost from "../Components/Post/SubmitPost"
import ProfileHead from "./ProfileHead"

const Profile = () => {
    return (
        <div className="profile">
            <ProfileHead />
             <SubmitPost />
        <Profiles />
        
        </div>
    )
}

export default Profile