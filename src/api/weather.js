const {
  REACT_APP_OPEN_WEATHER_API_ORIGIN,
  REACT_APP_OPEN_WEATHER_API_KEY,
} = process.env;

export const getCurrentWeather = async (city, country) => {
  try {
    const response = await fetch(
      `${REACT_APP_OPEN_WEATHER_API_ORIGIN}/data/2.5/weather?q=${city},,${country}&appid=${REACT_APP_OPEN_WEATHER_API_KEY}`
    );
    if (!response || !response.ok) throw await response.json();

    return {
      ...response,
      body: await response.json(),
    };
  } catch (error) {
    throw error;
  }
};

export const findCountries = async (name) => {
  try {
    const response = await fetch(
      `${REACT_APP_OPEN_WEATHER_API_ORIGIN}/geo/1.0/direct?q=${name}&limit=5&appid=${REACT_APP_OPEN_WEATHER_API_KEY}`
    );
    if (!response || !response.ok) throw await response.json();

    return {
      ...response,
      body: await response.json(),
    };
  } catch (error) {
    throw error;
  }
};
