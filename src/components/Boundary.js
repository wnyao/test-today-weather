import { Spinner } from "./Spinner";
import { Alert } from "./Alert";

export const Boundary = (props) => {
  const { className, error, success, loading, children } = props;

  return (
    <div className={className}>
      {loading && <Spinner />}
      <div className="fade show">
        {success && <Alert variant="success">{success}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
      </div>
      {children}
    </div>
  );
};
