import { Route, Routes, Navigate } from "react-router-dom";
import Users from "../components/layouts/users";
import UsersListPage from "../components/pages/usersListPage";
import Login from "../components/layouts/login";
import MainPage from "../components/layouts/mainPage";
import NotFound from "../components/404/notFound";
import EditUserPage from "../components/pages/userPage/editUserPage";
const NavbarRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login:type?" element={<Login />} />
      <Route path="/users" element={<UsersListPage />} />
      <Route path="/users/:userId" element={<Users />} />
      <Route path="/users/:userId/edit" element={<EditUserPage />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

export default NavbarRoutes;
