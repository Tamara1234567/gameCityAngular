import { Component, OnInit } from '@angular/core';
import { CitiesService } from 'src/app/services/city-service/cities.service';
import { HistoryDisplayComponent } from '../history-display/history-display.component';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-city-input',
  templateUrl: './city-input.component.html',
  styleUrls: ['./city-input.component.css']
})
export class CityInputComponent implements OnInit {
  private currentPlayerName = 'User';
  private usedCities = [];
  constructor(private citiesService: CitiesService) {
    this.usedCities = this.citiesService.usedCities;
  }
  ngOnInit() {
  }
  addUserCity(newCity: string) {
    if (!newCity || !this.citiesService.checkCityExist(newCity)) {
      return alert('Введите другой город');
    }
    if (this.citiesService.usedCities.length === 0) {
      this.citiesService.pushToUsedCities(newCity);
      return newCity;
    }
    const lastCity = this.citiesService.usedCities[this.citiesService.usedCities.length - 1];
    const prevCityLastLetter = this.citiesService.getCityLastValidLetter(lastCity);
    if (prevCityLastLetter !== newCity[0].toLocaleLowerCase()) {
      alert(`Введите город, который начиннается на букву ${prevCityLastLetter}`);
      return;
    }
    this.citiesService.pushToUsedCities(newCity);
    return newCity;
  }
}
