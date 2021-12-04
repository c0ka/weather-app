import Image from "next/image";
import { cToF } from "../services/converters";

export const MainCard = ({
    city,
    country,
    description,
    iconName,
    unitSystem,
    weatherData,
}) => {
    return (
        <div className="col-span-1 text-center p-8">
            <h1 className="text-4xl font-bold mb-3">
                {city}, {country}
            </h1>
            <p className="text-2xl mb-5">{description}</p>
            <Image
                width="300px"
                height="300px"
                src={`/icons/${iconName}.svg`}
                alt="weatherIcon"
            />
            <h1 className="text-8xl font-bold">
                {unitSystem == "metric"
                    ? Math.round(weatherData.main.temp)
                    : Math.round(cToF(weatherData.main.temp))}
                °{unitSystem == "metric" ? "C" : "F"}
            </h1>
            <p>
                Feels like{" "}
                {unitSystem == "metric"
                    ? Math.round(weatherData.main.feels_like)
                    : Math.round(cToF(weatherData.main.feels_like))}
                °{unitSystem == "metric" ? "C" : "F"}
            </p>
        </div>
    );
};