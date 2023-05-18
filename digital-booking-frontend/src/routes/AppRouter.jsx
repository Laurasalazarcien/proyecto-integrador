import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import DetailPage from "../pages/Detail";
import RegisterPage from "../pages/Register";
import AdminPage from "../pages/Admin";
import LoginPage from "../pages/Login";


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;
