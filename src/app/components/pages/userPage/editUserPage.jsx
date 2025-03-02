import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import UsersNameField from "../../common/form/editForm/usersNameField";
import API from "../../../api";
import EmailField from "../../common/form/editForm/emailField";
import ProfessionField from "../../common/form/editForm/professionField";
import GenderField from "../../common/form/editForm/genderField";
import EditQualities from "../../common/form/editForm/editQualities";

const EditUserPage = (userid) => {
  const [qualities, setQualities] = useState({});
  const [professions, setProfession] = useState([]);
  const [user, setUser] = useState({
    name: "",
    email: "",
    profession: {
      _id: "",
      name: "",
    },
    sex: "male",
    qualities: [],
  });

  console.log(qualities);
  const navigate = useNavigate();
  const location = useLocation();
  //   // Get user data
  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Location state, when user have data
        if (location.state && location.state.user) {
          setUser(location.state.user);
        } else {
          // Get server response for actual data
          const data = await API.users.getById(userid);
          if (data) {
            setUser(data);
          } else {
            navigate("/404");
          }
        }
      } catch (error) {
        console.error("user not found");
      }
    };
    fetchUser();
  }, [userid, location, navigate]);

  useEffect(() => {
    API.professions.fetchAll().then((data) => setProfession(data));
    API.qualities.fetchAll().then((data) => setQualities(data));
  }, []);

  console.log("User Qualities", user.qualities);
  console.log("user profession", user.profession.name);

  const handleChange = (target) => {
    setUser((prevstate) => ({
      ...prevstate,
      [target.name]: target.value,
    }));
  };
  const handleSelectChange = ({ name, value }) => {
    const transformedData = value.reduce((acc, item) => {
      const key = Object.keys(qualities).find(
        (q) => qualities[q]._id === item.value
      );
      if (key) {
        acc[key] = qualities[key]; // Full quailities API
      }
      return acc;
    }, {});

    setUser((prevUser) => ({
      ...prevUser,
      [name]: Object.values(transformedData), // Change object to array
    }));
  };
  // Send Data
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      try {
        const updatedUser = await API.users.update(user._id, user);
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const updatedUsers = users.map((user) =>
          user._id === updatedUser._id ? updatedUser : user
        );
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        navigate(`/users/${user._id}/`, { state: { user } });
      } catch (error) {
        console.error("Error to update", error);
      }
    } else {
      console.warn("Unable to update");
    }
  };
  return (
    <>
      {" "}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 .offset-md-3 shadow p-4">
            <form onSubmit={handleSubmit}>
              <h1>Edit User Page </h1>
              <UsersNameField
                label="Name"
                name="name"
                value={user.name || ""}
                onChange={handleChange}
              />
              <EmailField
                label="E-mail"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
              <ProfessionField
                label="Select your profession"
                onChange={handleChange}
                name="profession"
                options={professions || []}
                defaultOption="Select..."
                value={user.profession || ""}
              />

              <GenderField
                options={[
                  { name: "Male", value: "male" },
                  { name: "Female", value: "female" },
                  { name: "Other", value: "other" },
                ]}
                value={user.sex}
                name="sex"
                onChange={handleChange}
                label="Select your gender"
              />

              <EditQualities
                options={qualities}
                onChange={handleSelectChange}
                name="qualities"
                label="Select your qualities"
                defaultValue={user.qualities.map((q) => ({
                  label: q.name,
                  value: q._id,
                }))}
              />
              <button type="submit" className="btn btn-primary w-100 mx-auto">
                Edit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUserPage;
