import {observable, action, runInAction, makeObservable} from 'mobx';
import {fetchWeatherData} from '../utils/weatherApi';

export class NotesStore {
    // @observable weather: string = '';
    // @observable weathers: string[] = [];
    @observable weathers: any;
    @observable fetchingData: boolean;

    constructor() {
        this.weathers = [];
        this.fetchingData = false;
        makeObservable(this);

    }

    @action.bound
    searchForWeather = async (city: string) => {
        this.fetchingData = true;
        const weather = await fetchWeatherData(city);
        runInAction(() => {
            // this.weather = weather;
            // this.weathers = weather;
            this.weathers.push(weather);
            this.fetchingData = false;
        });
    };


}
