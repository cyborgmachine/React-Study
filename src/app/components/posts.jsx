import { useParams, useLocation } from "react-router-dom";
import Post from "./post";
import PostsList from "./postsList";
// import queryString from "query-string";
// import _ from "lodash";

const Posts = () => {
  const posts = [
    { id: 1, label: "post 1" },
    { id: 2, label: "post 2" },
    { id: 3, label: "post 3" },
  ];
  // const location = useLocation();
  // // const search = queryString.parse(location.search);
  // // // const cropPosts = search
  // // //   ? _(posts).slice(0).take(search.count).value()
  // // //   : posts;
  // console.log(search);
  const { postId } = useParams();

  return (
    <>
      {postId ? (
        <Post posts={posts} id={postId} />
      ) : (
        <PostsList posts={posts} />
      )}
    </>
  );
};

export default Posts;
