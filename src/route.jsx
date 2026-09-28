import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
// import Products from "./components/Products.jsx";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'about',
                element:<About/>
            },
            {
                path:'contact',
                element:<Contact/>,
            },
            // {
            //     path:'products',
            //     element:<Products/>
            // },

        ]
    },
])
export default router