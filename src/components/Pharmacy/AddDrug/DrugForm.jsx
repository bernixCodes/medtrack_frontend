/* eslint-disable react/prop-types */
import { Form, useNavigation } from "react-router-dom";
import Creatable from "react-select/creatable";
import "./addDrug.css";
import { fetchDrugOptions, addDrugOption } from "../../../api/drugs";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const DrugForm = ({ method, drug }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [options, setOptions] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);

  useEffect(() => {
    const drugsOptionsLoader = async () => {
      try {
        const response = await fetchDrugOptions();
        const res = await response.json();
        if (!response.ok) {
          console.log(res.mgs);
          return;
        }
        console.log("res", res);
        setOptions(res);
      } catch (error) {
        console.log(error);
      }
    };
    drugsOptionsLoader();
  }, []);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  const handleCreate = async (newValue) => {
    try {
      const newValueLowerCase = capitalizeFirstLetter(newValue);
      const newOption = { value: newValueLowerCase, label: newValueLowerCase };
      setOptions([...options, newOption]);

      await addDrugOption(newOption);
    } catch (error) {
      console.error("Error creating option:", error);
    }
  };
  const handleSelectChange = (newValue) => {
    setSelectedValue(newValue);
  };

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
            <Creatable
              onChange={handleSelectChange}
              onCreateOption={handleCreate}
              options={options}
              value={selectedValue}
              isClearable
              name="unit"
              defaultInputValue={drug ? drug.unitPrice : ""}
              placeholder="Select or type to add"
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? "white" : "",
                  border: state.isSelected ? "none" : baseStyles.border,
                  padding: "4px",
                  color: "black",
                }),
              }}
            />
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

