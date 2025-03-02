import { useParams } from "react-router-dom";
import UserPage from "../pages/userPage";
import UsersListPage from "../pages/usersListPage";
import PropTypes from "prop-types";
import EditUserPage from "../pages/userPage/editUserPage";
const Users = () => {
  const params = useParams();
  const { userId, edit } = params;

  return (
    <>
      {userId ? (
        edit ? (
          <EditUserPage />
        ) : (
          <UserPage userId={userId} />
        )
      ) : (
        <UsersListPage />
      )}
    </>
  );
};

Users.propTypes = {
  userId: PropTypes.string.isRequired,
};
export default Users;
