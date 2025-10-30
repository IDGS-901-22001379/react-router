import React from "react";
import { useLoaderData } from "react-router-dom";

const Blog = () => {
  const { blogs } = useLoaderData();
  console.log(blogs);

  return (
    <ul>
      {blogs.length > 0 ? (
        blogs.map((blogs) => (
          <li key={blogs.id}>
            <link to={"/blog/${blog.id}"}>{blogs.title}</link>
          </li>
        ))
      ) : (
        <li>No blogs found </li>
      )}
    </ul>
  );
};

export default Blog;

export const loaderBlogs = async () => {
  const data = await fetch("https://jsonplaceholdet.typicode.com/posts");
  const blogs = await data.json();
  return { blogs };
};
