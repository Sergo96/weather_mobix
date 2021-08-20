import {observable, action, runInAction, makeObservable} from 'mobx';
import {fetchWeatherData, fetchForcastWeatherData} from '../utils/weatherApi';

export class NotesStore {
    // @observable weather: string = '';
    // @observable weathers: string[] = [];
    @observable weathers: any;
    @observable weathersForcastArr: any;
    @observable fetchingData: boolean;

    constructor() {
        this.weathers = [];
        this.weathersForcastArr = [];
        this.fetchingData = false;
        makeObservable(this);
    }

    @action.bound
    searchForWeather = async (city: string) => {
        this.fetchingData = true;
        const weather = await fetchWeatherData(city);
        runInAction(() => {
            this.weathers.push(weather);
            this.fetchingData = false;
        });
    };

    @action.bound
    forcastWeather = async (city: string) => {
        this.fetchingData = true;
        const weatherForcast = await fetchForcastWeatherData(city);
        runInAction(() => {
            this.weathersForcastArr.push(weatherForcast);
            this.fetchingData = false;
        });
    }

    @action.bound
    removeCity = (city: string) => {
        runInAction(() => {
            const filteredData = this.weathers.find((cityItem: any) => city === cityItem.name);
            this.weathers.remove(filteredData)
        })
    }
}
