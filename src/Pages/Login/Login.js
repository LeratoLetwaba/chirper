import "./login.scss";
import icon from "../../images/bird-03.png";
import logo from "../../images/bird-05.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
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
            <strong>Get started now!</strong> <br />
            <br />
            <strong>Dont have an Account:</strong>{" "}
            <Link to="/registration">Register</Link>
          </p>
          {/* <span>Dont have an Account</span>
                    <button>Login</button>*/}
        </div>
        <div className="right">
          {/*<h2>Login</h2>*/}
          <img src={icon} alt="Logo" width="110px" />

          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
            {/**/}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
