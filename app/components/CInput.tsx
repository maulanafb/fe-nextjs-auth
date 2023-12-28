import React from "react";
type IProps = {
  type: string;
  required: boolean;
  name: string;
  labelText: string;
  onChange: any;
};
const CInput = ({ type, required, name, labelText, onChange }: IProps) => {
  return (
    <div className="flex flex-col mt-3">
      <label htmlFor="">{labelText}</label>
      <input
        type={type}
        required={required}
        name={name}
        className="border-2 border-red-300"
        onChange={onChange}
      />
    </div>
  );
};

export default CInput;
