import { degToCompass } from "../services/converters";
import { getTime, getAMPM, getVisibility, getWindSpeed } from "../services/helpers";
import { MetricsCard } from "./MetricsCard";

export const MetricsBox = ({ weatherData, unitSystem }) => {
  return (
    <div className="grid grid-cols-3 gap-5 mb-5">
      <MetricsCard
        title={"Humidity"}
        iconSrc={"/icons/humidity.png"}
        metric={weatherData.main.humidity}
        unit={"%"}
      />
      <MetricsCard
        title={"Wind Speed"}
        iconSrc={"/icons/wind.png"}
        metric={getWindSpeed(unitSystem, weatherData.wind.speed)}
        unit={unitSystem == "metric" ? "m/s" : "m/h"}
      />
      <MetricsCard
        title={"Wind Direction"}
        iconSrc={"/icons/compass.png"}
        metric={degToCompass(weatherData.wind.deg)}
      />
      <MetricsCard
        title={"Visibility"}
        iconSrc={"/icons/binocular.png"}
        metric={getVisibility(unitSystem, weatherData.visibility)}
        unit={unitSystem == "metric" ? "km" : "miles"}
      />
      <MetricsCard
        title={"Sunrise"}
        iconSrc={"/icons/sunrise.png"}
        metric={getTime(unitSystem, weatherData.sys.sunrise, weatherData.timezone)}
        unit={getAMPM(unitSystem, weatherData.sys.sunrise, weatherData.timezone)}
      />
      <MetricsCard
        title={"Sunset"}
        iconSrc={"/icons/sunset.png"}
        metric={getTime(unitSystem, weatherData.sys.sunset, weatherData.timezone)}
        unit={getAMPM(unitSystem, weatherData.sys.sunset, weatherData.timezone)}
      />
    </div>
  )
}