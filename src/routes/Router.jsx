import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import HomePage from "../Pages/HomePage";
import Konsultasi from "../Pages/Konsultasi";
import Regristasi from "../Pages/Regristasi";
import Artikel from "../Pages/Artikel";
import Password from "../Pages/Password";
import Reset from "../Pages/Reset";
import Daftarkan from "../Pages/Daftarkan";
import DetailProduk from "../Pages/DetailProduk";
import Profil from "../Pages/Profil";
import DetailMentor from "../Pages/DetailMentor";
import Informasi from "../Pages/Informasi";
import Etalase from "../Pages/Etalase";
// Pages
// import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/register",
     element: <Register/>,
   },
   {
    path: "detailproduk",
     element: <DetailProduk/>,
   },
   {
    path: "/reset",
     element: <Reset/>,
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

  },,
  {
    path: "/artikel",
    element: <Artikel />

  },
  {
    path: "/daftarkan",
     element: <Daftarkan/>,
   },
  {
    path: "/regristasi",
    element: <Regristasi />

  },
  {
    path: "/password",
    element: <Password />

  },
  {
    path: "/password",
    element: <Password />

  },
  {
    path: "/password",
    element: <Password />

  },
  {
    path: "/profil",
    element: <Profil />

  },
 
  {
    path: "/reset",
     element: <Reset/>,
   },
   {
    path: "/detailmentor",
     element: <DetailMentor/>,
   },
   {
    path: "/informasi",
     element: <Informasi/>,
   },
   {
    path: "/etalase",
     element: <Etalase/>,
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