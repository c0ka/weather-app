import Image from "next/image";

export const MetricsCard = ({ title, iconSrc, metric, unit }) => {
  return (
    <div className="bg-white bg-opacity-95 p-5 text-right rounded-2xl">
      <p>{title}</p>
      <div className="grid grid-cols-2">
        <Image width="100px" height="100px" src={iconSrc} alt="weatherIcon" />
        <div>
          <h1 className="text-3xl font-bold">{metric}</h1>
          <p>{unit}</p>
        </div>
      </div>
    </div>
  )
}