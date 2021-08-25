import styled from "styled-components";



export const WeatherForcast = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
`;


export const WeatherForcastContainer = styled.div`
  width: 90%;
  margin: auto 0;
`;


export const WeatherForcastCards = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
  flex-wrap: wrap;
  flex: 0 0 calc(34% - 40px);

`;

export const WeatherForcastCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 20%;
  padding: 12px 26px;
  margin: 2px 10px;


  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);

  }
`;

export const ForcastWeatherIcon = styled.img`
  width: 70px !important;
  height: 70px !important
`;