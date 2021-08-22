import React from 'react';
import {observer} from 'mobx-react-lite';
import {Route, Switch} from 'react-router-dom';

import styled from 'styled-components';
import {NewNoteInput} from './Components/NewNoteInput';
import {useRootStore} from './RootStateContext';
import {WeatherCard} from "./Components/WeatherCard";
import {WeatherCityForcast} from "./Components/WeatherCityForcast";

const App: React.FC = observer(() => {
    const {rootStore} = useRootStore();
    console.log(rootStore);


    return (
        <>
            <Switch>

                <Route exact path={'/'}>
                    <NewNoteInput addWeather={rootStore.notesStore.searchForWeather}/>

                    <MainPageContainer>
                        <hr/>
                        <ul>
                            {
                                rootStore.notesStore.weathers.map((note: any) => (
                                    <WeatherCard
                                        removeWeather={rootStore.notesStore.removeCity}
                                        forcastWeather={rootStore.forcastStore.forcastWeather}
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
                </Route>


                <Route exact path="/weatherCity/:name">
                    <WeatherCityForcast forcastWeather={rootStore.notesStore.forcastWeather} />
                </Route>

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

