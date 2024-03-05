import { useEffect } from "react";
import Header from "../../components/home/Header/Index";
import LabList from "../../components/Lab/List/Index";
import { ToastContainer } from "react-toastify";

const LabPage = () => {
  useEffect(() => {
    document.title = "MedTrack | Lab";
  }, []);
  return (
    <div>
      <Header />
      <ToastContainer />
      <LabList />
    </div>
  );
};

export default LabPage;
