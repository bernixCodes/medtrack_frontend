import { useEffect } from "react";
import PharmacyList from "../../components/Pharmacy/List/Index";
import Header from "../../components/home/Header/Index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PharmacyPage = () => {
  useEffect(() => {
    document.title = "MedTrack | Pharmacy";
  }, []);
  return (
    <div>
      <Header />
      <ToastContainer />
      <PharmacyList />
    </div>
  );
};

export default PharmacyPage;
