import React from 'react';
import {observer} from 'mobx-react-lite';
import {Route, Switch} from 'react-router-dom';
import cities from 'cities.json';


import styled from 'styled-components';
import {NewNoteInput} from './Components/NewNoteInput';
import {useRootStore} from './RootStateContext';
import {WeatherCard} from "./Components/WeatherCard";
import {WeatherCityForcast} from "./Components/WeatherCityForcast";
import {CurrentCityCard} from "./Components/CurrentCityCard";
import {Layout} from "./hoc/Layout";
// import {NotesStore} from "./store/NotesStore";

const App: React.FC = observer(() => {




    // for(let i in cities){
    //     console.log(cities[i].name)
    // }

    // console.log(b)
    const {rootStore} = useRootStore();


    const callFunc = async () => {
        await rootStore.notesStore.getCurrentCityWeatherData()
    }


    React.useEffect(() => {
        callFunc()

        // setCurrentCityData(rootStore.notesStore.currentCity)
    }, [])
    console.log({rootStore}, rootStore.notesStore.currentCity)
    return (
        <>
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
                                    // name={"Armenia"}
                                    temp={rootStore.notesStore.currentCity?.main?.temp || 0}
                                    // description={rootStore.notesStore.currentCity?.weather.description}
                                    // humidity={rootStore.notesStore.currentCity?.main.humidity}
                                    // pressure={rootStore.notesStore.currentCity?.main.pressure}
                                    // country={rootStore.notesStore.currentCity?.sys.country}
                                    // deg={rootStore.notesStore.currentCity?.wind.deg}
                                    // speed={rootStore.notesStore.currentCity?.wind.speed}
                                    celsius={rootStore.notesStore.celsius}

                                />
                            </ul>
                            <ul>
                                {
                                    rootStore.notesStore.weathers.map((note: any) => (
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
                                        />
                                    ))
                                }
                            </ul>
                        </MainPageContainer>
                        {/*<NewNoteInput*/}
                        {/*    changeCelcius={rootStore.notesStore.changeCels}*/}
                        {/*    addWeather={rootStore.notesStore.searchForWeather}*/}
                        {/*/>*/}
                        {/*{callFunc()}*/}


                    </Route>


                    <Route exact path="/weatherCity/:name">
                        <WeatherCityForcast
                            changeCelcius={rootStore.notesStore.changeCels}
                            celsius={rootStore.forcastStore.celsius}
                            forcastWeather={rootStore.notesStore.forcastWeather}

                        />
                    </Route>
                </Layout>


            </Switch>

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

