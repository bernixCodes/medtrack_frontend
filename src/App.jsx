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

AOS.init();
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "pharmacy",
    element: <PharmacyPage />,
    loader: drugsLoader,
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
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
