import styled from 'styled-components';


export const WeatherFieldContainer = styled.div`
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

export const WeatherField = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  margin: 5px;
`;

export const CityName = styled.h2`
  display: flex;
  justify-content: space-between;
  color: crimson;
  align-items: center;
`;

export const WeatherIcon = styled.img`
  width: 70px !important;
  height: 70px !important
`;