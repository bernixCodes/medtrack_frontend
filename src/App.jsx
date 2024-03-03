import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./layouts/Home/Index";
import PharmacyPage from "./layouts/Pharmacy/Index";
import AddDrug, {
  addOrEditDrugAction,
} from "./components/Pharmacy/AddDrug/Index";
import EditDrug, { drugLoader } from "./components/Pharmacy/EditDrug/Index";
import AOS from "aos";
import "aos/dist/aos.css";
import PharmacyStats from "./components/Pharmacy/PharmacyStats/Index";
import DrugDetail from "./components/Pharmacy/Details/Index";
import LabPage from "./layouts/Lab/Index";
import { drugsLoader } from "./components/Pharmacy/List/Index";
import ErrorPage from "./layouts/Error";
import { labsLoader } from "./components/Lab/List/Index";
import AddLab, { addOrEditLabAction } from "./components/Lab/AddLab/Index";
import LabDetail from "./components/Lab/LabDetail/Index";
import EditLab, { labLoader } from "./components/Lab/EditLab/Index";

AOS.init();
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },

  {
    path: "pharmacy",
    element: <PharmacyPage />,
    loader: drugsLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "add-drug",
        element: <AddDrug />,
        action: addOrEditDrugAction,
      },
      {
        path: "edit-drug/:drugId",
        element: <EditDrug />,
        loader: drugLoader,
        action: addOrEditDrugAction,
      },
      {
        path: "drug-stats",
        element: <PharmacyStats />,
      },
      {
        path: "drug-detail/:drugId",
        element: <DrugDetail />,
        loader: drugLoader,
      },
    ],
  },

  {
    path: "labs",
    element: <LabPage />,
    loader: labsLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "add-lab",
        element: <AddLab />,
        action: addOrEditLabAction,
      },
      {
        path: "edit-lab/:id",
        element: <EditLab />,
        loader: labLoader,
        action: addOrEditLabAction,
      },
      {
        path: "lab-stats",
        element: <p>Lab Stats</p>,
      },
      {
        path: "lab-detail/:id",
        element: <LabDetail />,
        loader: labLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
