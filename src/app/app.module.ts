import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { PlayerComponent } from './modules/player/component/player.component'
import { AboutComponent } from './modules/about/pages/about/about.component';
import { SettingsComponent } from './modules/settings/pages/settings/settings.component';

import { GameComponent } from './modules/game/pages/game/game.component';
import { StartAppMenuComponent } from './modules/start-app-menu/start-app-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { CitiesService } from './services/city-service/cities.service';
import { GameModule } from './modules/game/game.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    AboutComponent,
    SettingsComponent,
    StartAppMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    GameModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
