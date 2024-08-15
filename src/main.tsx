import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <div>
          <h1>Hello World</h1>
          <Link to={'/home'}>Home visit</Link>
        </div>
      ),
    },
    {
      path: "/home",
      element: <App></App>
    },
  ]
);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
