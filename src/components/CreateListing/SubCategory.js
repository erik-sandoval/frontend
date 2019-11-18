import React from "react";

// this checks what the main category is in ./CreateListing.js and picks the appropiate
//  subcategory.

// conditionally renders based on main category
const SubCategory = props => {
  if (props.category === "Mounts") {
    return (
      <div>
        SubCategory
        <select
          name='subcategory'
          onChange={props.handleChange}
          className={`long-input ${
            props.errors.subcategory && props.touched.subcategory
              ? "input-error"
              : ""
          } ${
            props.touched.subcategory && !props.errors.subcategory
              ? "input-correct"
              : ""
          }`}
        >
          <option defaultValue> </option>
          <option>Canon</option>
          <option>Four Thirds</option>
          <option>Fuji</option>
          <option>Leica</option>
          <option>Micro Four Thirds</option>
          <option>Nikon</option>
          <option>Pentax</option>
          <option>Samsung</option>
          <option>Sony</option>
        </select>
      </div>
    );
  }
  if (props.category === "Cameras") {
    return (
      <div>
        SubCategory
        <select
          name='subcategory'
          onChange={props.handleChange}
          className={`long-input ${
            props.errors.subcategory && props.touched.subcategory
              ? "input-error"
              : ""
          } ${
            props.touched.subcategory && !props.errors.subcategory
              ? "input-correct"
              : ""
          }`}
        >
          <option defaultValue>Pick Subcategory</option>
          <option>DSLR</option>
          <option>Mirrorless</option>
          <option>Medium Format</option>
          <option>Point & Shoot</option>
          <option>Action & POV</option>
          <option>Underwater</option>
          <option>Experimental</option>
          <option>Rangefinder</option>
          <option>Micro Four Thirds</option>
        </select>
      </div>
    );
  }
  if (props.category === "Lenses") {
    return (
      <div>
        SubCategory
        <select
          name='subcategory'
          onChange={props.handleChange}
          className={`long-input ${
            props.errors.subcategory && props.touched.subcategory
              ? "input-error"
              : ""
          } ${
            props.touched.subcategory && !props.errors.subcategory
              ? "input-correct"
              : ""
          }`}
        >
          <option defaultValue=''>Pick Subcategory</option>
          Ultrawide
          <option>Wide</option>
          <option>Normal</option>
          <option>Short Telephoto</option>
          <option>Medium Telephoto</option>
          <option>Longer Telephoto</option>
          <option>Super Telephoto</option>
          <option>Fisheye</option>
          <option>Tilt Shift</option>
          <option>Macro</option>
          <option>Cine Lenses</option>
          <option>Adapters</option>
          <option>Teleconverters</option>
          <option>Underwater</option>
        </select>
      </div>
    );
  }
  if (props.category === "Lighting") {
    return (
      <div>
        SubCategory
        <select name='subcategory' onChange={props.handleChange}>
          <option defaultValue=''>Pick Subcategory</option>
          <option>Continuous</option>
          <option>Strobes</option>
          <option>Flashes & On-Camera</option>
          <option>Lighting Modifiers</option>
          <option>Lighting Accessories</option>
          <option>Light Stands</option>
          <option>Batteries & Power</option>
        </select>
      </div>
    );
  }
  if (props.category === "Support Equipment") {
    return (
      <div>
        SubCategory
        <select name='subcategory' onChange={props.handleChange}>
          <option defaultValue=''>Pick Subcategory</option>
          <option>Tripods</option>
          <option>Tripod Heads</option>
          <option>Monopods</option>
          <option>Mounting Accessories</option>
          <option>Straps</option>
          <option>Dollies & Sliders</option>
          <option>Matte Boxes</option>
        </select>
      </div>
    );
  }
  if (props.category === "Accessories") {
    return (
      <div>
        SubCategory
        <select
          name='subcategory'
          onChange={props.handleChange}
          className={`long-input ${
            props.errors.subcategory && props.touched.subcategory
              ? "input-error"
              : ""
          } ${
            props.touched.subcategory && !props.errors.subcategory
              ? "input-correct"
              : ""
          }`}
        >
          <option defaultValue='' />
          <option> Bags & Covers</option>
          <option>Batteries & Power</option>
          <option>Battery Grips</option>
          <option>Monitors</option>
          <option>Viewfinders</option>
          <option>Cables</option>
          <option>Media & Storage</option>
          <option>Filters</option>
          <option>Production Tools</option>
        </select>
      </div>
    );
  }
  return (
    <div>
      SubCategory
      <select
        className={`long-input ${
          props.errors.subcategory && props.touched.subcategory
            ? "input-error"
            : ""
        } ${
          props.touched.subcategory && !props.errors.subcategory
            ? "input-correct"
            : ""
        }`}
      >
        <option value='' disabled>
          Choose Main Category First
        </option>
      </select>
    </div>
  );
};

export default SubCategory;
