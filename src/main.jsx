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
// Bootstrap Pages
import NavBarExamples from './Components/Bootstrap/NavBar/NavBar';
import CarouselsExamples from './Components/Bootstrap/Carousels/Carousels';
import CardsExample from './Components/Bootstrap/Cards/Cards';
import AccordionExample from './Components/Bootstrap/Accordion/Accordion';
import ButtonsExample from './Components/Bootstrap/Buttons/Buttons';
import GridExample from './Components/Bootstrap/Grid/Grid';
import Footer from './Footer/Footer';
import StacksExamples from './Components/Bootstrap/Stacks/Stacks';
import FormsExamples from './Components/Bootstrap/Forms/Forms';
import StepperExample from './Components/Material-UI/Stepper/Stepper';
import MultiCarouselExample from './Components/Bootstrap/Carousels/MultiCarousel.jsx';
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
        path: "MultiCarousels",
        element: <MultiCarouselExample />
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
        path: "Forms",
        element: <FormsExamples />
      },
      {
        path: "Buttons",
        element: <ButtonsExample />
      },
      {
        path: "Stepper",
        element: <StepperExample />
      },
      {
        path: "Grid",
        element: <GridExample />
      },
      {
        path: "Stack",
        element: <StacksExamples />
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
