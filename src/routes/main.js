import React from 'react';
import {
  Redirect
} from 'react-router-dom';

import BaseLayout from "../components/BaseLayout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
    layout: BaseLayout
  },
  {
    path: "/contact",
    component: Contact,
    layout: BaseLayout
  },
  {
    path: "",
    layout: BaseLayout,
    component: () => (
      <Redirect to='/' />
    ),
  },
];

export default routes;
