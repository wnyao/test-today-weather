import React from "react";
import clsx from "clsx";

export const Label = (props) => {
  const { label, ...rest } = props;
  return (
    <label className="fw-bold form-label mt-1 me-2" {...rest}>
      {label}
    </label>
  );
};

export const Field = (props) => {
  const { vertical, className, label, children, error } = props;
  if (!children) return null;

  return (
    <div
      className={clsx("my-2 me-2", className, {
        "d-inline align-items-center": vertical ? true : false,
        "d-flex flex-row": vertical ? false : true,
      })}
    >
      <Label htmlFor={children.props && children.props.name} label={label} />
      <span>
        {React.cloneElement(children, { error })}
        <div
          className={clsx("fw-bold", {
            "invalid-feedback": error,
            "valid-feedback": !error,
          })}
        >
          {error}
        </div>
      </span>
    </div>
  );
};
