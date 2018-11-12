import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CitiesService {
  private url = 'https://raw.githubusercontent.com/aZolo77/citiesBase/master/cities.json';
  public cityUser;
  public cities = [];
  public usedCities = [];
  public playerFlag = true;
  constructor(private http: HttpClient) {
    this.getCities();
  }
  public getJSON(): Observable<any> {
    return this.http.get<any>(this.url);
  }
  public getCities() {
    this.getJSON().subscribe(data => {
      let cities = data.city.map((city: any) => city.name.toLowerCase());
      this.cities.push(...cities);
      this.cities.sort(() => (Math.random() > 0.5 ? 1 : -1));
      console.log(this.cities);
      return this.cities;
    });
  }
  public isCityExist(city: string): boolean {
    return this.cities.includes(city);
  }
  public checkCityExist(city: string): boolean {
    const cityInput = city.toLowerCase();
    this.cityUser = city;
    console.log(this.cityUser);
    return this.isCityExist(cityInput) && !this.usedCities.includes(cityInput);
  }
  public pushToUsedCities(city: string) {
    this.usedCities.push(city);
    this.playerFlag = !this.playerFlag;
    console.log(this.playerFlag);
    console.log(this.usedCities);
  }
  public getUnusedCityEndsWith(latter: string, ignoreCitiesList: string[]): string | null {
    for (let i = 0; i < this.cities.length; i += 1) {
      const currentCity = this.cities[i];
      const lastCityLatter = currentCity[0];
      if (!ignoreCitiesList.includes(currentCity) && lastCityLatter === latter) {
        return currentCity;
      }
    }
    return null;
  }
  public getCityLastValidLetter(city: string): string {
    const unvailableLastLetter = ['ё', 'ь', 'ы', 'ъ'];
    let lastLetter = city[city.length - 1];
    for (let i = 0; i < unvailableLastLetter.length; i += 1) {
        if (lastLetter === unvailableLastLetter[i]) {
            lastLetter = city[city.length - 2];
        }
    }
    return lastLetter;
}
public pcWord(): string | null {
  const city = this.usedCities[this.usedCities.length - 1];
  const lastLetter = this.getCityLastValidLetter(city);
  const newCity = this.getUnusedCityEndsWith(lastLetter, this.usedCities);
  this.pushToUsedCities(newCity);
  return newCity;
}
 
}
