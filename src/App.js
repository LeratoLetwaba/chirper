import "./app.scss";
import "./App.css";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Registration/Registration";
///import Navbar from "./Pages/Components/Navbar/Navbar";
///import LeftBar from "./Pages/Components/Leftbar/Leftbar";
///import RightBar from "./Pages/Components/Rightbar/Rightbar";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Feed from "./Pages/Social/Feed";
import HrDashboard from "./Pages/Hr/HrDashboard"
import Trend from "./Pages/Components/Post/Trend"
//import { useContext } from "react";
//import { DarkModeContext } from "./Pages/Context/darkModeContext";

import {
  createBrowserRouter,
  RouterProvider,
  //Outlet,
  Navigate,
} from "react-router-dom";

function App() {
  const currentUser = true;
 // const { darkMode } = useContext(DarkModeContext);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };


  
 

  /*const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div
          style={{
            display: "flex",
            marginTop: "0px",
            backgroundColor: darkMode?"#191617":"#fafafa",
          }}
        >
          <LeftBar />
          <div style={{ flex: 6, marginLeft: "270px" }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };*/

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Feed />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
        
        {
          path: "/trends",
          element:  <Trend />,
        },
      ] /* */,
    },
    {
      path: "/hr",
      element: (
        <ProtectedRoute>
          <HrDashboard />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/hr",
          element: <>
            <div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
        </>,
        },
        {
          path: "/hr/profile/:id",
          element: <Profile />,
        },
      ] /* */,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/registration",
      element: <Register />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
