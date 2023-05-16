import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Novosti from "./pages/Novosti/Novosti";
import Single from "./pages/Novosti/Single";
import Write from "./pages/Admin/Write";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import User from "./pages/User/user";
import Admin from "./pages/Admin/admin";
import Tour from "./pages/Tour/Tour";
import AboutUs from "./pages/AboutUs";
import PotborTour from "./pages/Tour/PotborTour"
import Home from "./pages/Home";
import "./style.scss"

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      {/* <Footer/> */}
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/Novosti",
        element: <Novosti/>,
      },
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/post/:id",
        element: <Single/>,
      },
      {
        path: "/write",
        element: <Write/>,
      },
      {
        path: "/Tour",
        element: <Tour/>,
      },
      {
        path: "/Admin",
        element: <Admin/>,
      },
      {
        path: "/PotborTour",
        element: <PotborTour/>,
      },
      {
        path: "/AboutUs",
        element: <AboutUs/>,
      },
      
    ]
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);


function App() {
  return (
    <div className="app">
      <div className="container">
        

      <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
