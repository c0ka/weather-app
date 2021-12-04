import { getWeekDay, getTime, getAMPM } from "../services/helpers";

export const DateAndTime = ({ weatherData, unitSystem }) => {
  return (
    <div className="col-span-2 flex items-center">
      <h2 className="text-2xl font-semibold">
        {`${getWeekDay(weatherData)}, ${getTime(
          unitSystem,
          weatherData.dt,
          weatherData.timezone
        )} ${getAMPM(unitSystem, weatherData.dt, weatherData.timezone)}`}
      </h2>
    </div>
  )
}