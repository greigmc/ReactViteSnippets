import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './Style.css';
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
import FormsExamples from './Components/Bootstrap/Forms/Form.jsx';
import StepperExample from './Components/Material-UI/Stepper/Stepper';
import MultiCarouselExample from './Components/Bootstrap/Carousels/MultiCarousel.jsx';
import MultiStepForm from './Components/Bootstrap/Forms/MultiStepForm.jsx';
// import MultiForm from './Components/Bootstrap/Forms/MultiForm.jsx';
import MultiStepFormVal from './Components/Bootstrap/Forms/MultiStepFormVal.jsx';
// import PropsExample from './Components/PropsExample/PropsExample.jsx';
// import Props from './Components/Bootstrap/Grid/Props/Props.jsx';
import ColGird from './Components/Bootstrap/Grid/ColGird.jsx';

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
      // {
      //   path: "MultiStepForm",
      //   element: <MultiStepForm />
      // },
      // {
      //   path: "MultiStep",
      //   element: <MultiForm/>
      // },
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
      // {
      //   path: "Props",
      //   element: <Props />

      // },
      {
        path: "Stack",
        element: <StacksExamples />
      },
      {
        path: "ColGrid",
        element: <ColGird />
      }
    ]
  },
  {
    path: "MultiStepForm",
    element: <MultiStepForm />
  },

  {
    path: "MultiStepFormVal",
    element: <MultiStepFormVal />
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
