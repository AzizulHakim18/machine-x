import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import About from "../Pages/About/About/About";
import Contact from "../Pages/Contact/Contact";
import Error from "../Pages/Error";
import Home from "../Pages/Home/Home/Home";
import Services from "../Pages/Services/Services/Services";
import LogIn from "../Pages/Sheared/Register/LogIn";
import Registration from "../Pages/Sheared/Register/Registration";


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
        ]
    }
])