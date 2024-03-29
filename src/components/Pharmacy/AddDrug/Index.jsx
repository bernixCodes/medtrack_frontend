import { Link, redirect } from "react-router-dom";
import { addDrug, editDrug } from "../../../api/drugs";
import DrugForm from "./DrugForm";
import "./addDrug.css";
import { toast } from "react-toastify";

const AddDrug = () => {
  return (
    <div className="wrapper">
      <div className="modal">
        <h1>Add Drug</h1>
        <DrugForm method={"post"} />
        <Link to="/pharmacy" className="modal__close">
          &times;
        </Link>
      </div>
    </div>
  );
};

export default AddDrug;

// eslint-disable-next-line react-refresh/only-export-components
export async function addOrEditDrugAction({ request, params }) {
  const method = request.method;
  const data = await request.formData();

  const drugData = {
    drugName: data.get("name"),
    description: data.get("description"),
    drugCode: data.get("code"),
    unitPrice: data.get("unit"),
    drugPrice: data.get("price"),
  };

  if (method === "PUT") {
    const drugId = params.drugId;
    const response = await editDrug(drugId, drugData);
    const data = await response.json();

    if (!response.ok) {
      toast.error(data.mgs);
      return null;
    }
    toast.info("Edited successfully", {
      autoClose: 3000,
    });
  } else {
    const response = await addDrug(drugData);
    const data = await response.json();
    if (!response.ok) {
      toast.error(data.mgs);
      return null;
    }
    toast.info("Added successfully", {
      autoClose: 3000,
    });
  }


  return redirect("/pharmacy");
}
