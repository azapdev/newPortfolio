import { Route, Routes } from "react-router";
import { NavRoutes } from "./routes";

const AppRouter = () => {
  return (
    <Routes>
      {NavRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRouter;
