import React from "react";

const FormInput = ({type,label,name, defaultValue, size}) => {
  console.log(label)
  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text capitalize">{label}</span>
      </div>
      <input
        type={type}
        name ={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
      />
      
    </label>
  );
};

export default FormInput;
