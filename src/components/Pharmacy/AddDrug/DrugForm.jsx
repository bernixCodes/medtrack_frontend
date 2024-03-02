/* eslint-disable react/prop-types */
import { Form, useNavigation } from "react-router-dom";
import "./addDrug.css";
// eslint-disable-next-line react/prop-types
const DrugForm = ({ method, drug }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div>
      <Form method={method} className="form">
        <div className="form-group">
          <label htmlFor="name">Drug Name</label>
          <input
            type="text"
            id="name"
            placeholder="Drug Name"
            name="name"
            required="required"
            autoComplete="off"
            defaultValue={drug ? drug.drugName : ""}
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
            defaultValue={drug ? drug.drugCode : ""}
          />
        </div>

        <div className="form-group">
          <div className="select">
            <label htmlFor="unit">Unit of Pricing</label>
            <select name="unit" defaultValue={drug ? drug.unitPrice : ""}>
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
              defaultValue={drug ? drug.drugPrice : ""}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            placeholder="Drug Description"
            name="description"
            rows={8}
            defaultValue={drug ? drug.description : ""}
          ></textarea>
        </div>

        <div className="form-group">
          <button
            className={`button-animation ${isSubmitting ? "loading" : ""}`}
          >
            {drug
              ? isSubmitting
                ? "Editing..."
                : "Edit Drug"
              : isSubmitting
              ? "Adding..."
              : "Add Drug"}
          </button>
        </div>
      </Form>
    </div>
  );
};

export default DrugForm;
