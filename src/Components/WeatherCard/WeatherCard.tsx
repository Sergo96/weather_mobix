import React from 'react';
import {ForcastStore, NotesStore} from "../../store/NotesStore";
import {makeStyles, Theme} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { Style } from './styles';


type NewNoteInputProps = {
    removeWeather: NotesStore["removeCity"],
    forcastWeather: ForcastStore["forcastWeather"],
    id: number | string,
    name: string,
    temp: number,
    celsius: boolean,
    description: string,
    humidity: string | number,
    pressure: string | number,
    country: string,
    deg: string | number,
    speed: string | number,
    icon: string
}

const useStyles = makeStyles((theme: Theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export const WeatherCard: React.FC<NewNoteInputProps> = ({
                                                             removeWeather,
                                                             forcastWeather,
                                                             celsius,
                                                             id,
                                                             name,
                                                             temp,
                                                             description,
                                                             humidity,
                                                             pressure,
                                                             country,
                                                             deg,
                                                             speed,
                                                             icon

                                                         }) => {
    const classes = useStyles();
    // const history = useHistory();
    // const [celsius, setCelsius] = React.useState(true);

    const forcastCityWeather = (cityName: string) => {
        forcastWeather(cityName)
        // history.push(`/weatherCity/${cityName}`);
    };

    const deleteCityHandler = (event: string) => {
        removeWeather(event)
    }
    return (
        <>
            <Style.WeatherFieldContainer>
                <Style.CityName key={id}>
                    <Style.WeatherIcon src={icon ? `http://openweathermap.org/img/wn/${icon}@4x.png` : undefined}/>
                    {name}
                </Style.CityName>
                <Style.WeatherField className="">
                    <p>Temperature
                        : {celsius ? Math.ceil(temp - 273) + "°C" : Math.ceil(((temp - 273.15) * 9 / 5 + 32)) + "°F"}</p>
                </Style.WeatherField>

                <Style.WeatherField>
                    <p>Clouds : {description}</p>
                </Style.WeatherField>

                <Style.WeatherField >
                    <p>Humidity : {humidity}</p>
                </Style.WeatherField>

                <Style.WeatherField>
                    <p>Pressure : {pressure}</p>
                </Style.WeatherField>

                <Style.WeatherField>
                    <p>Country : "{country}"</p>
                </Style.WeatherField>

                <Style.WeatherField>
                    <p>Wind deg : {deg}</p>
                </Style.WeatherField>

                <Style.WeatherField>
                    <p>Wind speed : {speed}</p>
                </Style.WeatherField>

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
            </Style.WeatherFieldContainer>
        </>
    )
}
