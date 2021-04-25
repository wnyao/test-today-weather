import { useMemo } from "react";
import { IconButton } from "src/components/Buttons";
import { MaterialIcon } from "src/components/Icons";
import { capitalize } from "src/helpers/general";
const dateFormat = require("dateformat");

export const SearchHistory = (props) => {
  const { history, onSearch, onDelete } = props;

  return (
    <section>
      <header className="mt-4">
        <h4 className="fw-bold">Search History</h4>
      </header>
      <hr />
      <div>
        {history.length ? (
          history.map((data, index) => (
            <History
              data={data}
              key={index}
              index={index}
              onSearch={onSearch}
              onDelete={onDelete}
            />
          ))
        ) : (
          <div className="fw-bold text-center text-muted my-4">No Record</div>
        )}
      </div>
    </section>
  );
};

const History = (props) => {
  const { index, data, onSearch, onDelete } = props;
  const { city, time, weather } = data;
  const displayTime = useMemo(() => time && dateFormat(time, "hh:MM TT"));

  return (
    <div className="row align-items-center">
      <div className="col-6">
        <span>
          {index + 1}. {capitalize(city)}, {weather.sys && weather.sys.country}
        </span>
        <span className="d-inline-block d-sm-none mx-2">{displayTime}</span>
      </div>
      <div className="col-6 text-end">
        <span className="d-none d-sm-inline-block mx-2">{displayTime}</span>
        <span>
          <IconButton className="mx-1" onClick={() => onSearch(data)}>
            <MaterialIcon name="search" />
          </IconButton>
          <IconButton className="mx-1" onClick={() => onDelete(index)}>
            <MaterialIcon name="delete" />
          </IconButton>
        </span>
      </div>
      <hr className="text-muted" />
    </div>
  );
};
