import { Link, Outlet, useLoaderData, useRevalidator } from "react-router-dom";
import Search from "../../globals/Search/Index";
import { fetchLabs, deleteLab } from "./../../../api/labs";
import { useEffect, useState } from "react";
import DeleteModal from "../../Pharmacy/DeleteModal/Index";
import Pagination from "../../globals/Pagination/Pagination";
import { toast } from "react-toastify";
import "./labList.css";

const LabList = () => {
  const allLabs = useLoaderData();
  const revalidator = useRevalidator();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [labIdToDelete, setLabIdToDelete] = useState(null);
  const [labToDelete, setLabToDelete] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredLabs, setFilteredLabs] = useState([]);
  const [filterByLabType, setFilterByLabType] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [listPerPage, setListPerPage] = useState(2);
  const lastIndex = currentPage * listPerPage;
  const firstIndex = lastIndex - listPerPage;
  const currentLists = filteredLabs.slice(firstIndex, lastIndex);

  const handleDeleteDrug = async (id, labName) => {
    setLabIdToDelete(id);
    setLabToDelete(labName);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    await deleteLab(labIdToDelete);
    revalidator.revalidate();
    toast.error("Lab deleted!");
    setShowDeleteModal(false);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
  };

  const handleSearch = async (searchTerm) => {
    setSearchTerm(searchTerm);
    setCurrentPage(1);
  };

  const handleFilterByLabType = (labType) => {
    setFilterByLabType(labType);
  };

  useEffect(() => {
    const filteredData = allLabs.filter((lab) =>
      lab.labName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(filteredData);
    if (filterByLabType) {
      const filteredByType = filteredData.filter(
        (lab) => lab.labType == filterByLabType
      );
      setFilteredLabs(filteredByType);
    } else {
      setFilteredLabs(filteredData);
    }
  }, [allLabs, searchTerm, filterByLabType]);
  
  return (
    <div className="pharm-list">
      <Outlet />
      <div className="pharm-actions">
        <Link to={"/labs/lab-stats"}>
          <button>View Stats</button>
        </Link>

        <Link to={"/labs/add-lab"}>
          <button>Add Lab Item</button>
        </Link>
      </div>

      {showDeleteModal && (
        <DeleteModal
          onCancel={cancelDelete}
          onConfirm={confirmDelete}
          drugToDelete={labToDelete}
        />
      )}

      <div className="pharm-data">
        <div className="search-box">
          <Search onSearch={handleSearch} />
        </div>

        {filteredLabs && filteredLabs.length > 0 ? (
          <>
            <table>
              <thead>
                <tr>
                  <th scope="col" className="col-1">
                    Lab Item
                  </th>
                  <th scope="col" className="lab-type">
                    Lab Type{" "}
                    <div className="filter-dropdown">
                      <button className="filter-button">
                        <i className="fa fa-filter" aria-hidden="true"></i>
                      </button>
                      <div className="dropdown-content">
                        <button onClick={() => handleFilterByLabType(null)}>
                          All
                        </button>
                        <button
                          onClick={() => handleFilterByLabType("Radiology")}
                        >
                          Radiology
                        </button>
                        <button
                          onClick={() => handleFilterByLabType("Laboratory")}
                        >
                          Laboratory
                        </button>
                      </div>
                    </div>
                  </th>
                  <th scope="col">Category</th>
                  <th scope="col">Sub Category</th>
                  <th scope="col">Lab Code</th>
                  <th scope="col">Price (GHc)</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentLists.map((data) => (
                  <tr key={data._id} style={{ cursor: "pointer" }}>
                    <td data-label="Lab Item">{data.labName}</td>
                    <td data-label="Lab Type">{data.labType}</td>
                    <td data-label="Category">
                      {data.mainCategory ? data.mainCategory : "----"}
                    </td>
                    <td data-label="Sub Category">
                      {data.subCategory ? data.subCategory : "----"}
                    </td>
                    <td data-label="Lab Code">{data.labCode}</td>
                    <td data-label="Price">{data.labPrice}</td>
                    <td data-label="" className="action-icons">
                      <Link to={`/labs/lab-detail/${data._id}`}>
                        <i
                          style={{ color: "dimgrey" }}
                          className="fa fa-eye"
                          aria-hidden="true"
                        ></i>
                      </Link>
                      <Link to={`/labs/edit-lab/${data._id}`}>
                        <i className="fas fa-edit"></i>
                      </Link>
                      <div
                        onClick={() => handleDeleteDrug(data._id, data.labName)}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              totalLists={filteredLabs.length}
              listPerPage={listPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </>
        ) : (
          <>
            <p>No labs available</p>
          </>
        )}
      </div>
    </div>
  );
};

export default LabList;

// eslint-disable-next-line react-refresh/only-export-components
export async function labsLoader() {
  const response = await fetchLabs();
  const res = await response.json();
  if (!response.ok) {
    console.log(res.mgs);
    return null;
  }
  return res;
}
