import { Await, Link, useLoaderData } from "react-router-dom";
import "../AddDrug/addDrug.css";
import "./EditDrug.css";
import { fetchDrug } from "../../../api/drugs";
import DrugForm from "../AddDrug/DrugForm";
import { Suspense } from "react";

const EditDrug = () => {
  const drug = useLoaderData();
  return (
    <div className="wrapper">
      <div className="modal">
        <Suspense
          fallback={
            <div className="spinner-overlay">
              <div className="spinner"></div>
            </div>
          }
        >
          <Await resolve={drug}>
            {(loadedDrug) => (
              <>
                <h1>Edit Drug</h1>
                <DrugForm method={"put"} drug={loadedDrug} />
                <Link to="/pharmacy" className="modal__close">
                  &times;
                </Link>
              </>
            )}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};
export default EditDrug;

// eslint-disable-next-line react-refresh/only-export-components
export async function drugLoader({ params }) {
  const drugId = params.drugId;
  const response = await fetchDrug(drugId);
  const res = await response.json();
  if (!response.ok) {
    console.log(res.mgs);
    return null;
  }
  return res;
}
