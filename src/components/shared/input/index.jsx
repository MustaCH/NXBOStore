import React, { useState } from "react";

function Input({
  labelFor,
  label,
  type,
  name,
  checked,
  placeholder,
  id,
  value,
  customStyle,
  onChange,
}) {
  const [inputStyle, setInputStyle] = useState(
    "rounded-lg border-0 focus:border-2 border-orange-500 text-black p-2"
  );

  const style = `${inputStyle} ${customStyle || ""}`;

  return (
    <div className="flex flex-col">
      <label htmlFor={labelFor}>{label}</label>
      <input
        className={customStyle ? style : inputStyle}
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
