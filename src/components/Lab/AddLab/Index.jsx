import { Link, redirect } from "react-router-dom";
import LabForm from "./LabForm";
import { addLab, editLab } from "../../../api/labs";
import { toast } from "react-toastify";

const AddLab = () => {
  return (
    <div className="wrapper">
      <div className="modal">
        <h1>Add Lab Item</h1>
        <LabForm method={"post"} />
        <Link to="/labs" className="modal__close">
          &times;
        </Link>
      </div>
    </div>
  );
};

export default AddLab;

// eslint-disable-next-line react-refresh/only-export-components
export async function addOrEditLabAction({ request, params }) {
  const method = request.method;
  const data = await request.formData();

  const labData = {
    labName: data.get("name"),
    labType: data.get("type"),
    mainCategory: data.get("mainCategory"),
    subCategory: data.get("subCategory"),
    labCode: data.get("code"),
    labPrice: data.get("price"),
  };

  if (method === "PUT") {
    const id = params.id;
    const response = await editLab(id, labData);
    const data = await response.json();
  
    if (!response.ok) {
      toast.error(data.mgs);
      return null;
    }
    toast.info("Edited successfully", {
      autoClose: 3000,
    });
  } else {
    const response = await addLab(labData);
    const data = await response.json();
   
    if (!response.ok) {
      toast.error(data.mgs);
      return null;
    }
    toast.info("Added successfully", {
      autoClose: 3000,
    });
  }

  return redirect("/labs");
}
