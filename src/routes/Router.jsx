import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import HomePage from "../Pages/HomePage";
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
    path: "/homepage",
    element: <HomePage />
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