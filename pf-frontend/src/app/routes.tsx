import HomePage from "../features/HomePage/views/HomePage";
import Profile from "../features/Profile/views/Profile";
import Pokedex from "../features/Pokedex/views/Pokedex";
import FindPokemonPage from "../features/FindPokemon/views/FindPokemonPage";
import Login from "../features/Auth/Login/Login";
import Register from "../features/Auth/Register/Register";

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
      component: <Profile/>,
    },
    {
      path: "/profile/pokédex",
      component: <Pokedex/>,
    },
    {
      path: "/find-pokemon",
      component: <FindPokemonPage/>,
    },
  ];
