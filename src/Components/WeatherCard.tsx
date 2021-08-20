import React from 'react';
import {NotesStore} from "../store/NotesStore";
import CloudIcon from '@material-ui/icons/Cloud';
import styled from 'styled-components';


type NewNoteInputProps = {
    removeWeather: NotesStore["removeCity"],
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

export const WeatherCard: React.FC<NewNoteInputProps> = ({
                                                             removeWeather,
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

    const deleteCityHandler = (event: string) => {
        console.log(event)
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

                <button onClick={() => deleteCityHandler(name)}>Delete</button>
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