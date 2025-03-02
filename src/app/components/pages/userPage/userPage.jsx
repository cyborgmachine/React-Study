import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import API from "../../../api";
import PropTypes from "prop-types";
import Quality from "../../ui/qualities/quality";

const UserPage = ({ userId }) => {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const gotoEditUser = (user) => {
    navigate(`/users/${user._id}/edit`, { state: { user } });
  };
  // Get user data
  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Location state, when user have data
        if (location.state && location.state.user) {
          setUser(location.state.user);
        } else {
          const users = JSON.parse(localStorage.getItem("users")) || [];
          const foundUser = users.find((user) => user._id === userId);
          // Get server response for actual data
          if (foundUser) {
            setUser(foundUser);
          } else {
            const data = await API.users.getById(userId);

            if (data) {
              setUser(data);
            } else {
              navigate("/404");
            }
          }
        }
      } catch (error) {
        console.error("user not found");
      }
    };
    fetchUser();
  }, [userId, location, navigate]);

  // Must check for user(data) otherwise undefined
  if (!user) {
    // Loader
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  console.log("Profession Name", user.profession);
  console.log("User Qualities", user.qualities);
  console.table(user);

  return (
    <>
      <h1>User Page </h1>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={require("./logo192.png")}
          className="card-img-top"
          alt="user-image"
        ></img>
        <div className="card-body">
          <h4 className="card-title">Name: {user.name}</h4>
          <p className="card-text">Info</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h4 className="card-title"> Profession: {user.profession.name}</h4>
          </li>
          <li className="list-group-item">
            <h5 className="card-title">
              {" "}
              Qualities:{" "}
              {user.qualities.map((qual) => (
                <Quality key={qual._id} {...qual} />
              ))}
            </h5>
          </li>
          <li className="list-group-item">
            {" "}
            <h5> Rate: {user.rate}</h5>{" "}
          </li>
          <li className="list-group-item">
            <h5>Completed meetings: {user.completedMeetings}</h5>
          </li>
          <li className="list-group-item">
            <h5>Gender: {user.sex}</h5>
          </li>
          <li className="list-group-item">
            <h5>Email: {user.email}</h5>
          </li>
        </ul>
        <div className="card-body d-flex justify-content-center">
          <button
            userid={user._id}
            onClick={() => {
              gotoEditUser(user);
            }}
            type="button"
            className="btn btn-secondary"
          >
            Edit User
          </button>
        </div>
      </div>
    </>
  );
};

UserPage.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default UserPage;
