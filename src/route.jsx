import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Products from "./components/Products.jsx";
import Preview from "./components/Preview.jsx";
import Admin from "./components/Admin.jsx";
import Protected from "./components/Protected.jsx";
import Package from "./components/Package.jsx";
import Services from "./components/Services.jsx";
import KitsPreview from "./components/KitsPreview.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'contact',
                element: <Contact />,
            },
            {
                path: 'products',
                element: <Products />,
            },
            {
                path: 'package',
                element:<Package/>
            },
            {
                path: 'preview',
                element: <Preview />,
                
            },
            {
                path: 'kits',
                element: <KitsPreview/>,
                
            },
            {
                path: 'services',
                element: <Services />
            },

        ],
    },
    {
        path: '/admin',
        element: <Admin />
    },
    {
        path: '/admin/protected',
        element: <Protected/>
    },
])
export default router