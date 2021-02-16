import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OpenweatherService } from '../openweather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData: any;
  public roundedTemp: any;
  public roundedWindSpeed: any;
  public weatherIconUrl: any;

  constructor(
    private formBuilder: FormBuilder,
    private openweatherService: OpenweatherService
  ) {}

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToOpenWeatherAPI(formValues) {
    this.openweatherService.getData(formValues.location).subscribe(data => {
      this.weatherData = data;
      this.roundedTemp = Math.round(this.weatherData.main.temp * 10) / 10;
      this.roundedWindSpeed = Math.round(this.weatherData.wind.speed * 10) / 10;
      this.weatherIconUrl = `http://openweathermap.org/img/wn/${this.weatherData.weather[0].icon}@2x.png`;
    });
  }
}
