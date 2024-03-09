import React from "react";
import { CiMail } from "react-icons/ci";

const InputField = ({ type, className, onChange, placeholder, value }: any) => {
  return (
    <div className="flex items-center">
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        className={`${className} flex p-2.5 text-lg font-semibold outline-none border border-grey rounded-l-md w-36`}
      />
      {/* <i>
        <CiMail size={30} />
      </i> */}
    </div>
  );
};

export default InputField;
