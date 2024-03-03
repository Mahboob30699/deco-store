import React from "react";

const FormInput = ({type,label,name, defaultValue}) => {
  console.log(label)
  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        name ={name}
        defaultValue={defaultValue}
        className="input input-bordered "
      />
      
    </label>
  );
};

export default FormInput;
