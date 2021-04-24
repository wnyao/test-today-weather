import { Boundary } from "src/components/Boundary";
import { SearchForm } from "./SearchForm";
const dateFormat = require("dateformat");

export const SearchWeather = (props) => {
  const { error, weather, onSearch } = props;

  return (
    <section>
      <header className="my-4">
        <h4 className="fw-bold">Today's Weather</h4>
      </header>
      <hr />
      <div>
        <SearchForm onSearch={onSearch} />
        <Boundary className="my-4" error={error || (!weather && "Not found")}>
          <Weather weather={weather} />
        </Boundary>
      </div>
    </section>
  );
};

const Weather = (props) => {
  const { name, sys, main, weather } = props.weather || {};
  const { country } = sys || {};
  const { temp_min, temp_max, humidity } = main || {};
  const { main: condition, description } = (weather && weather[0]) || {};
  if (!weather) return null;

  return (
    <div>
      {name && country && (
        <WeatherField>
          {name}, {country}
        </WeatherField>
      )}
      <h2 className="fw-bold">{condition}</h2>
      <WeatherField label="Description:">{description}</WeatherField>
      {temp_min && temp_max && (
        <WeatherField label="Temperature:">
          {temp_min}&#8451; ~ {temp_max}&#8451;
        </WeatherField>
      )}
      {humidity && <WeatherField label="Humitidy:">{humidity}%</WeatherField>}
      <WeatherField label="Time:">
        {dateFormat(new Date(), "yyyy-mm-dd h:MM TT")}
      </WeatherField>
    </div>
  );
};

const WeatherField = (props) => {
  const { label, children } = props;
  if (!children) return null;

  return (
    <div className="row">
      {label && (
        <div className="col-6 col-md-2 px-0">
          <small className="me-2">{label}</small>
        </div>
      )}
      {children && (
        <div className="col-6 col-md-2 px-0">
          <small className="">{children}</small>
        </div>
      )}
    </div>
  );
};
