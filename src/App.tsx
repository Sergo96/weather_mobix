import {observer} from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import {NewNoteInput} from './Components/NewNoteInput';
import {useRootStore} from './RootStateContext';


const App: React.FC = observer(() => {
    const {notesStore} = useRootStore();


    return (
        <>
            <MainPageContainer>
                <NewNoteInput addWeather={notesStore.searchForWeather}/>
                <hr/>
                <ul>
                    {
                        notesStore.weathers.map((note: any) => (
                            <WeatherFieldContainer>
                                <li key={note.id}>{note.name}</li>
                                <WeatherField className="">
                                    <p>Temperature °K : {note.main.temp}</p>
                                </WeatherField>

                                <WeatherField>
                                    <p>Clouds - {note.weather[0].description}</p>
                                </WeatherField>

                                <WeatherField className="">
                                    <p>Humidity : {note.main.humidity}</p>
                                </WeatherField>

                                <WeatherField className="">
                                    <p>Pressure : {note.main.pressure}</p>
                                </WeatherField>

                                <WeatherField className="">
                                    <p>Country : "{note.sys.country}"</p>
                                </WeatherField>

                                <WeatherField className="">
                                    <p>Wind deg : {note.wind.deg}</p>
                                </WeatherField>

                                <WeatherField className="">
                                    <p>Wind speed : {note.wind.speed}</p>
                                </WeatherField>
                            </WeatherFieldContainer>
                        ))
                    }
                </ul>
            </MainPageContainer>
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

const WeatherFieldContainer = styled.div`
  padding-top: 20px;
`;

const WeatherField = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  margin: 5px;

`;