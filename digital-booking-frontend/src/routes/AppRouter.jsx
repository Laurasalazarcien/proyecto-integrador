import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import DetailPage from "../pages/Detail";
import CategoryPage from "../pages/Category";
import RegisterPage from "../pages/Register";
import AdminPage, {
  AdminCategories,
  AdminProducts,
  AdminUsers,
} from "../pages/Admin";

import LoginPage from "../pages/Login";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
      <Route path="/categories/:category" element={<CategoryPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/admin/" element={<AdminPage />}>
        <Route path="products" element={<AdminProducts />} />
        <Route path="categories" element={<AdminCategories />} />
        <Route path="users" element={<AdminUsers />} />
      </Route>
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;
