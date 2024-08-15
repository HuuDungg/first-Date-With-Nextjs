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
import UserTable from './components/user/user.table.tsx';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <div>
          <h1>Hello World</h1>
          <Link to={'/home'}>Home visit</Link> <br />
          <Link to={'/users'}>users visit</Link><br />
          <Link to={'/subjects'}>subject visit</Link><br />
          <Link to={'/students'}>student visit</Link><br />
        </div>
      ),
    },
    {
      path: "/home",
      element: <App></App>
    },
    {
      path: "/users",
      element: <UserTable />
    },
    {
      path: "/subjects",
      element: <div>this is users subjcets</div>
    },
    {
      path: "/students",
      element: <div>this is users students</div>
    },
  ]
);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
