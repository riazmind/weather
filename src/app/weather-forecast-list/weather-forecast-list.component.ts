import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { weatherBit } from '../../environments/environment';
import { CityDetails } from '../models/city-details';
import { WeatherForecast } from '../models/weather-forecast';

@Component({
  selector: 'app-weather-forecast-list',
  templateUrl: './weather-forecast-list.component.html',
  styleUrls: ['./weather-forecast-list.component.css']
})

export class WeatherForecastListComponent implements OnInit {

    @Input() searchText: string;
    weatherBitUrl: string;
    weatherForecasts: WeatherForecast[];
    cityDetails: CityDetails;
    
  constructor(private http: HttpClient) {
    this.weatherForecasts = [];
    this.weatherBitUrl = ``; 
    
    this.cityDetails = {
      cityName: '',
      stateCode: ''
    };
  }

  getWeather() {
    this.weatherBitUrl = `${weatherBit.urlBase}?city=${this.searchText}&key=${weatherBit.apiKey}`;
    //subscribe to weatherbit forecase results here 

    this.http.get(this.weatherBitUrl).subscribe( (results:any) => {
      console.log('Weather Results .....');
      console.log(results);
      console.log('Weather Results .....');
      //console.log(results['data']);
      this.weatherForecasts = results['data'];
      this.cityDetails.cityName = results['city_name'];
      this.cityDetails.stateCode = results['state_code'];
    } );

  }

  ngOnInit() {
  }

}
