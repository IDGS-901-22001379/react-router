import { Link, useLoaderData } from "react-router-dom";

export default function Blog() {
  const { blogs } = useLoaderData();
  return (
    <ul>
      {blogs?.length ? (
        blogs.map((b) => (
          <li key={b.id}>
            <Link to={`/blog/${b.id}`}>{b.title}</Link>
          </li>
        ))
      ) : (
        <li>No blogs found</li>
      )}
    </ul>
  );
}
