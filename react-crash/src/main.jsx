import React from "react";
import ReactDOM from "react-dom/client";
import Post, { loader as postLoader } from "./routes/Post.jsx";
import PostDetails, {
  loader as postDetailLoader,
} from "./components/PostDetails.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import "./index.css";
import NewPost, {
  action as newPostAction,
} from "./routes/NewPost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Post />,
        loader: postLoader,
        children: [
          {
            path: "/create-post",
            element: <NewPost />,
            action: newPostAction,
          },
          {
            path: "/:id",
            element: <PostDetails />,
            loader: postDetailLoader,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
