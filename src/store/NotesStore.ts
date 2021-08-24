import {observable, action, runInAction, makeObservable, autorun} from 'mobx';
import {fetchWeatherData, fetchForcastWeatherData} from '../utils/weatherApi';
import routing from './routing';
import axios from "axios";


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
    @observable.ref geo: any;
    @observable isLoading: boolean;
    @observable error: any;
    @observable isModalVisible: boolean;


    constructor(rootStore: any) {
        this.rootStore = rootStore;

        this.weathers = [];
        this.currentCity = {};
        this.fetchingData = false;
        this.geo = {};
        this.celsius = true;
        this.isLoading = false
        this.error = [];
        this.isModalVisible = false;
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



    @action getCurrentCityWeatherData = () => {
        this.isLoading = true;
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.geo = {
                    lat: position.coords.latitude,
                    log: position.coords.longitude
                }
                axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.geo.lat}&lon=${this.geo.log}&appid=2234d400e71a38976fa7d2fac9bc006d`)
                    .then(response => {
                        console.log(response.data);
                        runInAction(() => {
                            this.currentCity = response.data;
                            this.isLoading = false;
                            this.isModalVisible = true;
                        });
                    }).catch(error => {
                    console.log(error);
                    this.error = error
                    this.isLoading = false
                });
            },
            (error) => this.error = error,
            { enableHighAccuracy: false, timeout: 20000 },
        );
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
    @observable celsius: boolean;



    constructor(rootStore: any) {
        this.rootStore = rootStore;
        this.weathersForcastArr = [];
        this.fetchingData = false;
        this.celsius = true;
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

    @action.bound
    changeForcastCels() {
        this.celsius = !this.celsius
    }
}

