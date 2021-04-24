import clsx from "clsx";

export const Button = (props) => {
  const { label, children, className, ...rest } = props;

  return (
    <button
      type="button"
      className={clsx(
        "btn btn-primary fw-bold me-2 my-2 d-inline-flex",
        className
      )}
      {...rest}
    >
      {label || children}
    </button>
  );
};

export const IconButton = (props) => {
  const { label, children, className, ...rest } = props;

  return (
    <button
      type="button"
      className={clsx(
        "btn btn-light fw-bold me-1 d-inline-flex p-2 my-2 rounded-circle",
        className
      )}
      {...rest}
    >
      {label || children}
    </button>
  );
};
