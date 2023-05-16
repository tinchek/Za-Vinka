import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}
  title = 'drugi-projekt';
 ngOnInit(): void {
  let headers = new HttpHeaders({});
 this.http.get<any>('https://api.openweathermap.org/data/2.5/weather?q={Zagreb}&appid={c7a86cc4dfc7b72fb150b9f9d0a74505}', {
  headers: headers
 }).subscribe(data => {
  console.log(data);
 })
  };
 }

