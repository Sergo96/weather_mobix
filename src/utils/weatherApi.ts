import axios from "axios";

// const BASEURL = 'http://api.openweathermap.org';
const API_KEY = '2234d400e71a38976fa7d2fac9bc006d';

export const fetchWeatherData = (query: string): Promise<string[]> => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`).then(
        (res) => res.json()
    );
};

export const fetchForcastWeatherData = async (query: string): Promise<string[]> => {
    console.log(query)
    try {
     const res =  await  axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&APPID=${API_KEY}`)
        if(res){
            return res?.data || []
        }
        return []
    }
    catch (e) {
        console.log(e.message)
        return []
    }

};
//
// export const fetchForcastWeatherData = (query: string): Promise<string[]> => {
//     let result :string[]
//      setTimeout(() => {
//         fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&APPID=${API_KEY}`).then(
//             (res) => res.json()
//         ).then(res=>{
//             result = res
//         })
//     }, 500)
//     return result
// };
