import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import HomePage from "../Pages/HomePage";
import Navbar from "../Pages/Navbar";
import Informasi from "../Pages/Informasi";
import Footer from "../Pages/Footer";
import Konsultasi from "../Pages/Konsultasi";

// Pages
// import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/register",
     element: <Register/>,
   },
  {
    path:"/login",
    element: <Login/>,
  },
  {
    path: "/konsultasi",
     element: <Konsultasi/>,
   },
  {
    path: "/homepage",
    element: <HomePage />

  },
  {
    path: "/navbar",
    element: <Navbar />

  },
  {
    path: "/informasi",
    element: <Informasi />

  },
  {
    path: "/footer",
    element: <Footer />

  },
  // {
  //   element: <ProtectedRoute />,
  //   children: [
  //     {
  //       path: "/overview",
  //       element: <Home />,
  //     },
    // ],
  // }, 
]);

export default router;