import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenweatherService {
  constructor(private http: HttpClient) {}

  getData(location) {
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?&APPID=e89fa7a0c975a12fa442a0043993334f&units=metric&q=' +
        location
    );
  }
}
