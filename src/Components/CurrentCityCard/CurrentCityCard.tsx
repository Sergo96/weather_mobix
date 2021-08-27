import React from 'react';
import {Style} from './styles';


type CurrentCityProps = {
    id: number | string,
    name?: string,
    temp?: number | string,
    celsius: boolean,
}


export const CurrentCityCard: React.FC<CurrentCityProps> = ({
                                                                celsius,
                                                                id,
                                                                name,
                                                                temp,

                                                            }) => {

    temp = typeof temp === "string" ? parseFloat(temp) : typeof temp === "number" ? temp : 0

    return (
        <>
            <Style.CurrentWeatherFieldContainer>
                <Style.CurrentCityName key={id}>
                    {name}
                </Style.CurrentCityName>
                <Style.CurrentWeatherField className="">
                    <p>Temperature
                        : {celsius ? Math.ceil(temp - 273) + "°C" : Math.ceil(((temp - 273.15) * 9 / 5 + 32)) + "°F"}</p>
                </Style.CurrentWeatherField>
            </Style.CurrentWeatherFieldContainer>
        </>
    )
}


