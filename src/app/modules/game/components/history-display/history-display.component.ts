import { Component, OnInit, Input } from '@angular/core';
import { CityInputComponent } from '../city-input/city-input.component';
import { CitiesService } from 'src/app/services/city-service/cities.service';

@Component({
  selector: 'app-history-display',
  templateUrl: './history-display.component.html',
  styleUrls: ['./history-display.component.css'],
})
export class HistoryDisplayComponent implements OnInit {
  constructor(private citiesService: CitiesService) {
    
  }
  ngOnInit() {
  }

}
