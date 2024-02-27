import { Link, Outlet, useLoaderData } from "react-router-dom";
import { useState } from "react";
import "./pharmList.css";
import DeleteModal from "../DeleteModal/Index";

const PharmacyList = () => {
  const drugs = useLoaderData();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [drugIdToDelete, setDrugIdToDelete] = useState(null);
  const [drugToDelete, setDrugToDelete] = useState(null);

  function truncateDescription(description, maxWords = 25) {
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

  const handleDeleteDrug = async (id, drugName) => {
    setDrugIdToDelete(id);
    setDrugToDelete(drugName);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    await deleteAction(drugIdToDelete);
    setShowDeleteModal(false);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
  };

  return (
    <div className="pharm-list">
      <Outlet />

      <div className="pharm-actions">
        <Link to={"drug-stats"}>
          <button>View Stats</button>
        </Link>

        <Link to={"add-drug"}>
          <button>Add Drug</button>
        </Link>
      </div>
      {showDeleteModal && (
        <DeleteModal
          onCancel={cancelDelete}
          onConfirm={confirmDelete}
          drugToDelete={drugToDelete}
        />
      )}
      <div className="pharm-data">
        {drugs && drugs.length > 0 ? (
          <table>
            <caption>
              {/* <i className="fas fa-search" aria-hidden="true"></i> */}
            </caption>
            <thead>
              <tr>
                <th scope="col" className="col-1">
                  Drug Name
                </th>
                <th scope="col" className="col-2">
                  Description
                </th>
                <th scope="col">Drug Code</th>
                <th scope="col">Pricing Unit</th>
                <th scope="col">Price (GHc)</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {drugs.map((drug) => (
                <tr key={drug._id} style={{ cursor: "pointer" }}>
                  <td data-label="Drug Name">{drug.drugName}</td>
                  <td data-label="Description" title={drug.description}>
                    {truncateDescription(`${drug.description}`)}
                  </td>
                  <td data-label="Drug Code">{drug.drugCode}</td>
                  <td data-label="Unit of Pricing">{drug.unitPrice}</td>
                  <td data-label="Price">{drug.drugPrice}</td>
                  <td data-label="" className="action-icons">
                    <Link to={`/pharmacy/drug-detail/${drug._id}`}>
                      <i
                        style={{ color: "dimgrey" }}
                        className="fa fa-eye"
                        aria-hidden="true"
                      ></i>
                    </Link>
                    <Link to={`/pharmacy/edit-drug/${drug._id}`}>
                      <i className="fas fa-edit"></i>
                    </Link>
                    <div
                      onClick={() => handleDeleteDrug(drug._id, drug.drugName)}
                    >
                      <i className="fas fa-trash-alt"></i>
                    </div>
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
