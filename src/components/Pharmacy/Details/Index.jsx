/* eslint-disable react-refresh/only-export-components */
import { Form, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import pic from "../../../assets/drug.jpg";
import "./drugd.css";

const DrugDetail = () => {
  const drugId = useParams();
  const [drug, setDrug] = useState({
    drugName: "",
    description: "",
    drugCode: "",
    unitPrice: "",
    drugPrice: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `https://medtrack-restapi.onrender.com/api/drugs/${drugId.id}`;

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
            {/* <div className="modal">
            

            <div className="details-div">
              <div className="details-left">
                <img src={pic} alt="" />
              </div>
              <div className="details-right">
                <div className="details-text">
                  <p>Drug Name: </p>
                  <p style={{ color: "#fff" }}>{drug.drugName} </p>
                </div>

                <div className="details-text">
                  <p>Drug Code: </p>
                  <p style={{ color: "#fff" }}>{drug.drugCode} </p>
                </div>

                <div className="details-text">
                  <p>Drug Unit Pricing: </p>
                  <p style={{ color: "#fff" }}>{drug.unitPrice} </p>
                </div>

                <div className="details-text">
                  <p>Drug Price: </p>
                  <p style={{ color: "#fff" }}>{drug.drugPrice} </p>
                </div>

                <div className="details-text">
                  <p>Drug Description: </p>
                  <p style={{ color: "#fff" }}>{drug.description} </p>
                </div>
              </div>
            </div>
          </div> */}
            <h1 style={{ margin: "3rem 0" }}> {drug.drugName} Details</h1>
            <Form className="form">
              <div className="form-group">
                <label htmlFor="name">Drug Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Drug Name"
                  name="name"
                  required="required"
                  value={drug.drugName}
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
                  value={drug.drugCode}
                />
              </div>

              <div className="form-group">
                <div className="select">
                  <label htmlFor="unit">Unit of Pricing</label>
                  <select name="unit" value={drug.unitPrice}>
                    {/* <option value={""}>Select</option>
                  <option value={"Tablet"}>Tablet</option>
                  <option value={"Capsule"}>Capsule</option>
                  <option value={"Vials"}>Vials</option>
                  <option value={"Ampule"}>Ampule</option> */}
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
                    value={drug.drugPrice}
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
                ></textarea>
              </div>
            </Form>
          </>
        )}
      </div>
      <a href="/pharmacy" className="modal__close">
        &times;
      </a>
    </div>
  );
};

export default DrugDetail;
