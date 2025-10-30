import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Blog, { loaderBlogs } from "./Blog";
import NotFound from "./NotFound";
import { Children } from "react";
import Post from "./Post";

// Creamos el router y su configuracion basica.
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    Children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/abaut",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
        loader: loaderBlogs,
      },
      {
        path: "/blog/:id",
        element: <Post />,
        loader: loaderBlogs,
      },
    ],
  },
]);
