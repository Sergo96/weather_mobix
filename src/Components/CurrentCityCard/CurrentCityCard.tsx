import React from 'react';



import { CurrentCityName, CurrentWeatherField, CurrentWeatherFieldContainer } from './styles';


type CurrentCityProps = {
    // removeWeather: NotesStore["removeCity"],
    // forcastWeather: ForcastStore["forcastWeather"],

    id: number | string,
    name?: string,
    temp?: number | string,
    celsius: boolean,
    // description?: string,
    // humidity?: string | number,
    // pressure?: string | number,
    // country: string,
    // deg?: string | number,
    // speed?: string | number
    // icon?: string
}

// const useStyles = makeStyles((theme: Theme) => ({
//     button: {
//         margin: theme.spacing(1),
//     },
// }));


export const CurrentCityCard: React.FC<CurrentCityProps> = ({

                                                                celsius,
                                                                id,
                                                                name,
                                                                temp,
                                                                // description,
                                                                // humidity,
                                                                // pressure,
                                                                // country,
                                                                // deg,
                                                                // speed
                                                                // icon,

                                                            }) => {

    temp = typeof temp === "string" ? parseFloat(temp) : typeof temp === "number" ? temp : 0

    return (
        <>
            <CurrentWeatherFieldContainer>
                <CurrentCityName key={id}>
                    {/*<CloudIcon/>*/}
                    {/*<CurrentWeatherIcon src={icon ? `http://openweathermap.org/img/wn/${icon}@4x.png` : undefined}/>*/}
                    {name}
                </CurrentCityName>
                <CurrentWeatherField className="">
                    {/*<p>Temperature °K : {temp}</p>*/}
                    <p>Temperature
                        : {celsius ? Math.ceil(temp - 273) + "°C" : Math.ceil(((temp - 273.15) * 9 / 5 + 32)) + "°F"}</p>
                </CurrentWeatherField>

                {/*<CurrentWeatherField>*/}
                {/*    <p>Clouds : {description}</p>*/}
                {/*</CurrentWeatherField>*/}

                {/*<CurrentWeatherField className="">*/}
                {/*    <p>Humidity : {humidity}</p>*/}
                {/*</CurrentWeatherField>*/}

                {/*<CurrentWeatherField className="">*/}
                {/*    <p>Pressure : {pressure}</p>*/}
                {/*</CurrentWeatherField>*/}

                {/*<CurrentWeatherField className="">*/}
                {/*    <p>Country : "{country}"</p>*/}
                {/*</CurrentWeatherField>*/}

                {/*<CurrentWeatherField className="">*/}
                {/*    <p>Wind deg : {deg}</p>*/}
                {/*</CurrentWeatherField>*/}

                {/*<CurrentWeatherField className="">*/}
                {/*    <p>Wind speed : {speed}</p>*/}
                {/*</CurrentWeatherField>*/}


                {/*<Button*/}
                {/*    color="primary"*/}
                {/*    onClick={() => forcastCityWeather(name)}*/}
                {/*>*/}
                {/*    View Forcast*/}
                {/*</Button>*/}
            </CurrentWeatherFieldContainer>
        </>
    )
}