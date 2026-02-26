import HomePage from "../features/HomePage/views/HomePage";
import Profile from "../features/Profile/views/Profile";

export const routers = [
    {
      path: "/",
      component: <HomePage/>, 
    },
    {
      path: "/profile",
      component: <Profile/>,
    },
  ];