import { createBrowserRouter, Navigate } from "react-router-dom";

import Login from "./Login.jsx";
import Home from "./Home.jsx";
import Blog from "./Blog.jsx";
import Post from "./Post.jsx";
import NotFound from "./NotFound.jsx";

import { loaderBlogs } from "./blog.loader.js";
import { loaderPost } from "./post.loader.js";

import PrivateRoute from "../config/router/PrivateRoute.jsx";
import PublicRoute from "../config/router/PublicRoute.jsx";
import LayoutPublic from "../Layout/LayoutPublic.jsx";

import { ROOT, LOGIN as LOGIN_PATH, PRIVATE } from "../config/router/paths.js";

export const router = createBrowserRouter([
  // Público: SOLO /login (sin layout)
  {
    path: ROOT,
    element: <PublicRoute />,
    children: [
      { index: true, element: <Navigate to={LOGIN_PATH} replace /> }, // / -> /login
      {
        path: LOGIN_PATH.slice(1), // "login"
        element: <Login />,
        errorElement: <NotFound />,
      },
    ],
  },

  // Privado: todo debajo de /app
  {
    path: PRIVATE,
    element: <PrivateRoute />,
    children: [
      {
        element: <LayoutPublic />, // navbar/layout privado
        errorElement: <NotFound />,
        children: [
          { index: true, element: <Home /> }, // /app
          { path: "blog", element: <Blog />, loader: loaderBlogs }, // /app/blog
          { path: "blog/:id", element: <Post />, loader: loaderPost }, // /app/blog/123
        ],
      },
    ],
  },

  // Cualquier otra ruta -> /login
  { path: "*", element: <Navigate to={LOGIN_PATH} replace /> },
]);
