import { useParams } from "react-router-dom";
import UserPage from "../pages/userPage";
import UsersListPage from "../pages/usersListPage";
import PropTypes from "prop-types";
const Users = () => {
  const params = useParams();
  const { userId } = params;

  return <>{userId ? <UserPage userId={userId} /> : <UsersListPage />}</>;
};

Users.propTypes = {
  userId: PropTypes.string.isRequired,
};
export default Users;
