import React from "react";
import {useParams} from "react-router-dom";
import {ForcastStore, NotesStore} from "../store/NotesStore";
import {useRootStore} from '../RootStateContext';


type QuizParams = {
    name?: any;
};

type ForcastWeatherProps = {
    forcastWeather: ForcastStore["forcastWeather"],
}


export const WeatherCityForcast: React.FC<ForcastWeatherProps> = ({forcastWeather}) => {
    const {name} = useParams<QuizParams>();
    const {rootStore} = useRootStore();
    // const callForcast = forcastWeather(name)
    console.log(rootStore.forcastStore.weathersForcastArr[0])
    // console.log(rootStore)

    // const fetchForcastData = (cityName: string) => {
    //     forcastWeather(cityName)
    // }


    return (
        <>
            <div>
                {/*<h1>{rootStore.forcastStore.weathersForcastArr[weathersForcastArr.length - 1].name}</h1>*/}
                {/*{rootStore.forcastStore.weathersForcastArr[-1].name}*/}
                {/*<button onClick={() => fetchForcastData(name)}>click</button>*/}
            </div>
        </>
    )
}