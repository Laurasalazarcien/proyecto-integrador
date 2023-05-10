import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import DetailPage from "../pages/Detail";
import RegisterPage from "../pages/Register";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;
