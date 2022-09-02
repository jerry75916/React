import React from "react";
import { ReactComponent as CloudyIcon } from "../images/day-cloudy.svg";
import { ReactComponent as AirFlowIcon } from "../images/airFlow.svg";
import { ReactComponent as RainIcon } from "../images/rain.svg";
import { ReactComponent as RefreshIcon } from "../images/refresh.svg";
import WeatherIcon from "./WeatherIcon";
import styled from "@emotion/styled";
import spinner from "../images/spinner1.jpg";
import { BsGear } from "react-icons/bs";
const WeatherCardWapper = styled.div`
  min-width: 360px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.foregroundColor};
  box-sizing: border-box;
  padding: 30px 15px;
  position: relative;
`;
const Location = styled.div`
  font-size: 28px;
  color: ${({ theme }) => theme.titleColor};
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 30px;
`;

const CurrentWeather = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Temperature = styled.div`
  color: ${({ theme }) => theme.temperatureColor};
  font-size: 96px;
  font-weight: 300;
  display: flex;
`;

const Celsius = styled.div`
  font-weight: normal;
  font-size: 42px;
`;

const AirFlow = styled.div`
  display: flex;
  align-items: center;
  font-size: 16x;
  font-weight: 300;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 20px;
  svg {
    width: 25px;
    height: 25px;
  }
`;

const Rain = styled.div`
  display: flex;
  align-items: center;
  font-size: 16x;
  font-weight: 300;
  color: ${({ theme }) => theme.textColor};
  svg {
    width: 25px;
    height: 25px;
  }
`;
const Cloudy = styled(CloudyIcon)`
  flex-basis: 30%;
`;
const Refresh = styled.div`
  position: absolute;
  right: 15px;
  bottom: 15px;
  font-size: 12px;
  display: flex;

  color: ${({ theme }) => theme.textColor};

  svg {
    margin-left: 10px;
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
`;
const Gear = styled(BsGear)`
  color: ${({ theme }) => theme.textColor};
`;
const WeatherCard = ({
  weatherElement,
  moment,
  fetchData,
  ChangePage,
  cityName
}) => {
  const {
    observationTime,
    // locationName,
    temperature,
    windSpeed,
    description,
    weatherCode,
    rainPossibility,
    comfortability,
    isLoading
  } = weatherElement;
  return (
    <WeatherCardWapper>
      <Gear onClick={() => ChangePage("WeatherSetting")} />
      <Location>{cityName}</Location>
      <Description>
        {new Intl.DateTimeFormat("zh-TW", {
          hour: "numeric",
          minute: "numeric"
        }).format(new Date(weatherElement.observationTime))}

        {weatherElement.description}
        {weatherElement.comfortability}
      </Description>
      <CurrentWeather>
        <Temperature>
          {Math.round(weatherElement.temperature)} <Celsius>°C</Celsius>
        </Temperature>
        <WeatherIcon
          moment="night"
          currentWeatherCode={weatherElement.weatherCode}
        />
      </CurrentWeather>

      <AirFlow>
        <AirFlowIcon />
        {weatherElement.windSpeed} m/h
      </AirFlow>
      <Rain>
        <RainIcon />
        {rainPossibility}%
      </Rain>
      {/* <button onClick="changeTheme">{btn_color}</button> */}
      <Refresh onClick={() => fetchData()}>
        最後觀測時間：
        {new Intl.DateTimeFormat("zh-TW", {
          hour: "numeric",
          minute: "numeric"
        }).format(new Date(observationTime))}
        {isLoading ? (
          <img src={spinner} width={20} alt="spinner" />
        ) : (
          <RefreshIcon />
        )}
      </Refresh>
    </WeatherCardWapper>
  );
};

export default WeatherCard;
