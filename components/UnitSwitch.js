export const UnitSwitch = ({ onClick, unitSystem }) => {
  return (
    <div className="text-right">
      <p className={`inline mx-3 cursor-pointer ${unitSystem == "metric" ? "text-green-700" : "text-black"}`} onClick={onClick}>
        Metric System
      </p>
      <p className={`inline mx-3 cursor-pointer ${unitSystem == "imperial" ? "text-green-700" : "text-black"}`} onClick={onClick}>
        Imperial System
      </p>
    </div>
  )
}