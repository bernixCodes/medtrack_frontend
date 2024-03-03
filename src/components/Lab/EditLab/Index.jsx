import { Await, Link, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import { fetchLab } from "../../../api/labs";
import LabForm from "../AddLab/LabForm";

const EditLab = () => {
  const lab = useLoaderData();
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
          <Await resolve={lab}>
            {(loadedLab) => (
              <>
                <h1>Edit Drug</h1>
                <LabForm method={"put"} lab={loadedLab} />
                <Link to="/labs" className="modal__close">
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
export default EditLab;

// eslint-disable-next-line react-refresh/only-export-components
export async function labLoader({ params }) {
  const id = params.id;
  const response = await fetchLab(id);
  const res = await response.json();
  if (!response.ok) {
    console.log(res.mgs);
    return null;
  }
  return res;
}
