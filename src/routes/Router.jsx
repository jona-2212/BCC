import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";


// Pages
// import Home from "../pages/Home";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Home />,
  // },
  {
    path:"/login",
    element: <Login/>,
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