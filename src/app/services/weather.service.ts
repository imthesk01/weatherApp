import { ICityWeather } from './../models/IWeatherData.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { IWeatherRawData } from '../models/IWeatherRawData.interface';
import { ISearchResult, IWeatherData } from '../models/IWeatherData.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient,
  ) { }

  baseUrl = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com';
  iWeatherData: IWeatherData;
  iWeatherRawData: IWeatherRawData;

  searchLocation(term): Observable<ISearchResult[]> {
    /*
      CHALLANGE
       - get list of cities based on the searched string
       sample url: baseUrl/api/location/search/?query=paris
    */
   //return this.http.get<any>(this.baseUrl+"/"+"api/location/search/?query=+"+term);

    return this.http.get<ISearchResult[]>(this.baseUrl+'/api/location/search/?query='+term);
 
  }

  getCityDetails(woeid): Observable<IWeatherRawData> {
    /*
      woeid is the city id(number).
      you can use below sample url to fetch the city weather details
      sample url : baseUrl/api/location/111111   https://www.metaweather.com/api/location/28743736
    */
    /*
      CHALLENGE
       - fetch the city weather data
       - transform the received data to required "IWeatherData" format using transformRawData() func
    */
   return this.http.get<IWeatherRawData>(this.baseUrl+'/api/location/'+woeid)
  //       .subscribe(data=>{
  //         let response=this.transformRawData(data);
  //  });
  //  this.iWeatherRawData={
  //    consolidated_weather: [
  //         {
  //             weather_state_name: 'state',
  //             weather_state_abbr: 'cloudy',
  //             applicable_date: '2018-08-03',
  //             the_temp: 29,
  //         }
  //     ],
  //     parent: {
  //         title: 'country',
  //     },
  //     title: 'title',
  //  }
  // this.iWeatherData=this.transformRawData(this.iWeatherRawData);
  //  return of(this.iWeatherData);
  }

  transformRawData(rawData: IWeatherRawData) {
    const transformedWeather: Array<ICityWeather> = [];

    rawData.consolidated_weather.forEach(function(obj) {
      const date = '';
      const temperature = 0;
      const weather_name = '';
      const weather_image = `https://www.metaweather.com/static/img/weather/.svg`;

      transformedWeather.push({date, temperature, weather_image, weather_name } as ICityWeather);
    });

    return {
      city: rawData.title,
      country: rawData.parent.title,
      weather: [],
    };
  }
}
