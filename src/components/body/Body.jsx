export default function Body({ weather }) {
  return (
    <div className="flex items-center justify-between md:justify-around lg:justify-between">
      <div className="flex flex-col lg:flex-row flex-start gap-2 items-center">
        <img src={weather.weather.icon} alt="icon" width={160} />
        <span className="flex">
          <h1 className="text-xl md:text-6xl">{weather.upperTemp}</h1>
          <i className="text-xl md:text-3xl">°C</i>
        </span>
        <div className="text-xs md:text-sm font-bold text-gray-400 ml-3">
          <p>Prepcipitation: {weather.precipitation}%</p>
          <p>Humidity: {weather.humidity}%</p>
          <p>Wind: {weather.windSpeed} km/h</p>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-semibold">Weather</h1>
        <div className="flex flex-col justify-end items-end text-gray-400 text-base font-bold">
          <p>
            {weather.date}, {weather.hour}
          </p>
          <p>{weather.weather.text}</p>
        </div>
      </div>
    </div>
  );
}
