import { Component, OnInit, Input } from '@angular/core';
import { IWeatherData } from '../../models/IWeatherData.interface';
import { WeatherService } from './../../services/weather.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  /*
    CHALLENGE
     - Take the city details from app.component.html into "cityDetails"
     - display the city details in the template
  */
 title = 'My Weather App';
  cityDetails: any;
  city: string ='city_name';
  country:string='country_name';
  
  valueEmittedFromChildComponent: number= 0;
 // cityDetails: IWeatherData;
  i: number;
  imgUrl: 'https://www.metaweather.com/static/img/weather/.svg';
  constructor( private weatherService: WeatherService) { }

  ngOnInit() {
    
    // this.i=1;
    // this.cityDetails={
    //   city: 'chennai',
    //   country: 'india',
    //   weather: [
    //     {
    //       date: 'Aug 3, 2018',
    //       temperature: 31.1,
    //       weather_name: 'sunny',
    //       weather_image: this.imgUrl,
    //     }
    //   ]
    // }
    // if(this.cityDetails.weather[0].temperature==2){
    //   this.cityDetails.weather[0].temperature=2.0
    // }
  }

  getCityDetails(woeid) {
    /*
      CHALLENGE
       - pass the city id to service.getCityDetails(woeid)
    */
  // this.valueEmittedFromChildComponent = woeid;

   this.weatherService.getCityDetails(woeid)
      .subscribe(data =>{
        this.cityDetails=data.consolidated_weather;
  });
  this.weatherService.getCityDetails(woeid)
  .subscribe(data =>{
    this.city=data.title;
});

this.weatherService.getCityDetails(woeid)
.subscribe(data =>{
  this.country=data.parent.title;
});

this.valueEmittedFromChildComponent = woeid;
}


}
