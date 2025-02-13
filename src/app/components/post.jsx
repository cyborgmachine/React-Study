import React from "react";
import { useNavigate } from "react-router-dom";

const Post = ({ id, posts }) => {
  const post = posts.find((post) => post.id.toString() === id);
  const navigate = useNavigate();
  const handleSave = () => {
    navigate("/posts", { replace: true });
  };
  return (
    <>
      <h2>{post ? post.label : `Post with this id ${id} not found`}</h2>
      <button
        onClick={() => {
          handleSave();
        }}
      >
        Save
      </button>
    </>
  );
};

export default Post;
