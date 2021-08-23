import React from 'react';
import {ForcastStore, NotesStore} from "../store/NotesStore";
import {makeStyles, Theme} from '@material-ui/core/styles';
// import {useHistory} from 'react-router-dom';


import CloudIcon from '@material-ui/icons/Cloud';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


type NewNoteInputProps = {
    removeWeather: NotesStore["removeCity"],
    forcastWeather: ForcastStore["forcastWeather"],

    id: number | string,
    name: string,
    temp: number | string,
    description: string,
    humidity: string | number,
    pressure: string | number,
    country: string,
    deg: string | number,
    speed: string | number
}

const useStyles = makeStyles((theme: Theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));


export const WeatherCard: React.FC<NewNoteInputProps> = ({
                                                             removeWeather,
                                                             forcastWeather,
                                                             id,
                                                             name,
                                                             temp,
                                                             description,
                                                             humidity,
                                                             pressure,
                                                             country,
                                                             deg,
                                                             speed

                                                         }) => {
    const classes = useStyles();
    // const history = useHistory();

    const forcastCityWeather = (cityName: string) => {
        forcastWeather(cityName)
        // history.push(`/weatherCity/${cityName}`);
    };

    const deleteCityHandler = (event: string) => {
        removeWeather(event)
    }
    return (
        <>
            <WeatherFieldContainer>
                <CityName key={id}>
                    <CloudIcon/>
                    {name}
                </CityName>
                <WeatherField className="">
                    <p>Temperature °K : {temp}</p>
                </WeatherField>

                <WeatherField>
                    <p>Clouds : {description}</p>
                </WeatherField>

                <WeatherField className="">
                    <p>Humidity : {humidity}</p>
                </WeatherField>

                <WeatherField className="">
                    <p>Pressure : {pressure}</p>
                </WeatherField>

                <WeatherField className="">
                    <p>Country : "{country}"</p>
                </WeatherField>

                <WeatherField className="">
                    <p>Wind deg : {deg}</p>
                </WeatherField>

                <WeatherField className="">
                    <p>Wind speed : {speed}</p>
                </WeatherField>

                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon/>}
                    onClick={() => deleteCityHandler(name)}
                >
                    Delete
                </Button>
                <Button
                    color="primary"
                    onClick={() => forcastCityWeather(name)}
                >
                    View Forcast
                </Button>
            </WeatherFieldContainer>

        </>
    )


}


const WeatherFieldContainer = styled.div`
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

const WeatherField = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  margin: 5px;
`;

const CityName = styled.h2`
  display: flex;
  justify-content: space-between;
  color: crimson;
  align-items: center;
`;