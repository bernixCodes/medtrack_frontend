/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Form, useNavigation } from "react-router-dom";
import Select from "react-select";
import {
  fetchMainCategory,
  fetchSubCategory,
  addMainCategory,
  addSubCategory,
} from "../../../api/labs";
import Creatable from "react-select/creatable";

const LabForm = ({ method, lab }) => {
  const navigation = useNavigation();
  const [mainCategories, setMainCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedMainCat, setSelectedMainCat] = useState(
    lab ? { value: lab.mainCategory, label: lab.mainCategory } : null
  );
  const [selectedSubCat, setSelectedSubCat] = useState(
    lab ? { value: lab.subCategory, label: lab.subCategory } : null
  );

  const isSubmitting = navigation.state === "submitting";
  const labTypeOptions = [
    { value: "Laboratory", label: "Laboratory" },
    { value: "Radiology", label: "Radiology" },
  ];

  const [selectedLabTypeOption, setSelectedLabTypeOption] = useState(
    lab ? { value: lab.labType, label: lab.labType } : null
  );

  const handleLabTypeChange = (selectedOption) => {
    setSelectedLabTypeOption(selectedOption);
  };

  useEffect(() => {
    const categoriesLoader = async () => {
      try {
        const mainCategoryFetch = await fetchMainCategory();
        const mainCategory = await mainCategoryFetch.json();
        if (!mainCategoryFetch.ok) {
          console.log(mainCategory.mgs);
          return;
        }
        setMainCategories(mainCategory);

        const subCategoryFetch = await fetchSubCategory();
        const subCategory = await subCategoryFetch.json();
        if (!subCategoryFetch.ok) {
          console.log(subCategory.mgs);
          return;
        }
        setSubCategories(subCategory);
      } catch (error) {
        console.log(error);
      }
    };
    categoriesLoader();
  }, []);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  const handleSubCreate = async (newValue) => {
    try {
      const newValueLowerCase = capitalizeFirstLetter(newValue);
      const newSubCategory = {
        value: newValueLowerCase,
        label: newValueLowerCase,
      };
      setSubCategories([...subCategories, newSubCategory]);

      await addSubCategory(newSubCategory);
    } catch (error) {
      console.error("Error creating option:", error);
    }
  };

  const handleMainCreate = async (newMain) => {
    try {
      const newValueLowerCase = capitalizeFirstLetter(newMain);
      const newOption = { value: newValueLowerCase, label: newValueLowerCase };
      setMainCategories([...mainCategories, newOption]);

      await addMainCategory(newOption);
    } catch (error) {
      console.error("Error creating option:", error);
    }
  };
  const handleSelectMainChange = (newMain) => {
    setSelectedMainCat(newMain);
  };

  const handleSelectSubChange = (newSub) => {
    setSelectedSubCat(newSub);
  };
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
        <div className="form-group row-on">
          <div className="select">
            <label htmlFor="type">Lab Type</label>
            <Select
              name="type"
              defaultValue={selectedLabTypeOption}
              onChange={handleLabTypeChange}
              options={labTypeOptions}
            />
          </div>
          <div className="select">
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
        </div>
        <div className="form-group row-on">
          <div className="select">
            <label htmlFor="mainCategory">Main Category</label>

            <Creatable
              onChange={handleSelectMainChange}
              onCreateOption={handleMainCreate}
              options={mainCategories}
              value={selectedMainCat}
              isClearable
              name="mainCategory"
              placeholder="Select or type to add"
              defaultInputValue={lab ? lab.mainCategory : ""}
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

          <div className="select">
            <label htmlFor="subCategory">Sub Category</label>

            <Creatable
              onChange={handleSelectSubChange}
              onCreateOption={handleSubCreate}
              options={subCategories}
              value={selectedSubCat}
              isClearable
              name="subCategory"
              defaultInputValue={lab ? lab.subCategory : ""}
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
