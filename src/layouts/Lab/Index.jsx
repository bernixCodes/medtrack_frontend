import { useEffect } from "react";
import Header from "../../components/home/Header/Index";

const LabPage = () => {
  useEffect(() => {
    document.title = "MedCare | Lab";
  }, []);
  return (
    <div>
      <Header />
    </div>
  );
};

export default LabPage;
