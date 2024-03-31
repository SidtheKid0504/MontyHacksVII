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
      path: '/',
      Component: Home,
    },
    {
      path: '/about',
      Component: About,
    },
    {
      path: '/schedule',
      Component: Schedule,
    },
    {
      path: '/sponsor',
      Component: Sponsors,
    }
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
