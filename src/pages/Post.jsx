import { useLoaderData } from "react-router-dom";

export default function Post() {
  const { post } = useLoaderData();
  return (
    <>
      <h1>
        {post.id} - {post.title}
      </h1>
      <p>{post.body}</p>
    </>
  );
}
