import React from 'react';
// import {ForcastStore, NotesStore} from "../store/NotesStore";
// import {makeStyles, Theme} from '@material-ui/core/styles';
// import {useHistory} from 'react-router-dom';


import CloudIcon from '@material-ui/icons/Cloud';
import styled from 'styled-components';
// import Button from '@material-ui/core/Button';
// import DeleteIcon from '@material-ui/icons/Delete';

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

                                                            }) => {

    temp = typeof temp === "string" ? parseFloat(temp) : typeof temp === "number" ? temp : 0

    return (
        <>
            <CurrentWeatherFieldContainer>
                <CurrentCityName key={id}>
                    <CloudIcon/>
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


const CurrentWeatherFieldContainer = styled.div`
  margin-top: 20px;
  padding: 35px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 250px;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const CurrentWeatherField = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  margin: 5px;
`;

const CurrentCityName = styled.h2`
  display: flex;
  justify-content: space-between;
  color: crimson;
  align-items: center;
`;