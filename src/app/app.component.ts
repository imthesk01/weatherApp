import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { IWeatherData } from './models/IWeatherData.interface';
import{ IWeatherRawData } from './models/IWeatherRawData.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My Weather App';
  cityDetails: any;
  city: string ='city_name';
  country:string='country_name';
  imgUrl: 'https://www.metaweather.com/static/img/weather/lc.svg';

  ngOnInit() {
  }

  constructor(
    private weatherService: WeatherService,
  ) {}

 // valueEmittedFromChildComponent: number;

//   getCityDetails(woeid) {
//     /*
//       CHALLENGE
//        - pass the city id to service.getCityDetails(woeid)
//     */
//    this.valueEmittedFromChildComponent = woeid;

//    this.weatherService.getCityDetails(woeid)
//       .subscribe(data =>{
//         this.cityDetails=data.consolidated_weather;
//   });
//   this.weatherService.getCityDetails(woeid)
//   .subscribe(data =>{
//     this.city=data.title;
// });

// this.weatherService.getCityDetails(woeid)
// .subscribe(data =>{
//   this.country=data.parent.title;
// });
// }
}
