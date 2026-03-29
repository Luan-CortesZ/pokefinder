import HomePage from "../features/HomePage/views/HomePage";
import Profile from "../features/Profile/views/Profile";
import Pokedex from "../features/Pokedex/views/Pokedex";
import Login from "../features/Login/Login";

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
      path: "/profile",
      component: <Profile/>,
    },
    {
      path: "/profile/pokédex",
      component: <Pokedex/>,
    },
  ];