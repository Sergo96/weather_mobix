import React, {Suspense} from 'react';
import {observer} from 'mobx-react-lite';

import {Route, Switch} from 'react-router-dom';

import styled from 'styled-components';

import {useRootStore} from './RootStateContext';

import {CurrentCityCard} from "./Components/CurrentCityCard/CurrentCityCard";
import {Layout} from "./hoc/Layout";

import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


const WeatherCard = React.lazy(() => import("./Components/WeatherCard/WeatherCard").then(({WeatherCard}) => ({default: WeatherCard})),);
const WeatherCityForcast = React.lazy(() => import("./pages/WeatherCityForcast").then(({WeatherCityForcast}) => ({default: WeatherCityForcast})),);


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            '& > * + *': {
                marginLeft: theme.spacing(2),
            },
        },
    }),
);

const App: React.FC = observer(() => {
    const {rootStore} = useRootStore();
    const classes = useStyles();

    interface IWeatherCardType {
        removeWeather: (city: string) => void;
        forcastWeather: (city: string) => Promise<void>;
        main: any;
        celsius: boolean;
        id: string | number;
        name: string;
        temp: number;
        description: string | any;
        weather: {
            description: string;
            icon: string;
        }[];
        sys: {
            country: string;
        };
        wind: {
            deg: number;
            speed: number;
        }
        humidity: string | number;
        pressure: string | number;
        country: string;
        deg: string | number;
        speed: string | number;
        icon: string | any;

    }

    const callFunc = async () => {
        await rootStore.notesStore.getCurrentCityWeatherData()
    }
    console.log(rootStore)

    React.useEffect(() => {
        callFunc()
        // eslint-disable-next-line
    }, [])
    console.log({rootStore})
    return (
        <>
            <Suspense fallback={<div className={classes.root}><CircularProgress/></div>}>
                <Switch>
                    <Layout>
                        <Route exact path={'/'}>
                            <MainPageContainer>
                                <hr/>
                                <ul>
                                    {/*{rootStore.notesStore}*/}
                                    <CurrentCityCard
                                        id={rootStore.notesStore.currentCity.id}
                                        name={rootStore.notesStore.currentCity.name}
                                        temp={rootStore.notesStore.currentCity?.main?.temp || 0}
                                        celsius={rootStore.notesStore.celsius}
                                    />
                                </ul>
                                <ul>
                                    {
                                        rootStore.notesStore.weathers.map((note: IWeatherCardType) => {
                                                return (
                                                    <Suspense fallback={<div className={classes.root}><CircularProgress/>
                                                    </div>}>
                                                        <WeatherCard
                                                            removeWeather={rootStore.notesStore.removeCity}
                                                            forcastWeather={rootStore.forcastStore.forcastWeather}
                                                            celsius={rootStore.notesStore.celsius}
                                                            id={note.id}
                                                            name={note.name}
                                                            temp={note.main.temp}
                                                            description={note.weather[0].description}
                                                            humidity={note.main.humidity}
                                                            pressure={note.main.pressure}
                                                            country={note.sys.country}
                                                            deg={note.wind.deg}
                                                            speed={note.wind.speed}
                                                            icon={note.weather[0].icon}
                                                        />
                                                    </Suspense>
                                                )
                                            }
                                        )
                                    }
                                </ul>
                            </MainPageContainer>
                        </Route>
                        <Route exact path="/weatherCity/:name" render={() => {
                            return (
                                <WeatherCityForcast
                                    changeCelcius={rootStore.notesStore.changeCels}
                                    celsius={rootStore.forcastStore.celsius}
                                    forcastWeather={rootStore.notesStore.forcastWeather}
                                />
                            )
                        }}>
                        </Route>
                    </Layout>
                </Switch>
            </Suspense>
        </>
    )
})

export default App;


const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

