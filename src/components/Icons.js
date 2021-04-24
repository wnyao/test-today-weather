export const MaterialIcon = (props) => {
  const { name } = props;
  if (!name) return null;
  return <span className="material-icons material-icons-outlined">{name}</span>;
};
