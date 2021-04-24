import React from "react";
import clsx from "clsx";

export const Input = (props) => {
  const {
    name,
    type,
    className,
    placeholder,
    value,
    onChange,
    onBlur,
    error,
  } = props;

  return (
    <input
      type={type || "text"}
      id={name}
      name={name}
      className={clsx(className, "form-control", {
        "is-valid": value && !error ? true : false,
        "is-invalid": error ? true : false,
      })}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};
