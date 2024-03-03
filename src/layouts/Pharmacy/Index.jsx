import { useEffect } from "react";
import PharmacyList from "../../components/Pharmacy/List/Index";
import Header from "../../components/home/Header/Index";

const PharmacyPage = () => {
  useEffect(() => {
    document.title = "MedCare | Pharmacy";
  }, []);
  return (
    <div>
      <Header />
      <PharmacyList />
    </div>
  );
};

export default PharmacyPage;
