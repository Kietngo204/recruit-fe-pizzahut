import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { currentWeather } from "./redux/actions/currentWeatherActionThunk";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading, error } = useSelector(
    (state) => state.currentWeather
  );
  const dispatch = useDispatch();

  console.log(data);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    dispatch(currentWeather(searchTerm));
  };

  useEffect(() => {
    dispatch(currentWeather());
  }, []);

  return (
    <div className="container">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          className="search"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Enter city name..."
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <h1>
            {data?.location?.name}, {data?.location?.country}
          </h1>
          <p>Current Temperature: {data?.current?.temp_c}°C</p>
          <p>Condition: {data?.current?.condition.text}</p>
          {/* Hiển thị thêm thông tin thời tiết khác nếu cần */}
        </div>
      )}
    </div>
  );
}

export default App;
