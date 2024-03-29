/* eslint-disable no-unused-vars */
import { Link, Outlet, useLoaderData, useRevalidator } from "react-router-dom";
import { useEffect, useState } from "react";
import "./pharmList.css";
import DeleteModal from "../DeleteModal/Index";
import Pagination from "../../globals/Pagination/Pagination";
import Search from "./../../globals/Search/Index";
import { fetchDrugs, deleteDrug } from "../../../api/drugs";
import { toast } from "react-toastify";

const PharmacyList = () => {
  const allDrugs = useLoaderData();
  const revalidator = useRevalidator();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [drugIdToDelete, setDrugIdToDelete] = useState(null);
  const [drugToDelete, setDrugToDelete] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDrugs, setFilteredDrugs] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [listPerPage, setListPerPage] = useState(10);
  const lastIndex = currentPage * listPerPage;
  const firstIndex = lastIndex - listPerPage;
  const currentLists = filteredDrugs.slice(firstIndex, lastIndex);

  function truncateDescription(description, maxWords = 30) {
    if (description.length > maxWords) {
      return description.slice(0, maxWords) + "...";
    } else {
      return description;
    }
  }

  const handleDeleteDrug = async (id, drugName) => {
    setDrugIdToDelete(id);
    setDrugToDelete(drugName);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    await deleteDrug(drugIdToDelete);
    revalidator.revalidate();
    toast.error("Drug deleted!");
    setShowDeleteModal(false);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
  };

  const handleSearch = async (searchTerm) => {
    setSearchTerm(searchTerm);
    setCurrentPage(1);
  };

  useEffect(() => {
    const filteredData = allDrugs.filter(
      (drug) =>
        drug.drugName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        drug.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        drug.drugCode.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDrugs(filteredData);
  }, [allDrugs, searchTerm]);


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
        <div className="search-box">
          <Search onSearch={handleSearch} />
        </div>

        <>
          {filteredDrugs && filteredDrugs.length > 0 ? (
            <>
              <table>
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
                  {currentLists.map((drug) => (
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
                          onClick={() =>
                            handleDeleteDrug(drug._id, drug.drugName)
                          }
                        >
                          <i className="fas fa-trash-alt"></i>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Pagination
                totalLists={filteredDrugs.length}
                listPerPage={listPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </>
          ) : (
            <>
              <p>No drugs available</p>
            </>
          )}
        </>
      </div>
    </div>
  );
};

export default PharmacyList;

// eslint-disable-next-line react-refresh/only-export-components
export async function drugsLoader() {
  const response = await fetchDrugs();
  const res = await response.json();
  if (!response.ok) {
    console.log(res.mgs);
    return null;
  }
  return res;
}