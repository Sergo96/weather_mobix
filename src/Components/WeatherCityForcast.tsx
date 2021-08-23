import React from "react";
import {ForcastStore} from "../store/NotesStore";
import {useRootStore} from '../RootStateContext';
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom"
import styled from "styled-components";




type ForcastWeatherProps = {
    forcastWeather: ForcastStore["forcastWeather"],
}


export const WeatherCityForcast: React.FC<ForcastWeatherProps> = observer(({forcastWeather}) => {


    const {rootStore} = useRootStore();
    console.log(rootStore)


    return (
        <WeatherForcast>
            <WeatherForcastContainer>
                <Link to={"/"}>
                    <h1>Go back Mian Page</h1>
                </Link>
                <h1>{rootStore.forcastStore.weathersForcastArr.city?.name}'s Weather Forcast</h1>

                <WeatherForcastCards>
                    {rootStore.forcastStore.weathersForcastArr.list?.map((note: any) => {
                        return (
                            <WeatherForcastCard>
                                <h4>°K: {note.main.temp}</h4>
                                <h5>Date: {note.dt_txt}</h5>
                                <p>Description: {note.weather[0].description}</p>
                            </WeatherForcastCard>
                        )
                    })}

                </WeatherForcastCards>

            </WeatherForcastContainer>
        </WeatherForcast>
    )
})

const WeatherForcast = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
`;


const WeatherForcastContainer = styled.div`
  width: 90%;
  margin: auto 0;
`;


const WeatherForcastCards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex: 0 0 calc(34% - 40px);

`;

const WeatherForcastCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 20%;
  padding: 2px 16px;
  margin: 2px 10px;


  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);

  }
`;