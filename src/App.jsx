import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import MainLayout from './Layout/MainLayout';
import { routes } from './routes/index.jsx';
import { toastConfig } from './config/toast';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: routes
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer {...toastConfig} />
    </div>
  );
}

export default App;