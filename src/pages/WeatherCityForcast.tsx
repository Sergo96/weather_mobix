import React from "react";
import {ForcastStore, NotesStore} from "../store/NotesStore";
import {useRootStore} from '../RootStateContext';
import {observer} from "mobx-react-lite";
import { ForcastWeatherIcon, WeatherForcast, WeatherForcastCard, WeatherForcastCards, WeatherForcastContainer } from "./styles";
// import {Link} from "react-router-dom"
// import {Button} from "@material-ui/core";


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


                <h1>{rootStore.forcastStore.weathersForcastArr.city?.name}'s Weather Forcast</h1>
                <WeatherForcastCards>
                    {rootStore.forcastStore.weathersForcastArr.list?.map((note: IWeatherForcastType) => {
                        return (
                            <WeatherForcastCard>
                                <ForcastWeatherIcon
                                    src={note.weather[0].icon ? `http://openweathermap.org/img/wn/${note.weather[0].icon}@4x.png` : undefined}
                                />
                                <h4><p>Temperature
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

