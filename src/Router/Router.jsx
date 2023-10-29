import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Deatails from "../Components/Details/Deatails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path: "/",
            element:<Home></Home>
        },
        {
            path: "/About",
            element: <About></About>
        },
        {
          path:"/product/:id",
          element: <Deatails></Deatails>
        }


      ]
    },
  ]);

  export default router;