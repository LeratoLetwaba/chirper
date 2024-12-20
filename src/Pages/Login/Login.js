import "./login.scss";
import icon from "../../images/bird-03.png";
import logo from "../../images/bird-05.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    if (!formData.username || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      // Add your login API call here
      // const response = await loginUser(formData);
      // if (response.success) {
      //   navigate("/dashboard");
      // }
      console.log("Login attempted with:", formData);
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          {/*<h1>Hello chirper. </h1>*/}
          <img src={logo} alt="Logo" width="200px" />
          <p>
          A workplace-focused platform offers an efficient solution to keep employees informed and engaged. It centralizes updates, announcements, and discussions, ensuring seamless communication across teams. With real-time notifications, it enhances transparency and fosters a connected, informed workforce.<br />
            <strong>Get started now!</strong> <br />
            <br />
          </p>
          {/* <span>Dont have an Account</span>
                    <button>Login</button>*/}
        </div>
        <div className="right">
          {/*<h2>Login</h2>
          <img src={icon} alt="Logo" width="110px" />*/}

          <form>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
            {/**/}
          </form>
          <div className="forgot-password">
            <Link to="/forgot-password">Forgot Password? </Link> 
            |         <Link to="/registration">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
