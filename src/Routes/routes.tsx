import HomePage from "../components";
import Gallery from "../pages/Gallery";

export const routes = {
  Home: "/",
  Gallery: "/gallery",
};

export const NavRoutes = [
  {
    path: routes.Home,
    element: <HomePage />,
  },
  {
    path: routes.Gallery,
    element: <Gallery />,
  },
];
