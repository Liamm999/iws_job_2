export default function Footer({
  weathers,
  currentWeather,
  setCurrentWeather,
}) {
  return (
    <div className="mt-8 md:mt-44 grid grid-cols-4 lg:grid-cols-7 justify-between gap-3">
      {weathers.map((weather) => (
        <div
          className={`flex cursor-pointer flex-col items-center p-4 hover:bg-gray-600 rounded-xl ${
            weather.id === currentWeather.id ? "bg-gray-600" : ""
          }`}
          onClick={() => setCurrentWeather(weather.id)}
        >
          <span className="text-xs md:text-2xl font-bold">{weather.date}</span>
          <img src={weather.weather.icon} alt="icon weather" width={90} />
          <div className="flex gap-2 font-bold">
            <p className="text-white">{weather.upperTemp}°</p>
            <p className="text-gray-400">{weather.lowerTemp}°</p>
          </div>
        </div>
      ))}
    </div>
  );
}
