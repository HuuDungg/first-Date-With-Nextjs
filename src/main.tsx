import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import UserTable from './components/user/user.table.tsx';
import HeaderAdmin from './components/header/header.tsx';

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
      element:
        <>
          <HeaderAdmin></HeaderAdmin>
          <App></App>
        </>
    },
    {
      path: "/users",
      element:
        <>
          <HeaderAdmin></HeaderAdmin>
          <UserTable />
        </>
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
