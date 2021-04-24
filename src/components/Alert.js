import clsx from "clsx";

export const Alert = (props) => {
  const { children, variant, className } = props;

  return (
    <div
      role="alert"
      className={clsx(className, "alert fw-bold", {
        "alert-success": variant === "success",
        "alert-danger": variant === "danger",
      })}
    >
      {children}
    </div>
  );
};
