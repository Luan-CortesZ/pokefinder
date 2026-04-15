import HomePage from "../features/HomePage/views/HomePage";
import Profile from "../features/Profile/views/Profile";
import Pokedex from "../features/Pokedex/views/Pokedex";
import FindPokemonPage from "../features/FindPokemon/views/FindPokemonPage";

export const routers = [
    {
      path: "/",
      component: <HomePage/>, 
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
