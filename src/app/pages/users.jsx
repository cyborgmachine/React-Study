import { useParams } from "react-router-dom";
import UserPage from "./userPage";
import UsersList from "../components/users/usersList";
import PropTypes from "prop-types";
const Users = () => {
  const params = useParams();
  const { userId } = params;

  return <>{userId ? <UserPage userId={userId} /> : <UsersList />}</>;
};

Users.propTypes = {
  userId: PropTypes.string.isRequired,
};
export default Users;
