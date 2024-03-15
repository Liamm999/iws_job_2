import { useState } from "react";

import Header from "../components/header/Header";

// Import images
import cloudAndSun from "../assets/images/cloudAndSun.jpg";
import cloudyImage from "../assets/images/cloudy.webp";
import nightImage from "../assets/images/Night.jpg";
import rainyImage from "../assets/images/Rainy.jpg";
import snowyImage from "../assets/images/snowy.webp";
import sunnyImage from "../assets/images/sunny.jpg";
import thunderImage from "../assets/images/Thunder.webp";
import windyImage from "../assets/images/windy.jpg";

import {
  cloudy,
  day,
  night,
  rainy1,
  snowy,
  thunder,
  windy,
} from "../assets/icons";
import Body from "../components/body/Body";
import Footer from "../components/footer/Footer";

const dataSet = {
  location: {
    name: "Hanoi",
    country: "Viet Nam",
  },

  weathers: [
    {
      id: 0,
      date: "Fri",
      hour: "2AM",
      upperTemp: 23,
      precipitation: 0,
      lowerTemp: 21,
      humidity: 88,
      windSpeed: 5,
      weather: {
        text: "Rainy",
        icon: rainy1,
        image: rainyImage,
      },
    },
    {
      id: 1,
      date: "Sat",
      hour: "1AM",
      upperTemp: 28,
      precipitation: 10,
      lowerTemp: 22,
      humidity: 47,
      windSpeed: 3,
      weather: {
        text: "Sunny",
        icon: day,
        image: sunnyImage,
      },
    },
    {
      id: 2,
      date: "Sun",
      hour: "12AM",
      upperTemp: 25,
      precipitation: 12,
      lowerTemp: 19,
      humidity: 67,
      windSpeed: 3,
      weather: {
        text: "Windy",
        icon: windy,
        image: windyImage,
      },
    },
    {
      id: 3,
      date: "20h",
      hour: "8PM",
      upperTemp: 27,
      precipitation: 8,
      lowerTemp: 25,
      humidity: 80,
      windSpeed: 6,
      weather: {
        text: "Cloudy",
        icon: cloudy,
        image: cloudyImage,
      },
    },
    {
      id: 4,
      date: "Tue",
      hour: "10PM",
      upperTemp: 23,
      precipitation: 5,
      lowerTemp: 20,
      humidity: 88,
      windSpeed: 2,
      weather: {
        text: "Cloudy night",
        icon: night,
        image: nightImage,
      },
    },
    {
      id: 5,
      date: "Wed",
      hour: "10PM",
      upperTemp: 26,
      precipitation: 6,
      lowerTemp: 21,
      humidity: 88,
      windSpeed: 2,
      weather: {
        text: "Snowy",
        icon: snowy,
        image: snowyImage,
      },
    },
    {
      id: 6,
      date: "Thu",
      hour: "10PM",
      upperTemp: 29,
      precipitation: 9,
      lowerTemp: 27,
      humidity: 88,
      windSpeed: 2,
      weather: {
        text: "Thunder",
        icon: thunder,
        image: thunderImage,
      },
    },
  ],
};

export const HomePage = () => {
  const [currentWeather, setCurrentWeather] = useState(dataSet.weathers[0]);

  return (
    <div className="relative w-full h-full">
      <img
        src={currentWeather.weather.image}
        alt="bg"
        className="absolute object-cover top-0 left-0 w-full h-screen -z-20"
      />
      <div className="absolute w-full h-screen bg-[#202124] -z-10 opacity-60"></div>
      <div className="p-4 md:p-8 lg:p-36 z-10">
        <Header location={dataSet.location} />
        <Body weather={currentWeather} />
        <Footer
          weathers={dataSet.weathers}
          currentWeather={currentWeather}
          setCurrentWeather={(id) =>
            setCurrentWeather(
              dataSet.weathers.find((weather) => weather.id === id)
            )
          }
        />
      </div>
    </div>
  );
};
