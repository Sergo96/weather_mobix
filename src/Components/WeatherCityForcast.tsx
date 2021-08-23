import React from "react";
// import {useParams} from "react-router-dom";
import {ForcastStore} from "../store/NotesStore";
import {useRootStore} from '../RootStateContext';
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom"


// type QuizParams = {
//     name?: any;
// };

type ForcastWeatherProps = {
    forcastWeather: ForcastStore["forcastWeather"],
}


export const WeatherCityForcast: React.FC<ForcastWeatherProps> = observer(({forcastWeather}) => {
    // const {name} = useParams<QuizParams>();
    const {rootStore} = useRootStore();
    console.log(rootStore.forcastStore.weathersForcastArr)



    return (
        <>
            <div>
                <Link to={"/"}>
                    <h1>Go back Mian Page</h1>
                </Link>
                {rootStore.forcastStore.weathersForcastArr.city.name}
            </div>
        </>
    )
})