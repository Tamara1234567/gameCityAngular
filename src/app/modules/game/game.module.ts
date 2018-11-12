import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './pages/game/game.component';
import { CityInputComponent } from './components/city-input/city-input.component';
import { HistoryDisplayComponent } from './components/history-display/history-display.component';
import { PlayersPanelComponent } from './components/players-panel/players-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CitiesService } from '../../services/city-service/cities.service';
import { AppComponent } from 'src/app/app.component';


@NgModule({
  declarations: [
    GameComponent,
    CityInputComponent,
    HistoryDisplayComponent,
    PlayersPanelComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
  ],
  entryComponents: [
    AppComponent,
  ],
  bootstrap: [
    GameComponent,
  ],
  providers: [
    CitiesService,
  ]
})

export class GameModule { }
