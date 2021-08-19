import {observer} from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import {NewNoteInput} from './Components/NewNoteInput';
import {useRootStore} from './RootStateContext';
import CloudIcon from '@material-ui/icons/Cloud';


const App: React.FC = observer(() => {
    const {notesStore} = useRootStore();

    return (
        <>
            <NewNoteInput addWeather={notesStore.searchForWeather}/>
            <MainPageContainer>
                <hr/>
                <ul>
                    {
                        notesStore.weathers.map((note: any) => (
                            <WeatherFieldContainer>
                                <CityName key={note.id}>
                                    <CloudIcon/>
                                    {note.name}
                                </CityName>
                                <WeatherField className="">
                                    <p>Temperature °K : {note.main.temp}</p>
                                </WeatherField>

                                <WeatherField>
                                    <p>Clouds : {note.weather[0].description}</p>
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
  margin-top: 20px;
  padding: 35px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 250px;
  border-radius: 15px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
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