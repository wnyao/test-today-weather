export const Boundary = (props) => {
  const { className, error, success, onClear, loading, children } = props;

  return (
    <div className={className}>
      {loading && (
        <div className="spinner d-flex justify-content-center align-items-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <div className="fade show">
        {success && (
          <div className="alert alert-success" role="alert" onClick={onClear}>
            {success}
          </div>
        )}
        {error && (
          <div className="alert alert-danger" role="alert" onClick={onClear}>
            {error}
          </div>
        )}
      </div>
      {children}
    </div>
  );
};
