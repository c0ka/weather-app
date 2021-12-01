import { useEffect, useState } from "react";

import { MainCard, ContentBox, Header, DateAndTime, Search, MetricsBox, UnitSwitch, 
  LoadingScreen, ErrorScreen } from "../components";

import styles from "../styles/Home.module.css"

const App = () => {
  const [cityInput, setCityInput] = useState("Nanjing");
  const [triggerFetch, setTriggerFetch] = useState(true);
  const [weatherData, setWeatherData] = useState();
  const [unitSystem, setUnitSystem] =useState("metric");

  useEffect( async () => {
    const res = await fetch("api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cityInput }),
    });
    const data = await res.json();
    setWeatherData({...data});
    setCityInput("");
  }, [triggerFetch]);

  const changeSystem = () => unitSystem == "metric" ? setUnitSystem("imperial") : setUnitSystem("metric");

  return weatherData && !weatherData.message ? (
    <div className={styles.wrapper}>
      <MainCard
        city={weatherData.name}
        country={weatherData.sys.country}
        description={weatherData.weather[0].description}
        iconName={weatherData.weather[0].icon}
        unitSystem={unitSystem}
        weatherData={weatherData}
      />
      <ContentBox>
        <Header>
          <DateAndTime weatherData={weatherData} unitSystem={unitSystem} />
          <Search
            placeHolder="Search a city ..."
            value={cityInput}
            onFocus={ (e) => {
              e.target.value = "";
              e.target.placeholder = "";
            }}
            onChange={ (e) => setCityInput(e.target.value)}
            onKeyDown={ (e) => {
              e.keyCode === 13 && setTriggerFetch(!triggerFetch);
              e.target.placeholder = "Search a city ..."
            }}
          />
        </Header>
        <MetricsBox weatherData={weatherData} unitSystem={unitSystem} />
        <UnitSwitch onClick={changeSystem} unitSystem={unitSystem} />
      </ContentBox>
    </div>
  ) : weatherData && weatherData.message ? (
    <ErrorScreen errorMessage="City not found, try again!">
      <Search 
        onFocus={ (e) => (e.target.value="") }
        onChange={ (e) => setCityInput(e.target.value) }
        onKeyDown={ (e) => e.keyCode === 13 && setTriggerFetch(!triggerFetch) }
      />
    </ErrorScreen>
  ) : (
    <LoadingScreen loadingMessage="Loading data..." />
  );
};

export default App;