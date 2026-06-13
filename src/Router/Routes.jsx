import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import Home from "../Home/Home.jsx";
// import Contact from "../contact/ContactPage.jsx";
import GetInTouch from "../contact/GetInTouch.jsx";
import About from "../About/About.jsx";
import Services from "../Services/Services.jsx";

const  router=createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Home/>
            }
            ,
            {
                path:"/about",
                element:<About/>
            }
            // ,
            // {
            //     path:"/portfolio",
            //     element:<Contact/>
            // }
            ,
            {
                path:"/services",
                element:<Services/>
            }
            ,
            {
                path:"/contact",
                element:<GetInTouch/>
            }
        ]
    }
])
export default router;