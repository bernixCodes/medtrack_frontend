/* eslint-disable react-refresh/only-export-components */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import pic from "../../../assets/drug.jpg";
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
  useEffect(() => {
    const url = `https://medtrack-restapi.onrender.com/api/drugs/${drugId.id}`;
    console.log(url);
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
      return data;
    };
    drugDetails();
  }, [drugId]);

  return (
    <div className="wrapper">
      <div className="modal">
        <h1 style={{ margin: "5rem 0 3rem 0" }}> {drug.drugName} Details</h1>

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
      </div>

      <a href="/pharmacy" className="modal__close">
        &times;
      </a>
      {/* </div> */}
    </div>
  );
};

export default DrugDetail;
