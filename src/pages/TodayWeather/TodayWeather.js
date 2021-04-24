import { useState } from "react";
import { SearchWeather } from "./SearchWeather";
import { SearchHistory } from "./SearchHistory";
import { capitalize } from "src/helpers/general";
import { findCountries, getCurrentWeather } from "src/api/weather";

export const TodayWeather = () => {
  const [error, setError] = useState("");
  const [weather, setWeather] = useState({});
  const [history, setHistory] = useState([]);

  const getWeather = async ({ city, country }) => {
    try {
      // find countries that matched input country name
      const { body: countries } = await findCountries(country);
      if (!countries || !countries.length)
        throw new Error("Failed to find country");

      // find country code
      const { country: countryCode } = countries.reverse()[0] || {};
      if (!countryCode) throw new Error("Failed to find country code");

      // get weather data
      const { body: weather } = await getCurrentWeather(
        city.trim(),
        countryCode.trim()
      );
      return { weather };
    } catch (error) {
      throw error;
    }
  };

  const onSearch = async (values) => {
    try {
      setError("");

      // get weather data
      const { weather } = await getWeather(values);
      setWeather(weather);

      // set new history
      const newHistory = {
        time: new Date(),
        weather,
        ...values,
      };
      setHistory([...history, newHistory]);
    } catch (error) {
      setError(capitalize(error.message || error));
      setWeather(null);
    }
  };

  const onDelete = (index) => {
    let newHistory = history.slice();
    newHistory.splice(index, 1);
    setHistory(newHistory);
  };

  return (
    <div className="container">
      <div className="d-flex flex-column h-100">
        <div className="flex-grow-1">
          <SearchWeather error={error} weather={weather} onSearch={onSearch} />
        </div>
        <div className="flex-grow-2">
          <SearchHistory
            history={history}
            onSearch={onSearch}
            onDelete={onDelete}
          />
        </div>
      </div>
    </div>
  );
};
