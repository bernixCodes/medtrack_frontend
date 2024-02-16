import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./layouts/Home/Index";
import PharmacyPage from "./layouts/Pharmacy/Index";
import AddDrug, { addDrugAction } from "./components/Pharmacy/AddDrug/Index";

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
    ],
  },

  {
    path: "labs",
    element: (
      <div>
        <h1 style={{ color: "red" }}>Labs</h1>
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
