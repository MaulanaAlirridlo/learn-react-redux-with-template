import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletePost, getPost, selectPost } from "./postSlice";

export function Post() {
  const post = useSelector(selectPost);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  return (
    <div>
      {post.post
        ? post.post.map((v, i) => (
            <div key={i}>
              <p>
                {v.title}
                <Link to={"/post/"+v.id}>
                  <button>edit</button>
                </Link>
                <button onClick={() => dispatch(deletePost(v.id))}>hapus</button>
              </p>
            </div>
          ))
        : "loading"
      }
    </div>
  );
}
