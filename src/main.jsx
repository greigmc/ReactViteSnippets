import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './Styles.css';
import ErrorPage from './Pages/ErrorPage';
import CustomNavbar from './Menu/NavBar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ServicePage from './Pages/ServicePage';
import ContactPage from './Pages/ContactPage';
import NavBarExamples from './Components/NavBar/NavBar';
import CarouselsExamples from './Components/Carousels/Carousels';
import CardsExample from './Components/Cards/Cards';
import AccordionExample from './Components/Accordion/Accordion';
import ButtonsExample from './Components/Buttons/Buttons';
import GridExample from './Components/Grid/Grid';
import Footer from './Components/Footer/Footer';
// import ButtonsExample from './Components/Buttons/Buttons';
// import App from './App.jsx';

// const router = createBrowserRouter (Routes, { basename: "/components/" })([

const router = createBrowserRouter([
  {
    element:  <CustomNavbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
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
      {
        path: "NavBar",
        element: <NavBarExamples />
      },
      {
        path: "Carousels",
        element: <CarouselsExamples />
      },
      {
        path: "Cards",
        element: <CardsExample />
      },
      {
        path: "Accordion",
        element: <AccordionExample />
      },
      {
        path: "Buttons",
        element: <ButtonsExample />
      },
      {
        path: "Grid",
        element: <GridExample />
      }
    ]
  },
],
{
  basename: '/components/'
});



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
)
