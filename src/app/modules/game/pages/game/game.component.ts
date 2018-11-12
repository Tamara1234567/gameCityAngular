import { Component, OnInit, Input } from '@angular/core';
import { Turn } from 'src/app/interfaces';
import { PlayerComponent } from '../../../player/component/player.component';
import { UserType } from '../../../../types';
import { CitiesService } from '../../../../services/city-service/cities.service';
import { CityInputComponent } from '../../components/city-input/city-input.component'


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent  {
  public usedCities: any[] =[];


  // public get currentUser(): PlayerComponent {
  //   return this.players[this.indexPlayer];
  // }

  constructor(private citiesService: CitiesService) {
    this.usedCities = this.citiesService.usedCities;
    // this.setUserNameToView();
  }

  addUserCity(newCity: string) {
    if (!newCity || !this.citiesService.checkCityExist(newCity)) {
      return alert('Введите другой город');
    }
    if (this.citiesService.usedCities.length === 0) {
      this.citiesService.pushToUsedCities(newCity);
      this.pcTurn();
      return newCity;
    }
    const lastCity = this.citiesService.usedCities[this.citiesService.usedCities.length - 1];
    const prevCityLastLetter = this.citiesService.getCityLastValidLetter(lastCity);
    if (prevCityLastLetter !== newCity[0].toLocaleLowerCase()) {
      alert(`Введите город, который начиннается на букву ${prevCityLastLetter}`);
      return;
    }
    this.citiesService.pushToUsedCities(newCity);
    this.pcTurn();

  }
   pcTurn(): string | null {
    const city = this.citiesService.usedCities[this.citiesService.usedCities.length - 1];
    const lastLetter = this.citiesService.getCityLastValidLetter(city);
    const newCity = this.citiesService.getUnusedCityEndsWith(lastLetter,this.citiesService.usedCities);
    this.citiesService.pushToUsedCities(newCity);
    return newCity;
  }
  
}
 

