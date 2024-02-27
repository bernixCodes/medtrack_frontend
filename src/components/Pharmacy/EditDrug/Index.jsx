/* eslint-disable react-refresh/only-export-components */
import { Form, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../AddDrug/addDrug.css";
import "./EditDrug.css";

const handleEditDrug = async (e, drugId, setSubmitting) => {
  e.preventDefault();
  setSubmitting(false);
  let formData = new FormData(e.target);
  let data = {
    drugName: formData.get("drugName"),
    description: formData.get("description"),
    drugCode: formData.get("drugCode"),
    unitPrice: formData.get("unitPrice"),
    drugPrice: formData.get("drugPrice"),
    id: drugId,
  };
  await editDrug(data);
  setSubmitting(true);
};

export const editDrug = async (data) => {
  const url = `https://medtrack-restapi.onrender.com/api/drugs/${data.id}`;
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: "bernice",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const res = await response.json();
  window.location.href = "/pharmacy";
  return res;
};

const EditDrug = () => {
  const { drugId } = useParams();
  const [drug, setDrug] = useState({
    drugName: "",
    description: "",
    drugCode: "",
    unitPrice: "",
    drugPrice: "",
  });
  const [loading, setLoading] = useState(true);
  const [submiting, setSubmitting] = useState(false);

  useEffect(() => {
    const url = `https://medtrack-restapi.onrender.com/api/drugs/${drugId}`;

    const drugDetails = async () => {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: "bernice",
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setDrug(data);
      setLoading(false);
      return data;
    };
    drugDetails();
  }, [drugId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setDrug((prevDrug) => ({
      ...prevDrug,
      [name]: value,
    }));
  };

  return (
    <div className="wrapper">
      <div className="modal">
        {loading ? (
          <>
            <div className="spinner-overlay">
              <div className="spinner"></div>
            </div>
          </>
        ) : (
          <>
            <h1>Edit Drug</h1>

            <Form
              method="put"
              onSubmit={(e) => handleEditDrug(e, drugId, setSubmitting)}
              className="form"
            >
              <div className="form-group">
                <label htmlFor="name">Drug Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Drug Name"
                  name="drugName"
                  required="required"
                  value={drug.drugName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="code">Drug Code</label>
                <input
                  type="text"
                  id="code"
                  placeholder="Drug Code"
                  name="drugCode"
                  required="required"
                  value={drug.drugCode}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <div className="select">
                  <label htmlFor="unit">Unit of Pricing</label>
                  <select
                    name="unitPrice"
                    value={drug.unitPrice}
                    onChange={handleInputChange}
                  >
                    <option value={""}>Select</option>
                    <option value={"Tablet"}>Tablet</option>
                    <option value={"Capsule"}>Capsule</option>
                    <option value={"Vials"}>Vials</option>
                    <option value={"Ampule"}>Ampule</option>
                  </select>
                </div>

                <div className="select ml-1">
                  <label htmlFor="price">Drug Price</label>
                  <input
                    type="text"
                    id="price"
                    placeholder="Drug Price"
                    name="drugPrice"
                    required="required"
                    value={drug.drugPrice}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  placeholder="Drug Description"
                  name="description"
                  rows={8}
                  value={drug.description}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <div className="form-group">
                <button type="submit">
                  {" "}
                  {submiting ? "Subitting..." : "Submit"}
                </button>
              </div>
            </Form>
            <a href="/pharmacy" className="modal__close">
              &times;
            </a>
            {/* </div> */}
          </>
        )}
      </div>
    </div>
  );
};

export default EditDrug;
