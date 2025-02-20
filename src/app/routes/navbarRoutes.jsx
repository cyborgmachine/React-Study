import { Route, Routes, Navigate } from "react-router-dom";
import Users from "../pages/users";
import UsersList from "../components/usersList";
import Login from "../pages/login";
import MainPage from "../pages/mainPage";
import NotFound from "../components/notFound";
const NavbarRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users" element={<UsersList />} />
      <Route path="/users/:userId" element={<Users />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

export default NavbarRoutes;
