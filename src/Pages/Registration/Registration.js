//import react from "react"
import "./Registration.scss";
//import icon from "../../images/bird-03.png"
import logo from "../../images/bird-05.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          {/*<h1>Hello chirper. </h1>*/}
          <img src={logo} alt="Logo" width="200px" />
          <p>
            Join our vibrant community of chirper enthusiasts. Express yourself,
            share your thoughts, and connect with like-minded people. It's time
            to chirp, rechirp, and discover the latest trends. Dive into the
            world of concise and impactful communication. Let your voice be
            heard, one chirp at a time. <br />
            <strong>Get started now!</strong>
            <br />
            <br />
            <strong>Have an Account:</strong> <Link to="/login">Login</Link>
          </p>
          {/* <span>Dont have an Account</span>*/}
          <button>Register</button>
        </div>
        <div className="right">
          {/*   <img src={icon} width="110px"/>*/}
          <h2>Register</h2>
          <form>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Last Name" />
            <input type="password" placeholder="Password" />
            {/* <button> Register</button>*/}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
