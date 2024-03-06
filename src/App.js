import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {Home} from './components/Home/Home.js';
import {Navigation} from './components/Navigation/Navigation.js';
import {About} from './components/About/About.js';
import {Schedule} from './components/Schedule/Schedule.js';
import {Sponsors} from './components/Sponsors/Sponsors.js';
import './App.scss';

function App() {
  const router = createBrowserRouter([
    {
      path: 'https://montyhacksvii.netlify.app/',
      Component: Home,
    },
    {
      path: 'https://montyhacksvii.netlify.app/about',
      Component: About,
    },
    {
      path: 'https://montyhacksvii.netlify.app/schedule',
      Component: Schedule,
    },
    {
      path: 'https://montyhacksvii.netlify.app/sponsor',
      Component: Sponsors,
    },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <RouterProvider router={router}></RouterProvider>
      </header>
    </div>
  );
}

export default App;
