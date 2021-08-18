import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import { NewNoteInput } from './Components/NewNoteInput';
import { useRootStore } from './RootStateContext';



const App: React.FC = observer(() => {

  const { notesStore } = useRootStore();
  // const [weatherData, setWeatherData] = React.useState([]);
  const weatherData = notesStore.weathers
  console.log(weatherData);

  notesStore.weathers.map((note: any) => console.log(note));
  



  return (
    <>
    <MainPageContainer>
    <NewNoteInput addWeather={notesStore.searchForWeather} />
      <hr />
      <ul>
        {
          notesStore.weathers.map((note: any) => (
            <>
            <li key={note.id}>{note.name}</li>
            <p>Temperature °K : {note.main.temp}</p>
            <p>Clouds - {note.weather[0].description}</p>
            <p>Humidity : {note.main.humidity}</p>
            <p>Pressure : {note.main.pressure}</p>
            <p>Country - "{note.sys.country}"</p>
            <p>Wind deg : {note.wind.deg}</p>
            <p>Wind speed : {note.wind.speed}</p>
            </>
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