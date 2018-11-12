import { Component } from '@angular/core';
import { CitiesService } from './services/city-service/cities.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() { }
  ngOnInit() {
  }
}

