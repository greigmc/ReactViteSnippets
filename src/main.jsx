import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./Style.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Import React Query
import ErrorPage from "./Pages/ErrorPage";
import CustomNavbar from "./Menu/NavBar";
import HomePage from "./Pages/HomePage";
// Bootstrap Pages
import NavBarExamples from "./Components/Bootstrap/NavBar/NavBar";
import CarouselsExamples from "./Components/Bootstrap/Carousels/Carousels";
import CardsExample from "./Components/Bootstrap/Cards/Cards";
import AccordionExample from "./Components/Bootstrap/Accordion/Accordion";
import ButtonsExample from "./Components/Bootstrap/Buttons/Buttons";
import GridExample from "./Components/Bootstrap/Grid/Grid";
import Footer from "./Footer/Footer";
import StacksExamples from "./Components/Bootstrap/Stacks/Stacks";
import FormsExamples from "./Components/Bootstrap/Forms/Form.jsx";
import MultiCarouselExample from "./Components/Bootstrap/Carousels/MultiCarousel.jsx";
import MultiStepForm from "./Components/Bootstrap/Forms/MultiStepForm.jsx";
import MultiStepFormVal from "./Components/Bootstrap/Forms/MultiStepFormVal.jsx";
import ColGird from "./Components/Bootstrap/Grid/ColGird.jsx";
import ImageOverlay from "./Components/Bootstrap/Images/ImageOverlay.jsx";
// Material UI
// import StepperExample from './Components/Material-UI/Stepper/Stepper';
import CarouselMui from "./Components/Material-UI/Carousel/CarouselMui.jsx";
import GridMui from "./Components/Material-UI/Grid/GridMui.jsx";
import StackMui from "./Components/Material-UI/Stack/StackMui.jsx";
import ImageListMui from "./Components/Material-UI/ImageList/ImageList.jsx";
import News from "./Components/Blog/News.jsx";
import Api from "./Components/api/api.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  [
    {
      element: <CustomNavbar />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "NavBar", element: <NavBarExamples /> },
        { path: "Carousels", element: <CarouselsExamples /> },
        { path: "MultiCarousels", element: <MultiCarouselExample /> },
        { path: "Cards", element: <CardsExample /> },
        { path: "Accordion", element: <AccordionExample /> },
        { path: "Forms", element: <FormsExamples /> },
        { path: "Buttons", element: <ButtonsExample /> },
        { path: "Grid", element: <GridExample /> },
        { path: "Stack", element: <StacksExamples /> },
        { path: "ColGrid", element: <ColGird /> },
        { path: "ImageOverlay", element: <ImageOverlay /> },
        // { path: "Stepper", element: <StepperExample /> },
        { path: "CarouselMui", element: <CarouselMui /> },
        { path: "GridMui", element: <GridMui /> },
        { path: "StackMui", element: <StackMui /> },
        { path: "ImageList", element: <ImageListMui /> },
        { path: "News", element: <News /> },
        { path: "Api", element: <Api /> },
        { path: "MultiStepForm", element: <MultiStepForm /> },
        { path: "MultiStepFormVal", element: <MultiStepFormVal /> },
      ],
    },
  ],
  {
    basename: "/components/",
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Footer />
    </QueryClientProvider>
  </React.StrictMode>
);
