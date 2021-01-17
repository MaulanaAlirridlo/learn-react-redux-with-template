import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postSlice = createSlice({
  name: "post",
  initialState: {},
  reducers: {
    setPost: (state, action) => {
      state.post = action.payload;
    },
  },
});

export const { setPost } = postSlice.actions;

export const addPost = (
  id = 101,
  userId = 1,
  title = "testing",
  content = "testing content"
) => (dispatch) => {
  return axios
    .post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        id: id,
        userId: userId,
        title: title,
        content: content,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    .then(() => {
      dispatch(getPost());
      console.log("data ditambah")
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getPost = () => (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts", {
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => {
      dispatch(setPost(res.data));
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updatePost = (
  id,
  userId = 1,
  title = "testing",
  content = "testing content"
) => (dispatch) => {
  console.log(id)
  return axios
    .put(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        id: id,
        userId: userId,
        title: title,
        content: content,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    .then(() => {
      dispatch(getPost());
      console.log("data diupdate")
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deletePost = (id) => (dispatch) => {
  return axios
    .put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      headers: { "Content-Type": "application/json" },
    })
    .then(() => {
      dispatch(getPost());
      console.log("data dihapus")
    })
    .catch((err) => {
      console.log(err);
    });
};

export const selectPost = (state) => state.post;

export default postSlice.reducer;
