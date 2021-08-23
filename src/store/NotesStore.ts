import {observable, action, runInAction, makeObservable, autorun} from 'mobx';
import {fetchWeatherData, fetchForcastWeatherData, fetchCurrentCityWeatherData} from '../utils/weatherApi';
import routing from './routing';


export class RootStore {
    @observable notesStore: any
    @observable forcastStore: any


    constructor() {
        this.notesStore = new NotesStore(this)
        this.forcastStore = new ForcastStore(this);
    }


}


export class NotesStore {
    @observable rootStore: any
    @observable weathers: any;
    @observable.ref currentCity: any;
    @observable fetchingData: boolean;
    @observable celsius: boolean;
    @observable geo: any;
    @observable isLoading: boolean;


    constructor(rootStore: any) {
        this.rootStore = rootStore;

        this.weathers = [];
        this.currentCity = [];
        this.fetchingData = false;
        this.geo = {};
        this.celsius = true;
        this.isLoading = false
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
    changeCels() {
        this.celsius = !this.celsius
    }

    @action.bound
    getCurrentCityWeatherData = async () => {
        this.isLoading = true;
        try {
            await navigator.geolocation.getCurrentPosition((position) => {
                if (position.coords.latitude){
                    this.geo = {
                        lat: position.coords.latitude.toString(),
                        log: position.coords.longitude.toString()
                    }

                }

                    this.isLoading = false;
                }
            );
        } catch (e) {
            console.log(e)
        }
        console.log(this.geo)


        autorun(async () => {
            const watchID = await fetchCurrentCityWeatherData(this.geo.lat, this.geo.log);
            console.log(watchID)
            this.currentCity = watchID
        })
    }


    @action.bound
    removeCity = (city: string) => {
        autorun(() => {
            const filteredData = this.weathers.find((cityItem: any) => city === cityItem.name);
            this.weathers.remove(filteredData)
        })
    }
}


export class ForcastStore {
    @observable rootStore: any
    @observable.ref weathersForcastArr: string[] | number[];
    @observable fetchingData: boolean;

    constructor(rootStore: any) {
        this.rootStore = rootStore;
        this.weathersForcastArr = [];
        this.fetchingData = false;
        makeObservable(this);
    }

    @action.bound
    forcastWeather = async (city: string) => {
        this.fetchingData = false;
        routing.push(`/weatherCity/${city}`)
        const weatherForcast = await fetchForcastWeatherData(city);


        runInAction(() => {
            this.weathersForcastArr = weatherForcast;
            this.fetchingData = true;
        });


    }
}

