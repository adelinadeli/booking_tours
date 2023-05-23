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
import User from "./pages/User/User";
import Admin from "./pages/Admin/Admin";
import Tour from "./pages/Tour/Tour";
import OneTour from "./pages/Tour/OneTour";
import AboutUs from "./pages/AboutUs";
import PotborTour from "./pages/Tour/PotborTour"
import Home from "./pages/Home";



import AplicationUser from "./pages/Admin/applicationuser/ApplicationUser";
import "./style.scss"
import Messages from "./pages/Messages";

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
        path: "/Messages",
        element: <Messages/>,
      },
      {
        path: "/Novosti",
        element: <Novosti/>,
      },
      {
        path: "/",
        element: <Home/>,
      },
      // {
      //   path: "/Admin/:id",
      //   element: <AplicationUser/>,
      // },
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
      },{
        path: "/Tour/:id",
        element: <OneTour/>,
      },
      {
        path: "/Admin",
        element: <Admin/>,
      },
      {
        path: "/User",
        element: <User/>,
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
