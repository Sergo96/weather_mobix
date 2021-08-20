import React from "react";
import {useParams} from "react-router-dom";
import {NotesStore} from "../store/NotesStore";

type QuizParams = {
    name?: any;
};

// type ForcastWeatherProps = {
//     forcastWeather: NotesStore["forcastWeather"],
// }


export const WeatherCityForcast: React.FC = () => {
    const {name} = useParams<QuizParams>();
    // const callForcast = forcastWeather(name)
    // console.log(callForcast)


    return (
        <>
            <div>
                <h1>{name}</h1>
            </div>
        </>
    )
}