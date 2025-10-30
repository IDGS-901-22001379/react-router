import React from "react";
import { useLoaderData } from "react-router-dom";

const Post = () => {
  const { post } = useLoaderData();

  return (
    <>
      <h1>
        {post.id} - {post.title}
      </h1>
      <p>{post.body}</p>
    </>
  );
};

export default Post;

export const loaderPost = async ({ params }) => {
  const data = await fetch(
    "https://jsonplaceholdet.typicode.com/posts/${params.id}"
  );
  const post = await data.json();
  return { post };
};
