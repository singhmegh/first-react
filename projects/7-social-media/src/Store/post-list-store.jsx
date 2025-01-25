import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_pOST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList, //it is a object , we wrap in this {} because it is object
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to mumbai",
    body: "hi friends, i am going to mumbai for my vacation. hope to enjoy a lot. peace out.",
    reaction: 2,
    userId: "user-9",
    tags: ["vaction", "Mumbai", "enjoying"],
  },
  {
    id: "2",
    title: "pass ho gye",
    body: "hi friends, i am going to mumbai for my vacation. hope to enjoy a lot. peace out.",
    reaction: 20,
    userId: "user-12",
    tags: ["Graduating", "Mumbai", "enjoying"],
  },
];

export default PostListProvider;
