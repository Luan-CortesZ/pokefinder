import HomePage from "../features/HomePage/views/HomePage";
import Profile from "../features/Profile/views/Profile";
import Pokedex from "../features/Pokedex/views/Pokedex";
import Login from "../features/Auth/Login/Login";
import Register from "../features/Auth/Register/Register";
import { ProtectedRoute } from "../components/ProtectedRoutes/ProtectedRoute";

export const routers = [
    {
      path: "/",
      component: <HomePage/>, 
    },
    {
      path: "/login",
      component: <Login/>,
    },
    {
      path: "/register",
      component: <Register/>,
    },
    {
      path: "/profile",
      component: <ProtectedRoute><Profile/></ProtectedRoute>,
    },
    {
      path: "/profile/pokédex",
      component: <ProtectedRoute><Pokedex/></ProtectedRoute>,
    },
  ];