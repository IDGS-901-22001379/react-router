import React from "react";
import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      NotFound
      <h1>404</h1>
      <p>Page nor found</p>
      <p> {error.statusText || error.message} </p>
      <Link to="/">Black home</Link>
    </div>
  );
};

export default NotFound;
