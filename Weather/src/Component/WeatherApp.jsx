import React, { useState, useEffect, useCallback } from "react";
import styled from "@emotion/styled";
import useLocalStorage from "use-local-storage";
import { ThemeProvider } from "@emotion/react";
import WeatherCard from "./WeatherCard";
import useWeatherApi from "./useWeatherApi";
import WeatherSetting from "./WeatherSetting";
import { findLocationName } from "./utils.js";
const obj_theme = {
  light: {
    backgroundColor: "#ededed",
    foregroundColor: "#f9f9f9",
    boxShadow: "0 1px 3px 0 #999999",
    titleColor: "#212121",
    temperatureColor: "#757575",
    textColor: "#828282"
  },
  dark: {
    backgroundColor: "#1F2022",
    foregroundColor: "#121416",
    boxShadow:
      "0 1px 4px 0 rgba(12, 12, 13, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.15)",
    titleColor: "#f9f9fa",
    temperatureColor: "#dddddd",
    textColor: "#cccccc"
  }
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WeatherApp = () => {
  console.log("start");
  const [currentPage, setCurrentPage] = useState("WeatherCard");
  // const [btn_color, setBtnColor] = useState("light");

  // const changeTheme = () => {
  //   if (btn_color == "light") {
  //     setBtnColor("light");
  //     return;
  //   } else {
  //     setBtnColor("night");
  //   }
  // };
  const [currentCity, setCurrentCity] = useLocalStorage("cityName", "臺北市");

  const currentLocation = findLocationName(currentCity).locationName || {};

  useEffect(() => {
    setCurrentCity(currentCity);
  }, [currentCity]);

  const location = { locationName: currentLocation, cityName: currentCity };
  const [weatherElement, fetchData] = useWeatherApi(location);
  const ChangePage = (page) => {
    setCurrentPage(page);
  };
  const [currentTheme, setCurrentTheme] = useState("dark");
  return (
    <ThemeProvider theme={obj_theme[currentTheme]}>
      <Container>
        {console.log("render")}
        {currentPage === "WeatherCard" && (
          <WeatherCard
            weatherElement={weatherElement}
            moment={"night"}
            fetchData={fetchData}
            ChangePage={ChangePage}
            cityName={currentCity}
          />
        )}

        {currentPage === "WeatherSetting" && (
          <WeatherSetting
            ChangePage={ChangePage}
            setCurrentCity={setCurrentCity}
          />
        )}
      </Container>
    </ThemeProvider>
  );
};

export default WeatherApp;
