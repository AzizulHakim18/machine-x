import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import About from "../Pages/About/About/About";
import CheckOut from "../Pages/CheckOuts.js/CheckOut";
import Contact from "../Pages/Contact/Contact";
import Error from "../Pages/Error";
import Home from "../Pages/Home/Home/Home";
import Orders from "../Pages/Orders/Orders";
import Services from "../Pages/Services/Services/Services";
import LogIn from "../Pages/Sheared/Register/LogIn";
import Registration from "../Pages/Sheared/Register/Registration";
import PrivateRouts from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/services",
                element: <Services></Services>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
            {
                path: "/checkout/:id",
                element: <PrivateRouts><CheckOut></CheckOut></PrivateRouts>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: "/orders",
                element: <PrivateRouts><Orders></Orders></PrivateRouts>

            },
        ]
    }
])