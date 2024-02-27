import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./layouts/Home/Index";
import PharmacyPage from "./layouts/Pharmacy/Index";
import AddDrug, { addDrugAction } from "./components/Pharmacy/AddDrug/Index";
import EditDrug, { editDrug } from "./components/Pharmacy/EditDrug/Index";
import AOS from "aos";
import "aos/dist/aos.css";
import PharmacyStats from "./components/Pharmacy/PharmacyStats/Index";
import DrugDetail from "./components/Pharmacy/Details/Index";
import LabPage from "./layouts/Lab/Index";

AOS.init();
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "pharmacy",
    element: <PharmacyPage />,
    loader: async () => {
      const data = await fetch(
        "https://medtrack-restapi.onrender.com/api/drugs",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "bernice",
          },
        }
      );
      const res = await data.json();
      return res;
    },
    children: [
      {
        path: "add-drug",
        element: <AddDrug />,
        action: addDrugAction,
      },
      {
        path: "edit-drug/:drugId",
        element: <EditDrug />,
        action: editDrug,
      },
      {
        path: "drug-stats",
        element: <PharmacyStats />,
      },
      {
        path: "drug-detail/:id",
        element: <DrugDetail />,
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
