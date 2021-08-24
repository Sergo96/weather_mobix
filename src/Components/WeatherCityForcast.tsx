import React from "react";
import {ForcastStore, NotesStore} from "../store/NotesStore";
import {useRootStore} from '../RootStateContext';
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom"
import styled from "styled-components";
import {Button} from "@material-ui/core";


type ForcastWeatherProps = {
    forcastWeather: ForcastStore["forcastWeather"],
    changeCelcius: ForcastStore["changeForcastCels"],
    celsius: boolean,

}

interface IWeatherForcastType {
    name?: string;
    main: object | any;
    temp?: number;
    weather: string[] | any;
    dt_txt: string;
    description?: string;
}


export const WeatherCityForcast: React.FC<ForcastWeatherProps> = observer(({
                                                                               forcastWeather,
                                                                               celsius,
                                                                               changeCelcius,
                                                                           }) => {


    const {rootStore} = useRootStore();
    console.log(rootStore)


    return (
        <WeatherForcast>
            <WeatherForcastContainer>
                <Link to={"/"}>
                    <h1>Go back Mian Page</h1>
                </Link>
                {/*<Button onClick={() => changeCelcius()} variant="contained" color="secondary">Change C | F</Button>*/}

                <h1>{rootStore.forcastStore.weathersForcastArr.city?.name}'s Weather Forcast</h1>

                <WeatherForcastCards>
                    {rootStore.forcastStore.weathersForcastArr.list?.map((note: IWeatherForcastType ) => {
                        return (
                            <WeatherForcastCard>
                                <h4>Weather: <p>Temperature
                                    : {celsius ? Math.ceil(note.main.temp - 273) + "°C" : Math.ceil(((note.main.temp - 273.15) * 9 / 5 + 32)) + "°F"}</p>
                                </h4>
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