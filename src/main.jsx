import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './Styles.css';
import ErrorPage from './Pages/ErrorPage';
import CustomNavbar from './Menu/NavBar.jsx';
import HomePage from './Pages/HomePage.jsx';
import AboutPage from './Pages/AboutPage.jsx';
import ServicePage from './Pages/ServicePage.jsx';
import ContactPage from './Pages/ContactPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <CustomNavbar />,
    // element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "HomePage",
        element: <HomePage />
    
      },
      {
        path: "AboutPage",
        element: <AboutPage />
      
      },
      {
        path: "ServicePage",
        element: <ServicePage />
      
      },
      {
        path: "ContactPage",
        element: <ContactPage />
      
      },
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
