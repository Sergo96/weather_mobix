import {observable, action, runInAction, makeObservable, autorun} from 'mobx';
import {fetchWeatherData, fetchForcastWeatherData} from '../utils/weatherApi';
import routing from './routing';
import axios from "axios";
import cities from 'cities.json';

interface iCity {
    country: string
    lat: string
    lng: string
    name: string
}

export class RootStore {
    @observable notesStore: any;
    @observable forcastStore;


    constructor() {
        this.notesStore = new NotesStore(this)
        this.forcastStore = new ForcastStore(this);
    }
}


export class NotesStore {
    @observable rootStore: any
    @observable weathers: string[] | number[] | any;
    @observable.ref currentCity: any;
    @observable fetchingData: boolean;
    @observable celsius: boolean;
    @observable.ref geo: { lat?: number | string, log?: number | string };
    @observable isLoading: boolean;
    @observable error: any;
    @observable isModalVisible: boolean;


    constructor(rootStore: RootStore) {
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
    searchForWeather = async (city: string): Promise<void> => {
        this.fetchingData = true;
        const myCities = cities as iCity[]
        const myCity = myCities.find(myCity => myCity.name === city) || false
        if (myCity) {
            const weather = await fetchWeatherData(city);
            if (this.weathers.some((weatherCityName: any) => weatherCityName.name === city)) {
                alert('this city already added')
            } else {
                runInAction(() => {
                    this.weathers.push(weather);
                    this.fetchingData = false;
                });
            }
        } else {
            alert("That city doesn't exist")
        }
    };

    @action.bound
    changeCels() {
        this.celsius = !this.celsius
    }


    @action getCurrentCityWeatherData = (): void => {
        this.isLoading = true;
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.geo = {
                    lat: position.coords.latitude,
                    log: position.coords.longitude
                }
                console.log(this.geo)
                if (this.geo.lat && this.geo.log)
                    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.geo?.lat}&lon=${this.geo?.log}&appid=2234d400e71a38976fa7d2fac9bc006d`)
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
            {enableHighAccuracy: false, timeout: 20000},
        );
    }


    @action.bound
    removeCity = (city: string): void => {
        autorun(() => {
            const filteredData = this.weathers.find((cityItem: any) => city === cityItem.name);
            this.weathers.remove(filteredData)
        })
    }
}


export class ForcastStore {
    @observable rootStore: any
    @observable.ref weathersForcastArr: string[] | number[] | {} | any;
    @observable fetchingData: boolean;
    @observable celsius: boolean;
    @observable.ref weatherDate: string = '';
    @observable.ref forecastNumber: number = 0;


    constructor(rootStore: any) {
        this.rootStore = rootStore;
        this.weathersForcastArr = [];
        this.fetchingData = false;
        this.celsius = true;
        this.weatherDate = '';
        this.forecastNumber = 0;
        makeObservable(this);
    }

    @action.bound
    forcastWeather = async (city: string): Promise<void> => {
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

