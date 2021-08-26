import React from "react";
import {ForcastStore} from "../store/NotesStore";
import {useRootStore} from '../RootStateContext';
import {observer} from "mobx-react-lite";
import {
    ForcastWeatherIcon,
    WeatherForcast,
    WeatherForcastCard,
    WeatherForcastCards,
    WeatherForcastContainer,
    WeatherHourlyCard,
    WeatherHourlyCards
} from "./styles";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';


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
    console.log(rootStore.forcastStore.weathersForcastArr)
    let daysWeather: string[] | number[] | any[] = [];
    let daysArr = [];


    daysWeather = rootStore.forcastStore.weathersForcastArr.list
    console.log(daysWeather)



    for (let i = 0; i < daysWeather?.length; i += 8) {
        daysArr.push(daysWeather[i])
        console.log(daysArr)
    }

    const data = rootStore.forcastStore?.weatherDate ? daysWeather.filter(d => d.dt_txt.includes(rootStore.forcastStore?.weatherDate)) : daysWeather?.slice(0, 5)

    console.log(data)
    return (
        <WeatherForcast>
            <h1>{rootStore.forcastStore.weathersForcastArr.city?.name}'s Weather Forcast</h1>
            <WeatherForcastContainer>
                    <WeatherForcastCards>
                        {daysArr.map((note: IWeatherForcastType, id: number) => {
                            return (
                                <WeatherForcastCard onClick={() => {
                                    rootStore.forcastStore.weatherDate = note.dt_txt.slice(0, 10);
                                    rootStore.forcastStore.forecastNumber = id * 8;
                                    console.log(rootStore.forcastStore.weatherDate)
                                }}>
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
                <WeatherHourlyCards>
                    {data?.map((i: IWeatherForcastType) => {
                        return (
                            <WeatherHourlyCard>
                                <p>{i.dt_txt}</p>
                                <p>{i.weather[0].description}</p>
                                <p>{celsius ? Math.ceil(i.main.temp - 273) + "°C" : Math.ceil(((i.main.temp - 273.15) * 9 / 5 + 32)) + "°F"}</p>
                                <ForcastWeatherIcon
                                    src={i.weather[0].icon ? `http://openweathermap.org/img/wn/${i.weather[0].icon}@4x.png` : undefined}
                                />
                            </WeatherHourlyCard>
                        )
                    })}
                </WeatherHourlyCards>
            </WeatherForcastContainer>
        </WeatherForcast>
    )
})

