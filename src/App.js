import "./app.scss";
import "./App.css";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Registration/Registration";
import Navbar from "./Pages/Components/Navbar/Navbar";
import LeftBar from "./Pages/Components/Leftbar/Leftbar";
import RightBar from "./Pages/Components/Rightbar/Rightbar";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import { useContext } from "react";
import { DarkModeContext } from "./Pages/Context/darkModeContext";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

function App() {
  const currentUser = true;
  const { darkMode } = useContext(DarkModeContext);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div
          style={{
            display: "flex",
            marginTop: "0px",
            backgroundColor: "#fafafa",
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
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
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
