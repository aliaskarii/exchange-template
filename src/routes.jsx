import Home from "./pages/dashboard/home";
import DashboardIcon from '@mui/icons-material/Dashboard';
import SignIn from "./pages/auth/sign-in";
import SignUp from "./pages/auth/sign-up";


export const routes = [
    {
        layout: "dashboard",
        pages: [
            {
                icon: <DashboardIcon />,
                name: "dashboard",
                path: "/home",
                element: <Home />,
            }
        ],
    },
    {
        title: "auth pages",
        layout: "auth",
        pages: [
            {
                icon: <DashboardIcon />,
                name: "sign in",
                path: "/sign-in",
                element: <SignIn />,
            },
            {
                icon: <DashboardIcon />,
                name: "sign up",
                path: "/sign-up",
                element: <SignUp />,
            },
        ],
    },
];

export default routes;