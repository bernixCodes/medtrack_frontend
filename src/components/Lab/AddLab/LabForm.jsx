/* eslint-disable react/prop-types */
import { Form, useNavigation } from "react-router-dom";
// import Creatable from "react-select/creatable";

const LabForm = ({ method, lab }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div>
      <Form method={method} className="form">
        <div className="form-group">
          <label htmlFor="name">Lab Item</label>
          <input
            type="text"
            id="name"
            placeholder="Lab Item"
            name="name"
            required="required"
            autoComplete="off"
            defaultValue={lab ? lab.labName : ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Lab Type</label>
          <input
            type="text"
            id="type"
            placeholder="Lab Type"
            name="type"
            required="required"
            autoComplete="off"
            defaultValue={lab ? lab.labType : ""}
          />
        </div>

        <div className="form-group row-on">
          <div className="select">
            <label htmlFor="mainCategory">Main Category</label>
            <input
              type="text"
              id="mainCategory"
              placeholder="Main Category"
              name="mainCategory"
              required="required"
              autoComplete="off"
              defaultValue={lab ? lab.mainCategory : ""}
            />
            {/* <Creatable
              //   onChange={handleSelectChange}
              //   onCreateOption={handleCreate}
              //   options={options}
              //   value={selectedValue}
              isClearable
              name="mainCategory"
              //   defaultInputValue={drug ? drug.unitPrice : ""}
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
            /> */}
          </div>

          <div className="select">
            <label htmlFor="subCategory">Sub Category</label>
            <input
              type="text"
              //   id="price"
              placeholder="Sub Category"
              name="subCategory"
              required="required"
              autoComplete="off"
              defaultValue={lab ? lab.subCategory : ""}
            />
            {/* <Creatable
              //   onChange={handleSelectChange}
              //   onCreateOption={handleCreate}
              //   options={options}
              //   value={selectedValue}
              isClearable
              name="subCategory"
              //   defaultInputValue={drug ? drug.unitPrice : ""}
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
            /> */}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="code">Lab Code</label>
          <input
            type="text"
            id="code"
            placeholder="Lab Code"
            name="code"
            required="required"
            autoComplete="off"
            defaultValue={lab ? lab.labCode : ""}
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            placeholder="Lab Price"
            name="price"
            required="required"
            autoComplete="off"
            defaultValue={lab ? lab.labPrice : ""}
          />
        </div>

        <div className="form-group topp">
          <button
            className={`button-animation ${isSubmitting ? "loading" : ""}`}
          >
            {lab
              ? isSubmitting
                ? "Editing..."
                : "Edit Lab"
              : isSubmitting
              ? "Adding..."
              : "Add Lab"}
          </button>
        </div>
      </Form>
    </div>
  );
};

export default LabForm;
