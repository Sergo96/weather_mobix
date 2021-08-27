import styled from "styled-components";


const WeatherForcast = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
`;



const WeatherSectionTitle = styled.h1`
  margin-top: 10px;
`;

const WeatherSectionsTitle = styled.h3`
  margin-top: 10px;
`;


const WeatherForcastContainer = styled.div`
  width: 90%;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;


const WeatherForcastCards = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
  flex-wrap: wrap;
  //flex: 0 0 calc(34% - 40px);

`;

const WeatherForcastCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 25%;
  height: 15%;
  padding: 2px 16px;
  margin: 2px 10px;
  cursor: pointer;


  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);

  }
`;

const ForcastWeatherIcon = styled.img`
  width: 70px !important;
  height: 70px !important
`;

const WeatherHourlyCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 30%;
  padding: 2px 16px;
  margin: 2px 10px;
  cursor: pointer;
  
  >p{
    font-size: 13px;
  }
`;

const WeatherHourlyCards = styled.div`
  display: flex;
  margin: 10px;
  //flex-direction: column;
`;


export const Style = {
    WeatherForcast,
    WeatherForcastContainer,
    WeatherForcastCards,
    WeatherForcastCard,
    ForcastWeatherIcon,
    WeatherHourlyCard,
    WeatherHourlyCards,
    WeatherSectionTitle,
    WeatherSectionsTitle
}