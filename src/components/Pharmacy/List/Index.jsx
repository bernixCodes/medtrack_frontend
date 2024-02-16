import { Link, Outlet, useLoaderData } from "react-router-dom";
import "./pharmList.css";

const PharmacyList = () => {
  const drugs = useLoaderData();
  console.log(drugs);

  function truncateDescription(description, maxWords = 12) {
    if (description.length > maxWords) {
      return description.slice(0, maxWords) + "...";
    } else {
      return description;
    }
  }
  const deleteAction = async (id) => {
    const data = await fetch(
      `https://medtrack-restapi.onrender.com/api/drugs/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bernice",
        },
      }
    );
    const res = await data.json();
    window.location.href = "/pharmacy";
    return res;
  };

  const handleDeleteDrug = async (id) => {
    const continueDelete = confirm(
      "Are you sure you want to delete this record? "
    );
    if (continueDelete == true) {
      await deleteAction(id);
    }
  };

  return (
    <div className="pharm-list">
      <Outlet />

      <div className="pharm-actions">
        <button>View Stats</button>
        <Link to={"add-drug"}>
          <button>Add Drug</button>
        </Link>
      </div>

      <div className="pharm-data">
        {drugs && drugs.length > 0 ? (
          <table>
            <caption>
              {/* <i className="fas fa-search" aria-hidden="true"></i> */}
            </caption>
            <thead>
              <tr>
                <th scope="col">Drug Name</th>
                <th scope="col">Description</th>
                <th scope="col">Drug Code</th>
                <th scope="col">Pricing Unit</th>
                <th scope="col">Price (GHc)</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {drugs.map((drug) => (
                <tr key={drug._id}>
                  <td data-label="Drug Name">{drug.drugName}</td>
                  <td data-label="Description" title={drug.description}>
                    {truncateDescription(`${drug.description}`)}
                  </td>
                  <td data-label="Drug Code">{drug.drugCode}</td>
                  <td data-label="Unit of Pricing">{drug.unitPrice}</td>
                  <td data-label="Period">{drug.drugPrice}</td>
                  <td data-label="" className="action-icons">
                    <div onClick={() => handleDeleteDrug(drug._id)}>
                      <i className="fas fa-trash-alt"></i>
                    </div>
                    <Link>
                      <i className="fas fa-edit"></i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No drug available</p>
        )}
      </div>
    </div>
  );
};

export default PharmacyList;
