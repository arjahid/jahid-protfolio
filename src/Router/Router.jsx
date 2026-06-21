import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Layout from '../Layout/layout'
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../page/Skill';
import Projects from '../page/project';
import Contact from '../page/contact';
 
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/about', element: <About /> },
      {path :'/skills',element :<Skills></Skills>},
      {path :'/projects',element :<Projects></Projects>},
      {path :'/contact',element :<Contact></Contact>},
    ],
  },
]);
 
export default router;