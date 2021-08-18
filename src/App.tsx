import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import { NewNoteInput } from './Components/NewNoteInput';
import { useRootStore } from './RootStateContext';
import CloudIcon from '@material-ui/icons/Cloud';



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
              <div className="">
                <p>Temperature °K : {note.main.temp}</p>
              </div>
              
              <WeatherField className="">
                <CloudIcon/>
                <p>Clouds - {note.weather[0].description}</p>
              </WeatherField>

              <div className="">
                <p>Humidity : {note.main.humidity}</p>
              </div>

              <div className="">
                <p>Pressure : {note.main.pressure}</p>
              </div>

              <div className="">
                <p>Country - "{note.sys.country}"</p>
              </div>

              <div className="">
                <p>Wind deg : {note.wind.deg}</p>
              </div>

              <div className="">
                <p>Wind speed : {note.wind.speed}</p>
              </div>
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

const WeatherField = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;

`;