import { useEffect } from "react";
import Header from "../../components/home/Header/Index";
import LabList from "../../components/Lab/List/Index";

const LabPage = () => {
  useEffect(() => {
    document.title = "MedCare | Lab";
  }, []);
  return (
    <div>
      <Header />
      <LabList />
    </div>
  );
};

export default LabPage;
