import {observable, action, runInAction, makeObservable} from 'mobx';
import {fetchWeatherData, fetchForcastWeatherData} from '../utils/weatherApi';
import routing from './routing';
// import { configure } from "mobx"

// import RouterStore from './routing'

// configure({
//     useProxies: "never",
//     enforceActions: "always",
//     computedRequiresReaction: true,
//     reactionRequiresObservable: true,
//     observableRequiresReaction: true,
//     disableErrorBoundaries: true
// })


export class RootStore {
    @observable notesStore: any
    @observable forcastStore: any

    // @observable routingStore: any


    constructor() {
        this.notesStore = new NotesStore(this)
        this.forcastStore = new ForcastStore(this);
        // this.routingStore = new RouterStore(this);
    }


}


export class NotesStore {
    // @observable weather: string = '';
    // @observable weathers: string[] = [];
    @observable rootStore: any
    @observable weathers: any;
    @observable fetchingData: boolean;


    constructor(rootStore: any) {
        this.rootStore = rootStore;


        this.weathers = [];
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
    removeCity = (city: string) => {
        runInAction(() => {
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
        // this.fetchingData = true;
        routing.push(`/weatherCity/${city}`)
        const weatherForcast = await fetchForcastWeatherData(city);
        runInAction(() => {
            this.weathersForcastArr = weatherForcast ;
            // this.fetchingData = false;
        });
    }
}

