/* eslint-disable react-refresh/only-export-components */
import { Form, Link } from "react-router-dom";
import "./addDrug.css";
import { useState } from "react";

// import { CSSTransition } from "react-transition-group";

export const AddDrugAction = async (data) => {
  const url = "https://medtrack-restapi.onrender.com/api/drugs";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: "bernice",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const res = await response.json();
  window.location.replace("/pharmacy");
  return res;
};

const AddDrug = () => {
  const [loading, setLoading] = useState(false);
  const [submiting, setSubmitting] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  const handleAddDrug = async (e) => {
    e.preventDefault();
    setSubmitting(false);
    let formData = new FormData(e.target);
    let data = {
      drugName: formData.get("name"),
      description: formData.get("description"),
      drugCode: formData.get("code"),
      unitPrice: formData.get("unit"),
      drugPrice: formData.get("price"),
    };

    await AddDrugAction(data);

    setSubmitting(true);
  };

  return (
    <div className="wrapper">
      <div className="modal">
        <h1>Add Drug</h1>

        <Form
          method="post"
          action="/pharmacy/add-drug"
          onSubmit={handleAddDrug}
          className="form"
        >
          <div className="form-group">
            <label htmlFor="name">Drug Name</label>
            <input
              type="text"
              id="name"
              placeholder="Drug Name"
              name="name"
              required="required"
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label htmlFor="code">Drug Code</label>
            <input
              type="text"
              id="code"
              placeholder="Drug Code"
              name="code"
              required="required"
              autoComplete="off"
            />
          </div>

          <div className="form-group">
            <div className="select">
              <label htmlFor="unit">Unit of Pricing</label>
              <select name="unit">
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
                name="price"
                required="required"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              placeholder="Drug Description"
              name="description"
              rows={8}
            ></textarea>
          </div>

          <div className="form-group">
            <button
              className={`button-animation ${loading ? "loading" : ""}`}
              onClick={handleClick}
            >
              {" "}
              {submiting ? "Adding..." : "Add Drug"}
            </button>
          </div>
        </Form>
        <Link to="/pharmacy" className="modal__close">
          &times;
        </Link>
        {/* </div> */}
      </div>
    </div>
  );
};

export default AddDrug;
