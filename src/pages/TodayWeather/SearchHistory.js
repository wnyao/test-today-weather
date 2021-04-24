import { IconButton } from "src/components/Buttons";
import { MaterialIcon } from "src/components/Icons";
import { capitalize } from "src/helpers/general";
const dateFormat = require("dateformat");

export const SearchHistory = (props) => {
  const { history, onSearch, onDelete } = props;

  return (
    <section>
      <header className="my-4">
        <h4 className="fw-bold">Today's Weather</h4>
      </header>
      <hr />
      <div>
        {history.map((data, index) => {
          return (
            <History
              data={data}
              key={index}
              index={index}
              onSearch={onSearch}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </section>
  );
};

const History = (props) => {
  const { index, data, onSearch, onDelete } = props;
  const { city, time, weather } = data;

  return (
    <div className="d-flex flex-wrap flex-sm-nowrap align-items-center">
      <div className="flex-grow-1">
        {index + 1}. {capitalize(city)}, {weather.sys && weather.sys.country}
      </div>
      <div className="flex-grow-1 text-start text-sm-end">
        <span className="mx-2">{time && dateFormat(time, "hh:MM TT")}</span>
        <span className="d-inline">
          <IconButton className="mx-1" onClick={() => onSearch(data)}>
            <MaterialIcon name="search" />
          </IconButton>
          <IconButton onClick={() => onDelete(index, data)}>
            <MaterialIcon name="delete" />
          </IconButton>
        </span>
      </div>
    </div>
  );
};
